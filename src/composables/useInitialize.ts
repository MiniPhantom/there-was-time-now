import { reactive, shallowRef } from 'vue'

import {
  AccumulationPrecipitation as DistillerIcon,
  Asset as AstronomyIcon,
  Carbon as ChronomogrificationIcon,
  Chip as QuantumComputingIcon,
  Compass as TzolkinIcon,
  Dna as BiologyIcon,
  EdtLoop as QuantumComputerIcon,
  Integration as CrystalSarcophagusIcon,
  MachineLearningModel as GeneticMemoryIcon,
  NavaidNdb as NepohualtzintzinIcon,
  NavaidVhfor as ElementZeroIcon,
} from '@vicons/carbon'

import {
} from '@vicons/fa'

import {
  Cube24Regular as ObsidianIcon,
  MathFormatProfessional24Regular as TimelessAlgebraIcon,
} from '@vicons/fluent'

import {
  BodyOutline as OmegapersonIcon,
  FlaskOutline as AlchemyIcon,
  PlanetOutline as ZodiacTalismanIcon,
  PrismOutline as PhilosophersStoneIcon,
} from '@vicons/ionicons5'

import {
} from '@vicons/material'

import {
  Atom as PhysicsIcon,
  BuildingMonument as TimehengeIcon,
  Circles as SarsenStonesIcon,
  CircleX as DefaultIcon,
  Diamond as ChronocrystalsIcon,
  DropletHalf2 as TheFluidIcon,
  Dna as TelomereStretcherIcon,
  Math as MathematicsIcon,
  ZodiacLeo as AethericHoroscopesIcon,
} from '@vicons/tabler'

import { Person } from '@/entities/Person'
import { Research } from '@/entities/Research'
import { ResearchKey, PersonKey } from '@/enum/Enums'

const personList : any = reactive({
  [PersonKey.LENNOX_OLD]: new Person(PersonKey.LENNOX_OLD, 'Lennox (1984)', 1984, 'Undergrads'),
  [PersonKey.LENNOX_YOUNG]: new Person(PersonKey.LENNOX_YOUNG, 'Lennox (1934)', 1934, 'Lab Partners'),
  [PersonKey.SAMA]: new Person(PersonKey.SAMA, 'Sama (904)', 904, 'Research Assistants'),
  [PersonKey.ITOTIA]: new Person(PersonKey.ITOTIA, 'Itotia (374)', 374, 'Numeric Priests'),
  [PersonKey.NECHTAN]: new Person(PersonKey.NECHTAN, 'Nechtan (2524 BC)', 0, 'Druids'),
});

