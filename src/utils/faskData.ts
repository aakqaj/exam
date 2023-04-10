import { number } from "echarts";

interface VisitRecord {
  time: string;
  value: number;
}

const faskData: any = {
  "0:00": [13, 12, 9, 0, 11, 3, 2, 4, 5, 23, 2, 1, 12, 3, 8],
  "00:00": [13, 12, 9, 0, 11, 3, 2, 4, 5, 23, 2, 1, 12, 3, 8],
  "01:00": [13, 12, 9, 0, 11, 3, 2, 4, 5, 23, 2, 1, 12, 3, 8],
  "02:00": [13, 12, 9, 0, 11, 3, 2, 4, 5, 23, 2, 1, 12, 3, 8],
  "03:00": [13, 12, 9, 0, 11, 3, 2, 4, 5, 23, 2, 1, 12, 3, 8],
  "04:00": [13, 12, 9, 0, 11, 3, 2, 4, 5, 23, 2, 1, 12, 3, 8],
  "05:00": [13, 12, 9, 0, 11, 3, 2, 4, 5, 23, 2, 1, 12, 3, 8],
  "06:00": [22, 24, 45, 35, 22, 31, 21, 42, 50, 23, 28, 34, 48, 98, 89],
  "07:00": [
    88, 112, 119, 110, 121, 123, 123, 124, 135, 123, 200, 109, 122, 231, 238,
  ],
  "08:00": [
    220, 122, 300, 366, 280, 312, 422, 432, 389, 398, 396, 280, 288, 420, 510,
  ],
  "09:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "10:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "11:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "12:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "13:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "14:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "15:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "16:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "17:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "18:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "19:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "20:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "21:00": [
    590, 880, 908, 689, 1000, 1080, 890, 898, 1890, 980, 997, 992, 1870, 1002,
    899,
  ],
  "22:00": [
    220, 122, 300, 366, 280, 312, 422, 432, 389, 398, 396, 280, 288, 420, 510,
  ],
  "23:00": [22, 12, 9, 0, 11, 3, 2, 4, 5, 23, 2, 1, 12, 3, 8],
};

export function getFaskData(time: any) {
  const data = faskData[time];
  if (!data) return 0;
  const index = Math.floor(Math.random() * data?.length);
  return data[index];
}

// 生成随机整数
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 生成时间格式数组
function generateTimeArray() {
  const hours = Array.from({ length: 24 }, (_, i) => i); // 生成0-23的小时数数组
  const timeArray = hours.map((hour) =>
    hour < 10 ? `0${hour}:00` : `${hour}:00`
  ); // 根据小时数数组生成时间格式数组，如['00:00', '01:00', ...]
  return timeArray;
}

// 生成访问人数数组
export function generateVisitData() {
  const visitData: {
    time: string;
    value: number;
  }[] = [];
  const timeArray = generateTimeArray();
  const minHour = 11; // 范围最小小时数
  const maxHour = 16; // 范围最大小时数
  const rangeHours = Array.from(
    { length: maxHour - minHour + 1 },
    (_, i) => i + minHour
  ); // 范围内小时数数组
  for (let i = 0; i < timeArray.length; i++) {
    const hour = parseInt(timeArray[i].split(":")[0]); // 获取当前时间的小时数
    if (rangeHours.includes(hour)) {
      // 如果当前时间在范围内，生成随机数据
      const value = getRandomInt(100, 500);
      console.log(value);

      visitData.push({ time: timeArray[i], value });
    }
  }
  return visitData;
}

export function formatTime(time: number) {
  const hourString = (time % 24).toString().padStart(2, "0");
  return `${hourString}:00`;
}

// export function iterativeTimeData(
//   data: {
//     time: string;
//     value: number;
//   }[]
// ) {
//   data.shift();
//   const time = parseInt(data[data.length - 1].time.split(":")[0]);
//   data.push({
//     time: formatTime(time + 1),
//     value: getRandomInt(100, 200),
//   });

//   return data;
// }
