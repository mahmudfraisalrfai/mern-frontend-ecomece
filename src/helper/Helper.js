import axios from "axios";

export async function getcartData(url, callback, headers = null) {
  if (headers) {
    const data = await (await axios.get(url, { headers }))?.data;

    return callback ? callback(data) : data;
  }
}
export async function getServerData(url, callback, query = null) {
  let data;

  if (query) {
    data = await (await axios.get(url, { params: query }))?.data;
  } else {
    data = await (await axios.get(url))?.data;
  }

  return callback ? callback(data) : data;
}
export async function patchServerData(url, callback, body) {
  const data = await (await axios.patch(url, body))?.data;
  return callback ? callback(data) : data;
}
export async function postServerData(url, callback, bodyData, headers = null) {
  let data;
  try {
    if (headers) {
      data = await axios.post(url, bodyData, { headers });
    } else {
      data = await axios.post(url, bodyData);
    }

    return callback ? callback(data.data) : data.data;
  } catch (error) {
    console.error("Error in postServerData:", error);
    throw error; // يمكنك إرجاع أو تسجيل الخطأ بناءً على الاحتياج
  }
}

export function getRandomElements(arr, count) {
  const result = [];
  const usedIndices = new Set(); // لتجنب اختيار نفس العنصر مرتين

  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * arr.length); // اختيار فهرس عشوائي

    if (!usedIndices.has(randomIndex)) {
      result.push(arr[randomIndex]); // إضافة العنصر إلى النتيجة
      usedIndices.add(randomIndex); // حفظ الفهرس المختار
    }
  }

  return result;
}