const researchList : any = reactive({
  [ResearchKey.PHYSICS]: new Research(ResearchKey.PHYSICS, 'Physics', shallowRef(PhysicsIcon), '#F72585', 10, 1, 5, 5, false, PersonKey.LENNOX_OLD),
  [ResearchKey.QUANTUM_COMPUTING]: new Research(ResearchKey.QUANTUM_COMPUTING, 'Quantum Computing', shallowRef(QuantumComputingIcon), '#B5179E', 5, 1, 5, 5, false, PersonKey.LENNOX_OLD),
  [ResearchKey.QUANTUM_COMPUTER]: new Research(ResearchKey.QUANTUM_COMPUTER, 'Quantum Computer', shallowRef(QuantumComputerIcon), '#4361EE', 0.5, 1.1, 5, 5, false, PersonKey.LENNOX_OLD),
  [ResearchKey.CHRONOCRYSTALS]: new Research(ResearchKey.CHRONOCRYSTALS, 'Chronocrystals', shallowRef(ChronocrystalsIcon), '#4CC9F0', 0.5, 1, 5, 5, false, PersonKey.LENNOX_OLD),

  [ResearchKey.BIOLOGY]: new Research(ResearchKey.BIOLOGY, 'Biology', shallowRef(BiologyIcon), '#f4e285', 10, 1, 5, 5, false, PersonKey.LENNOX_YOUNG),
  [ResearchKey.GENETIC_MEMORY]: new Research(ResearchKey.GENETIC_MEMORY, 'Genetic Memory', shallowRef(GeneticMemoryIcon), '#FEFAE0', 5, 1, 5, 5, false, PersonKey.LENNOX_YOUNG),
  [ResearchKey.TELOMERE_STRETCHER]: new Research(ResearchKey.TELOMERE_STRETCHER, 'Telomere Stretcher', shallowRef(TelomereStretcherIcon), '#bc6c25', 0.5, 1.1, 5, 5, false, PersonKey.LENNOX_YOUNG),
  [ResearchKey.THE_FLUID]: new Research(ResearchKey.THE_FLUID, 'The Fluid', shallowRef(TheFluidIcon), '#606c38', 0.5, 1, 5, 5, false, PersonKey.LENNOX_YOUNG),

  [ResearchKey.ALCHEMY]: new Research(ResearchKey.ALCHEMY, 'Alchemy', shallowRef(AlchemyIcon), '#bfc0c0', 10, 1, 5, 5, false, PersonKey.SAMA),
  [ResearchKey.CHRONOMOGRIFICATION]: new Research(ResearchKey.CHRONOMOGRIFICATION, 'Chronomogrification', shallowRef(ChronomogrificationIcon), '#FFFFFF', 5, 1, 5, 5, false, PersonKey.SAMA),
  [ResearchKey.DISTILLER]: new Research(ResearchKey.DISTILLER, 'Distiller', shallowRef(DistillerIcon), '#EF8354', 0.5, 1.1, 5, 5, false, PersonKey.SAMA),
  [ResearchKey.ELEMENT_ZERO]: new Research(ResearchKey.ELEMENT_ZERO, 'Element Zero', shallowRef(ElementZeroIcon), '#4f5d75', 0.5, 1, 5, 5, false, PersonKey.SAMA),

  [ResearchKey.MATHEMATICS]: new Research(ResearchKey.MATHEMATICS, 'Mathematics', shallowRef(MathematicsIcon), '#48d7e7', 10, 1, 5, 5, false, PersonKey.ITOTIA),
  [ResearchKey.TIMELESS_ALGEBRA]: new Research(ResearchKey.TIMELESS_ALGEBRA, 'Timeless Algebra', shallowRef(TimelessAlgebraIcon), '#f168a7', 5, 1, 5, 5, false, PersonKey.ITOTIA),
  [ResearchKey.NEPOHUALTZINTZIN]: new Research(ResearchKey.NEPOHUALTZINTZIN, 'Nepohualtzintzin', shallowRef(NepohualtzintzinIcon), '#f1cbe6', 0.5, 1.1, 5, 5, false, PersonKey.ITOTIA),
  [ResearchKey.OBSIDIAN]: new Research(ResearchKey.OBSIDIAN, 'Obsidian', shallowRef(ObsidianIcon), '#f9d567', 0.5, 1, 5, 5, false, PersonKey.ITOTIA),

  [ResearchKey.ASTRONOMY]: new Research(ResearchKey.ASTRONOMY, 'Astronomy', shallowRef(AstronomyIcon), '#2c7da0', 10, 1, 5, 5, false, PersonKey.NECHTAN),
  [ResearchKey.AETHERIC_HOROSCOPES]: new Research(ResearchKey.AETHERIC_HOROSCOPES, 'Aetheric Horoscopes', shallowRef(AethericHoroscopesIcon), '#468faf', 5, 1, 5, 5, false, PersonKey.NECHTAN),
  [ResearchKey.ZODIAC_TALISMAN]: new Research(ResearchKey.ZODIAC_TALISMAN, 'Zodiac Talisman', shallowRef(ZodiacTalismanIcon), '#61a5c2', 0.5, 1.1, 5, 5, false, PersonKey.NECHTAN),
  [ResearchKey.SARSEN_STONES]: new Research(ResearchKey.SARSEN_STONES, 'Sarsen Stones', shallowRef(SarsenStonesIcon), '#89c2d9', 0.5, 1, 5, 5, false, PersonKey.NECHTAN),

  [ResearchKey.CRYSTAL_SARCOPHAGUS]: new Research(ResearchKey.CRYSTAL_SARCOPHAGUS, 'Crystal Sarcophagus', shallowRef(CrystalSarcophagusIcon), '#e0c3fc', 0.25, 1, 5, 5, true, PersonKey.LENNOX_OLD),
  [ResearchKey.OMEGAPERSON]: new Research(ResearchKey.OMEGAPERSON, 'Omegaperson', shallowRef(OmegapersonIcon), '#fb8500', 0.25, 1, 5, 5, true, PersonKey.LENNOX_YOUNG),
  [ResearchKey.PHILOSOPHERS_STONE]: new Research(ResearchKey.PHILOSOPHERS_STONE, 'Philosopher\'s Stone', shallowRef(PhilosophersStoneIcon), '#d4af37', 0.25, 1, 5, 5, true, PersonKey.SAMA),
  [ResearchKey.TZOLKIN]: new Research(ResearchKey.TZOLKIN, 'Tzolk\'in', shallowRef(TzolkinIcon), '#8cb369', 0.25, 1, 5, 5, true, PersonKey.ITOTIA),
  [ResearchKey.TIMEHENGE]: new Research(ResearchKey.TIMEHENGE, 'Timehenge', shallowRef(TimehengeIcon), '#a9d6e5', 0.25, 1, 5, 5, true, PersonKey.NECHTAN),
});

