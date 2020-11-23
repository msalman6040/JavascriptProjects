// file tells how many or less hours of sleep a person needs.
const getSleepHours = day => {
  switch (day) {
    case 'monday': {
      return 8;
      break;
    }    
    case 'tuesday': {
      return 6;
      break;
    }    
    case 'wednesday': {
      return 5;
      break;
    }    
    case 'thursday': {
      return 4;
      break;
    }    
    case 'friday': {
      return 3;
      break;
    }    
    case 'saturday': {
      return 2;
      break;
    }    
    case 'sunday': {
      return 1;
      break;
    } 
    default:
      return 'error';
  }
}

const getActualSleepHours = () => 
//  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
7 + 6 + 5 + 4 + 3 + 2 + 1;


const getIdealSleepHours = (x = 8) => {
  const idealHours = x;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours) {
    console.log('User got the perfect amount of sleep.'); }
    else if (actualSleepHours > idealSleepHours) {
      console.log('User got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed.'); }
      else if (actualSleepHours < idealSleepHours) {
        console.log('User should get ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep');}
}
calculateSleepDebt();
