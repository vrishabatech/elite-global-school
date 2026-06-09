const API_URL =
  "https://api.ayatiworks.com/api/v1/public/elite-global-school/contact_us/records";
const API_KEY =
  "ad0b8863350e55490f2777cb72a836fcb38c27d6e65bb960fd2c273b508e4696";

export async function POST(request) {
  try {
    const payload = await request.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    return Response.json(
      typeof body === "string" ? { message: body } : body,
      { status: response.status },
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Unable to submit contact form" },
      { status: 500 },
    );
  }
}