const unlockableList : any = reactive({
  ...personList,
  ...researchList,
});

function associateUnlocks() {
  //Lennox (1984)
  researchList[ResearchKey.QUANTUM_COMPUTING].setUnlock(ResearchKey.PHYSICS, 1);
  researchList[ResearchKey.QUANTUM_COMPUTER].setUnlock(ResearchKey.QUANTUM_COMPUTING, 10);
  researchList[ResearchKey.CHRONOCRYSTALS].setUnlock(ResearchKey.TELOMERE_STRETCHER, 10);
  researchList[ResearchKey.CRYSTAL_SARCOPHAGUS].setUnlock(ResearchKey.TELOMERE_STRETCHER, 10);

  //Lennox (1934)
  personList[PersonKey.LENNOX_YOUNG].setUnlock(ResearchKey.QUANTUM_COMPUTER, 10);
  researchList[ResearchKey.BIOLOGY].setUnlock(ResearchKey.QUANTUM_COMPUTER, 10);
  researchList[ResearchKey.GENETIC_MEMORY].setUnlock(ResearchKey.BIOLOGY, 10);
  researchList[ResearchKey.TELOMERE_STRETCHER].setUnlock(ResearchKey.GENETIC_MEMORY, 10);
  researchList[ResearchKey.THE_FLUID].setUnlock(ResearchKey.CHRONOCRYSTALS, 10);
  researchList[ResearchKey.OMEGAPERSON].setUnlock(ResearchKey.CHRONOCRYSTALS, 10);

  //Sama (904)
  personList[PersonKey.SAMA].setUnlock(ResearchKey.THE_FLUID, 10);
  researchList[ResearchKey.ALCHEMY].setUnlock(ResearchKey.THE_FLUID, 10);
  researchList[ResearchKey.CHRONOMOGRIFICATION].setUnlock(ResearchKey.ALCHEMY, 10);
  researchList[ResearchKey.DISTILLER].setUnlock(ResearchKey.CHRONOMOGRIFICATION, 10);
  researchList[ResearchKey.ELEMENT_ZERO].setUnlock(ResearchKey.DISTILLER, 10);
  researchList[ResearchKey.PHILOSOPHERS_STONE].setUnlock(ResearchKey.DISTILLER, 10);

  //Itotia (374)
  personList[PersonKey.ITOTIA].setUnlock(ResearchKey.ELEMENT_ZERO, 10);
  researchList[ResearchKey.MATHEMATICS].setUnlock(ResearchKey.ELEMENT_ZERO, 10);
  researchList[ResearchKey.TIMELESS_ALGEBRA].setUnlock(ResearchKey.MATHEMATICS, 10);
  researchList[ResearchKey.NEPOHUALTZINTZIN].setUnlock(ResearchKey.TIMELESS_ALGEBRA, 10);
  researchList[ResearchKey.OBSIDIAN].setUnlock(ResearchKey.NEPOHUALTZINTZIN, 10);
  researchList[ResearchKey.TZOLKIN].setUnlock(ResearchKey.NEPOHUALTZINTZIN, 10);

  //Nechtan (2524 BC)
  personList[PersonKey.NECHTAN].setUnlock(ResearchKey.OBSIDIAN, 10);
  researchList[ResearchKey.ASTRONOMY].setUnlock(ResearchKey.OBSIDIAN, 10);
  researchList[ResearchKey.AETHERIC_HOROSCOPES].setUnlock(ResearchKey.ASTRONOMY, 10);
  researchList[ResearchKey.ZODIAC_TALISMAN].setUnlock(ResearchKey.AETHERIC_HOROSCOPES, 10);
  researchList[ResearchKey.SARSEN_STONES].setUnlock(ResearchKey.ZODIAC_TALISMAN, 10);
  researchList[ResearchKey.TIMEHENGE].setUnlock(ResearchKey.ZODIAC_TALISMAN, 10);
}

associateUnlocks();

export default function useInitialize() {

  researchList[ResearchKey.PHYSICS].isUnlocked = true;
  personList[PersonKey.LENNOX_OLD].isUnlocked = true;

  //todo - remove this later
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  if(params['UNLOCK_ALL'] === "true") {
    for(const person in personList) {
      personList[person].isUnlocked = true;
    }
    for(const research in researchList) {
      researchList[research].isUnlocked = true;
    }
  }
  if(params['QUICK_MODE'] === "true") {
    for(const research in researchList) {
      researchList[research].speed = 10;
      researchList[research].unlockThreshold = 1;
      //researchList[research].unlocks.forEach((unlock: { threshold: number }) => unlock.threshold = 1);
    }
    for(const person in personList) {
      personList[person].unlockThreshold = 1;
    }
  }

  return {
    personList,
    researchList,
    unlockableList,
  }
}