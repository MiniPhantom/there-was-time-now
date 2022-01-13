import { watchEffect } from 'vue'
import { useDialog } from 'naive-ui'
import useInitialize from '@/composables/useInitialize'
// @ts-ignore
import useMessage from '@/composables/useMessage'
import useTime from '@/composables/useTime'
import useFlags from '@/composables/useFlags'
import { GameConstants } from '@/enum/Constants'
import { NarrativeKey, PersonKey, ResearchKey } from '@/enum/Enums'
import { messages } from '@/locales/en'

//todo - some of this could probably be triggered other ways
export default function useSpecialEvents() {

  const dialog = useDialog();
  const { personList, researchList } = useInitialize();
  const { sendNarrativeMessage } = useMessage();
  const { countdownTimer, countupTimer, } = useTime();
  const { countdownTriggered, gameEnded, isLoading, sellFeatureEnabled, slowdownEnabled, spokeToLennox, spokeToSama } = useFlags();
  

  //When first quantum computer is built, start the end of world timer
  watchEffect(() => {
    if(!countdownTriggered.value && researchList[ResearchKey.QUANTUM_COMPUTER].total == 1 && !isLoading.value) {
      countdownTriggered.value = true;
      sendNarrativeMessage(messages[NarrativeKey.UNLOCK_COUNTDOWN]);
      countdownTimer.start();
      countupTimer.stop();
    }
  });

  //When fifth quantum computer is built, unlock buy/sell
  watchEffect(() => {
    if(!sellFeatureEnabled.value && researchList[ResearchKey.QUANTUM_COMPUTER].total == 5 && !isLoading.value) {
      sellFeatureEnabled.value = true;
      sendNarrativeMessage(messages[NarrativeKey.UNLOCK_WORKERS]);
    }
  });

  //When first worker is purchased, unlock slowdown
  watchEffect(() => {
    if(!slowdownEnabled.value && Object.values(researchList).find((research: any) => research.numWorkers > 0)) {
      slowdownEnabled.value = true;
      sendNarrativeMessage(messages[NarrativeKey.UNLOCK_SLOWDOWN]);
    }
  });

  //When tenth quantum computer is built and slowdown is enabled, unlock young lennox
  watchEffect(() => {
    if(!personList[PersonKey.LENNOX_YOUNG].isUnlocked && researchList[ResearchKey.QUANTUM_COMPUTER].total >= 10 && slowdownEnabled.value) {
      personList[PersonKey.LENNOX_YOUNG].isUnlocked = true;
      researchList[ResearchKey.BIOLOGY].isUnlocked = true;
      sendNarrativeMessage(messages[NarrativeKey.UNLOCK_YOUNG_LENNOX]);
    }
  });

  //When fifth biology is researched, send message
  watchEffect(() => {
    if(!spokeToLennox.value && researchList[ResearchKey.BIOLOGY].total == 5 && !isLoading.value){
      spokeToLennox.value = true;
      sendNarrativeMessage(messages[NarrativeKey.SPEAK_TO_LENNOX]);
    }
  });

  //When first telomere stretcher is researched, unlock sama, alchemy, crystal sarcophagus, chronocrystals, omegaperson, the fluid
  watchEffect(() => {
    if(!personList[PersonKey.SAMA].isUnlocked && researchList[ResearchKey.TELOMERE_STRETCHER].total == 1 && !isLoading.value){
      personList[PersonKey.SAMA].isUnlocked = true;
      researchList[ResearchKey.ALCHEMY].isUnlocked = true;
      researchList[ResearchKey.CRYSTAL_SARCOPHAGUS].isUnlocked = true;
      researchList[ResearchKey.CHRONOCRYSTALS].isUnlocked = true;
      researchList[ResearchKey.OMEGAPERSON].isUnlocked = true;
      researchList[ResearchKey.THE_FLUID].isUnlocked = true;
      sendNarrativeMessage(messages[NarrativeKey.UNLOCK_SAMA]);
    }
  });

  //When fifth alchemy is researched, send message
  watchEffect(() => {
    if(!spokeToSama.value && researchList[ResearchKey.ALCHEMY].total == 5 && !isLoading.value){
      spokeToSama.value = true;
      sendNarrativeMessage(messages[NarrativeKey.SPEAK_TO_SAMA]);
    }
  });

  //When first distiller stretcher is researched, unlock itotia, philosopher's stone, eezo
  watchEffect(() => {
    if(!personList[PersonKey.ITOTIA].isUnlocked && researchList[ResearchKey.DISTILLER].total == 1 && !isLoading.value){
      personList[PersonKey.ITOTIA].isUnlocked = true;
      researchList[ResearchKey.MATHEMATICS].isUnlocked = true;
      researchList[ResearchKey.PHILOSOPHERS_STONE].isUnlocked = true;
      researchList[ResearchKey.ELEMENT_ZERO].isUnlocked = true;
      sendNarrativeMessage(messages[NarrativeKey.UNLOCK_ITOTIA]);
    }
  });

  
  //When first nepohualtzintzin is researched, unlock nechtan, astronomy, tzolk'in, obsidian
  watchEffect(() => {
    if(!personList[PersonKey.NECHTAN].isUnlocked && researchList[ResearchKey.NEPOHUALTZINTZIN].total == 1 && !isLoading.value){
      personList[PersonKey.NECHTAN].isUnlocked = true;
      researchList[ResearchKey.ASTRONOMY].isUnlocked = true;
      researchList[ResearchKey.TZOLKIN].isUnlocked = true;
      researchList[ResearchKey.OBSIDIAN].isUnlocked = true;
      sendNarrativeMessage(messages[NarrativeKey.UNLOCK_NECHTAN]);
    }
  });

  //When time is halfway up, show message
  watchEffect(() => {
    if(countdownTimer.secondsLeft() == GameConstants.INITIAL_TIME / 2 && !isLoading.value){
      sendNarrativeMessage(messages[NarrativeKey.HALFWAY]);
    }
  });

  //When you finish building all devices, you win
  watchEffect(() => {
    if(isLoading.value) {
      return;
    }
    const devices = Object.values(researchList).filter((research: any) => research.isDevice);
    const devicesComplete = devices.filter((research: any) => research.total == 1);
    if(devices.length == devicesComplete.length) {
      countdownTimer.stop();
      gameEnded.value = true;
      dialog.success({
        title: 'Game Won',
        content: 'You successfully stopped the end of the world!'
      });
    }
  });

  //When countdown timer is expired, show end of game modal
  watchEffect(async() => {
    if(countdownTimer.isExpired() && !isLoading.value) {
      gameEnded.value = true;

      dialog.error({
        title: 'Game Over',
        content: '#OUTATIME'
      });
    }
  });
}