const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Avinash%20Anish&g=CubeStar1&x=thecubestar&l=avinash-anish&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F143164352%3Fs%3D400%26u%3D54634695f746486bd8b4d501683c9e80d83cb538%26v%3D4&p=https%3A%2F%2Favinash.thecubestar.com&z=81d8d";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
