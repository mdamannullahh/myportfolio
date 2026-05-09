export type SupportedLanguage =
  | "english"
  | "hinglish"
  | "hindi"
  | "urdu"
  | "tamil"
  | "telugu"
  | "kannada"
  | "malayalam"
  | "bengali"
  | "arabic"
  | "japanese"
  | "chinese"
  | "korean"
  | "german"
  | "french"
  | "spanish"
  | "dutch"
  | "russian";

export function detectLanguage(
  text: string
): SupportedLanguage {
  const lower = text.toLowerCase();

  /* --------------------------------
     UNICODE SCRIPT DETECTION
  -------------------------------- */

  // Hindi / Devanagari
  if (/[\u0900-\u097F]/.test(text)) {
    return "hindi";
  }

  // Urdu / Arabic script
  if (/[\u0600-\u06FF]/.test(text)) {
    return "urdu";
  }

  // Tamil
  if (/[\u0B80-\u0BFF]/.test(text)) {
    return "tamil";
  }

  // Telugu
  if (/[\u0C00-\u0C7F]/.test(text)) {
    return "telugu";
  }

  // Kannada
  if (/[\u0C80-\u0CFF]/.test(text)) {
    return "kannada";
  }

  // Malayalam
  if (/[\u0D00-\u0D7F]/.test(text)) {
    return "malayalam";
  }

  // Bengali
  if (/[\u0980-\u09FF]/.test(text)) {
    return "bengali";
  }

  // Japanese
  if (/[\u3040-\u30FF]/.test(text)) {
    return "japanese";
  }

  // Chinese
  if (/[\u4E00-\u9FFF]/.test(text)) {
    return "chinese";
  }

  // Korean
  if (/[\uAC00-\uD7AF]/.test(text)) {
    return "korean";
  }

  /* --------------------------------
     HINGLISH DETECTION
  -------------------------------- */

  const hinglishWords = [
    "kya",
    "kaise",
    "bhai",
    "bro",
    "tum",
    "tera",
    "mera",
    "hai",
    "nahi",
    "haan",
    "acha",
    "kar",
    "karna",
    "samjha",
    "bata",
    "kyu",
    "matlab",
    "yaar",
    "acha",
    "theek",
    "sahi",
    "pata",
  ];

  const isHinglish =
    hinglishWords.filter((w) =>
      lower.includes(w)
    ).length >= 2;

  if (isHinglish) {
    return "hinglish";
  }

  /* --------------------------------
     FOREIGN LANGUAGE WORD MATCHING
  -------------------------------- */

  const languagePatterns = {
    german: [
      "hallo",
      "danke",
      "guten",
      "wie",
      "nicht",
    ],

    french: [
      "bonjour",
      "merci",
      "comment",
      "salut",
    ],

    spanish: [
      "hola",
      "gracias",
      "como",
      "amigo",
    ],

    dutch: [
      "hallo",
      "dank",
      "goed",
      "vriend",
    ],

    russian: [
      "privet",
      "spasibo",
      "kak",
    ],

    arabic: [
      "marhaba",
      "shukran",
    ],
  };

  for (const [lang, words] of Object.entries(
    languagePatterns
  )) {
    const matched = words.some((w) =>
      lower.includes(w)
    );

    if (matched) {
      return lang as SupportedLanguage;
    }
  }

  return "english";
}

/* --------------------------------
   FOLLOW UPS
-------------------------------- */

