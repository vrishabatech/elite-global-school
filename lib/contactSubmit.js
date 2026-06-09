const API_URL = "/api/contact";

export async function submitContactForm(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(
      `Contact form request failed with status ${response.status}${message ? `: ${message}` : ""}`,
    );
  }

  return response;
}
