const API_URL =
  "https://api.ayatiworks.com/api/v1/public/elite-global-school/contact_us/records";
const API_KEY =
  "ad0b8863350e55490f2777cb72a836fcb38c27d6e65bb960fd2c273b508e4696";

export async function submitContactForm(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    mode: "cors",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(
      `Contact form request failed with status ${response.status}${message ? `: ${message}` : ""}`,
    );
  }

  return response;
}