export function localizeFollowUp(
  followUp: string,
  lang: SupportedLanguage
) {
  if (!followUp) return "";

  switch (lang) {
    case "hinglish":
      return `😄 ${followUp
        .replace(/Would you like to/gi, "Kya tum")
        .replace(/Would you like/gi, "Kya tum")
        .replace(/know/gi, "jaan-na")
        .replace(/explore/gi, "explore karna")
        .replace(/contact/gi, "contact karna")} 👀`;

    case "hindi":
      return "😄 क्या आप इसके बारे में और जानना चाहेंगे? 👀";

    case "urdu":
      return "😄 کیا آپ اس کے بارے میں مزید جاننا چاہیں گے؟ 👀";

    case "tamil":
      return "😄 இதைப் பற்றி மேலும் தெரிந்துகொள்ள விரும்புகிறீர்களா? 👀";

    case "telugu":
      return "😄 దీని గురించి ఇంకా తెలుసుకోవాలనుకుంటున్నారా? 👀";

    case "kannada":
      return "😄 ಇದರ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಲು ಇಷ್ಟವಿದೆಯೆ? 👀";

    case "malayalam":
      return "😄 ഇതിനെക്കുറിച്ച് കൂടുതൽ അറിയണോ? 👀";

    case "bengali":
      return "😄 আপনি কি এ সম্পর্কে আরও জানতে চান? 👀";

    case "japanese":
      return "😄 もっと知りたいですか？ 👀";

    case "chinese":
      return "😄 你想了解更多吗？ 👀";

    case "korean":
      return "😄 더 알고 싶으신가요? 👀";

    case "german":
      return "😄 Möchten Sie mehr erfahren? 👀";

    case "french":
      return "😄 Voulez-vous en savoir plus ? 👀";

    case "spanish":
      return "😄 ¿Te gustaría saber más? 👀";

    case "dutch":
      return "😄 Wil je meer weten? 👀";

    case "russian":
      return "😄 Хотите узнать больше? 👀";

    default:
      return `✨ ${followUp}`;
  }
}

/* --------------------------------
   FALLBACKS
-------------------------------- */

export function localizeFallback(
  lang: SupportedLanguage
) {
  switch (lang) {
    case "hinglish":
      return "😅 Mujhe iske baare mein exact info nahi hai bro. Mohammad ko directly contact karna chahoge? 📩";

    case "hindi":
      return "😅 मुझे इसके बारे में जानकारी नहीं है। क्या आप मोहम्मद से संपर्क करना चाहेंगे? 📩";

    case "urdu":
      return "😅 مجھے اس بارے میں معلومات نہیں ہیں۔ کیا آپ محمد سے رابطہ کرنا چاہیں گے؟ 📩";

    case "tamil":
      return "😅 இதைப் பற்றி எனக்கு தகவல் இல்லை. முகம்மதையை தொடர்புகொள்ள விரும்புகிறீர்களா? 📩";

    case "telugu":
      return "😅 దీని గురించి నాకు సమాచారం లేదు. మహమ్మద్‌ను సంప్రదించాలనుకుంటున్నారా? 📩";

    case "kannada":
      return "😅 ಇದರ ಬಗ್ಗೆ ನನಗೆ ಮಾಹಿತಿ ಇಲ್ಲ. ಮೊಹಮ್ಮದ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಲು ಇಷ್ಟವಿದೆಯೆ? 📩";

    case "malayalam":
      return "😅 ഇതിനെക്കുറിച്ച് എനിക്ക് വിവരമില്ല. മുഹമ്മദ്‌ను ബന്ധപ്പെടണോ? 📩";

    case "bengali":
      return "😅 এ বিষয়ে আমার তথ্য নেই। আপনি কি মোহাম্মদের সাথে যোগাযোগ করতে চান? 📩";

    case "japanese":
      return "😅 その情報はまだありません。Mohammad に連絡しますか？ 📩";

    case "chinese":
      return "😅 我暂时没有这方面的信息。你想联系 Mohammad 吗？ 📩";

    case "korean":
      return "😅 아직 해당 정보가 없습니다. Mohammad에게 연락하시겠습니까? 📩";

    case "german":
      return "😅 Darüber habe ich noch keine Informationen. Möchten Sie Mohammad kontaktieren? 📩";

    case "french":
      return "😅 Je n'ai pas encore cette information. Voulez-vous contacter Mohammad ? 📩";

    case "spanish":
      return "😅 Aún no tengo información sobre eso. ¿Quieres contactar a Mohammad? 📩";

    case "dutch":
      return "😅 Daar heb ik nog geen informatie over. Wil je Mohammad contacteren? 📩";

    case "russian":
      return "😅 У меня пока нет информации об этом. Хотите связаться с Mohammad? 📩";

    default:
      return "😅 I don't have information about that yet. Would you like to contact Mohammad directly? 📩";
  }
}