import useTime from './useTime'
import useInitialize from './useInitialize'

export default function useScience() {
  const { expandTime } = useTime();
  const { scienceList } = useInitialize();

  const increment = (key: string) => {
    //todo - yuck do this better
    const science = scienceList[key];
    if(!science.isIncrementing) {
      const timer = setInterval(function() {
        science.isIncrementing = true;
        //todo - figure out how I want the progress bars to work
        science.current += 10;
        if(science.current >= 100) {
          clearInterval(timer);
          setTimeout(function() {
            science.current = 0;
            science.total += 1;
            science.isIncrementing = false;
            expandTime(2);
          },200);
        }
      },100);
    }
  };

  return {
    increment,
  };
}