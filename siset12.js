// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 12
// Focus: Targeted Practice (Polity, Indian Geography, Modern History, Science)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- INDIAN POLITY ---
    {
        id: 1,
        question: "Who is the Chairman of the Rajya Sabha?",
        questionHindi: "राज्यसभा का सभापति कौन होता है?",
        options: [
            "President / राष्ट्रपति",
            "Vice President / उपराष्ट्रपति",
            "Prime Minister / प्रधान मंत्री",
            "Speaker / अध्यक्ष"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 2,
        question: "Under which article can the President declare National Emergency?",
        questionHindi: "किस अनुच्छेद के तहत राष्ट्रपति राष्ट्रीय आपातकाल घोषित कर सकते हैं?",
        options: [
            "Article 352 / अनुच्छेद 352",
            "Article 356 / अनुच्छेद 356",
            "Article 360 / अनुच्छेद 360",
            "Article 370 / अनुच्छेद 370"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 3,
        question: "The 'Right to Property' is a:",
        questionHindi: "'संपत्ति का अधिकार' एक है:",
        options: [
            "Fundamental Right / मौलिक अधिकार",
            "Legal Right / कानूनी अधिकार",
            "Natural Right / प्राकृतिक अधिकार",
            "Moral Right / नैतिक अधिकार"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 4,
        question: "Which schedule of the Constitution contains the list of recognized languages?",
        questionHindi: "संविधान की किस अनुसूची में मान्यता प्राप्त भाषाओं की सूची है?",
        options: [
            "7th Schedule / 7वीं अनुसूची",
            "8th Schedule / 8वीं अनुसूची",
            "9th Schedule / 9वीं अनुसूची",
            "10th Schedule / 10वीं अनुसूची"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 5,
        question: "The minimum age to contest Lok Sabha election is:",
        questionHindi: "लोकसभा चुनाव लड़ने के लिए न्यूनतम आयु है:",
        options: [
            "21 years / 21 वर्ष",
            "25 years / 25 वर्ष",
            "30 years / 30 वर्ष",
            "35 years / 35 वर्ष"
        ],
        correct: 1,
        subject: "Polity"
    },

    // --- GEOGRAPHY (Indian) ---
    {
        id: 6,
        question: "Which state has the longest coastline in India?",
        questionHindi: "भारत में किस राज्य की तटरेखा सबसे लंबी है?",
        options: [
            "Maharashtra / महाराष्ट्र",
            "Tamil Nadu / तमिलनाडु",
            "Gujarat / गुजरात",
            "Andhra Pradesh / आंध्र प्रदेश"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 7,
        question: "The 'Oldest Mountain Range' in India is:",
        questionHindi: "भारत की 'सबसे पुरानी पर्वत श्रृंखला' है:",
        options: [
            "Himalayas / हिमालय",
            "Aravalli / अरावली",
            "Satpura / सतपुड़ा",
            "Nilgiri / नीलगिरी"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 8,
        question: "Which river is called 'Dakshin Ganga'?",
        questionHindi: "किस नदी को 'दक्षिण गंगा' कहा जाता है?",
        options: [
            "Krishna / कृष्णा",
            "Kaveri / कावेरी",
            "Godavari / गोदावरी",
            "Mahanadi / महानदी"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 9,
        question: "The 'Hirakud Dam' is built on which river?",
        questionHindi: "'हीराकुंड बांध' किस नदी पर बना है?",
        options: [
            "Mahanadi / महानदी",
            "Godavari / गोदावरी",
            "Cauvery / कावेरी",
            "Periyar / पेरियार"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 10,
        question: "Which state is known as the 'Tiger State' of India?",
        questionHindi: "किस राज्य को भारत का 'टाइगर स्टेट' कहा जाता है?",
        options: [
            "Gujarat / गुजरात",
            "Madhya Pradesh / मध्य प्रदेश",
            "Uttarakhand / उत्तराखंड",
            "West Bengal / पश्चिम बंगाल"
        ],
        correct: 1,
        subject: "Geography"
    },

    // --- HISTORY (Modern) ---
    {
        id: 11,
        question: "Who was the first Governor-General of Independent India?",
        questionHindi: "स्वतंत्र भारत के प्रथम गवर्नर-जनरल कौन थे?",
        options: [
            "C. Rajagopalachari / सी. राजगोपालाचारी",
            "Lord Mountbatten / लॉर्ड माउंटबेटन",
            "Rajendra Prasad / राजेंद्र प्रसाद",
            "Jawaharlal Nehru / जवाहरलाल नेहरू"
        ],
        correct: 1,
        subject: "Modern History"
    },
    {
        id: 12,
        question: "The 'Jallianwala Bagh Massacre' took place in:",
        questionHindi: "'जलियांवाला बाग हत्याकांड' कब हुआ था?",
        options: [
            "1917",
            "1918",
            "1919",
            "1920"
        ],
        correct: 2,
        subject: "Modern History"
    },
    {
        id: 13,
        question: "Who founded the 'Ramakrishna Mission'?",
        questionHindi: "'रामकृष्ण मिशन' की स्थापना किसने की?",
        options: [
            "Swami Dayanand / स्वामी दयानंद",
            "Swami Vivekananda / स्वामी विवेकानंद",
            "Ramakrishna Paramhansa / रामकृष्ण परमहंस",
            "Raja Ram Mohan Roy / राजा राम मोहन राय"
        ],
        correct: 1,
        subject: "Modern History"
    },
    {
        id: 14,
        question: "In which year did the 'Quit India Movement' begin?",
        questionHindi: "'भारत छोड़ो आंदोलन' किस वर्ष शुरू हुआ?",
        options: [
            "1930",
            "1940",
            "1942",
            "1947"
        ],
        correct: 2,
        subject: "Modern History"
    },
    {
        id: 15,
        question: "Who was known as 'Punjab Kesari'?",
        questionHindi: "'पंजाब केसरी' के नाम से किसे जाना जाता था?",
        options: [
            "Bhagat Singh / भगत सिंह",
            "Lala Lajpat Rai / लाला लाजपत राय",
            "Sukhdev / सुखदेव",
            "Udham Singh / उधम सिंह"
        ],
        correct: 1,
        subject: "Modern History"
    },

    // --- GENERAL SCIENCE ---
    {
        id: 16,
        question: "What is the SI unit of Force?",
        questionHindi: "बल का SI मात्रक क्या है?",
        options: [
            "Joule / जूल",
            "Newton / न्यूटन",
            "Pascal / पास्कल",
            "Watt / वाट"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 17,
        question: "Which mirror is used in vehicles as a rear-view mirror?",
        questionHindi: "वाहनों में पीछे देखने वाले दर्पण (rear-view mirror) के रूप में किस दर्पण का उपयोग किया जाता है?",
        options: [
            "Concave Mirror / अवतल दर्पण",
            "Convex Mirror / उत्तल दर्पण",
            "Plane Mirror / समतल दर्पण",
            "Inverted Mirror / उल्टा दर्पण"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 18,
        question: "What is the chemical formula of Water?",
        questionHindi: "पानी का रासायनिक सूत्र क्या है?",
        options: [
            "H2O",
            "HO2",
            "H2O2",
            "D2O"
        ],
        correct: 0,
        subject: "Chemistry"
    },
    {
        id: 19,
        question: "Which gas is essential for burning?",
        questionHindi: "जलने के लिए कौन सी गैस आवश्यक है?",
        options: [
            "Nitrogen / नाइट्रोजन",
            "Oxygen / ऑक्सीजन",
            "Carbon Dioxide / कार्बन डाइऑक्साइड",
            "Hydrogen / हाइड्रोजन"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 20,
        question: "The human heart has how many chambers?",
        questionHindi: "मानव हृदय में कितने कक्ष होते हैं?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 21,
        question: "Which vitamin helps in clotting of blood?",
        questionHindi: "कौन सा विटामिन रक्त के थक्के जमने में मदद करता है?",
        options: [
            "Vitamin A / विटामिन ए",
            "Vitamin C / विटामिन सी",
            "Vitamin K / विटामिन के",
            "Vitamin D / विटामिन डी"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 22,
        question: "The study of tissues is called:",
        questionHindi: "ऊतकों के अध्ययन को क्या कहा जाता है?",
        options: [
            "Cytology / साइटोलॉजी",
            "Histology / हिस्टोलॉजी",
            "Cardiology / कार्डियोलॉजी",
            "Dermatology / डर्मेटोलॉजी"
        ],
        correct: 1,
        subject: "Biology"
    },

    // --- BIHAR SPECIAL ---
    {
        id: 23,
        question: "Sher Shah Suri's tomb is located in:",
        questionHindi: "शेर शाह सूरी का मकबरा कहाँ स्थित है?",
        options: [
            "Patna / पटना",
            "Sasaram / सासाराम",
            "Gaya / गया",
            "Bihar Sharif / बिहार शरीफ"
        ],
        correct: 1,
        subject: "Bihar History"
    },
    {
        id: 24,
        question: "Which river flows through Patna?",
        questionHindi: "पटना से होकर कौन सी नदी बहती है?",
        options: [
            "Ganga / गंगा",
            "Yamuna / यमुना",
            "Brahmaputra / ब्रह्मपुत्र",
            "Narmada / नर्मदा"
        ],
        correct: 0,
        subject: "Bihar Geography"
    },
    {
        id: 25,
        question: "The famous 'Mahabodhi Temple' is located in:",
        questionHindi: "प्रसिद्ध 'महाबोधि मंदिर' कहाँ स्थित है?",
        options: [
            "Rajgir / राजगीर",
            "Bodh Gaya / बोधगया",
            "Nalanda / नालंदा",
            "Vaishali / वैशाली"
        ],
        correct: 1,
        subject: "Bihar Culture"
    },
    {
        id: 26,
        question: "Which festival is the most important festival of Bihar?",
        questionHindi: "बिहार का सबसे महत्वपूर्ण त्योहार कौन सा है?",
        options: [
            "Diwali / दिवाली",
            "Holi / होली",
            "Chhath Puja / छठ पूजा",
            "Durga Puja / दुर्गा पूजा"
        ],
        correct: 2,
        subject: "Bihar Culture"
    },
    {
        id: 27,
        question: "Who was the first Chief Minister of Bihar?",
        questionHindi: "बिहार के प्रथम मुख्यमंत्री कौन थे?",
        options: [
            "Sri Krishna Singh / श्री कृष्ण सिंह",
            "Anugrah Narayan Sinha / अनुग्रह नारायण सिन्हा",
            "Karpoori Thakur / कर्पूरी ठाकुर",
            "Lalu Prasad Yadav / लालू प्रसाद यादव"
        ],
        correct: 0,
        subject: "Bihar History"
    },

    // --- CURRENT AFFAIRS (2024-25) ---
    {
        id: 28,
        question: "Who is the current President of India (2024)?",
        questionHindi: "भारत की वर्तमान राष्ट्रपति (2024) कौन हैं?",
        options: [
            "Pratibha Patil / प्रतिभा पाटिल",
            "Draupadi Murmu / द्रौपदी मुर्मू",
            "Ram Nath Kovind / राम नाथ कोविंद",
            "Jagdeep Dhankhar / जगदीप धनखड़"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 29,
        question: "Which city hosted the G20 Summit in 2023?",
        questionHindi: "2023 में G20 शिखर सम्मेलन की मेजबानी किस शहर ने की?",
        options: [
            "Mumbai / मुंबई",
            "New Delhi / नई दिल्ली",
            "Bangalore / बैंगलोर",
            "Gandhinagar / गांधीनगर"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 30,
        question: "Who won the Cricket World Cup 2023?",
        questionHindi: "क्रिकेट विश्व कप 2023 किसने जीता?",
        options: [
            "India / भारत",
            "Australia / ऑस्ट्रेलिया",
            "England / इंग्लैंड",
            "New Zealand / न्यूजीलैंड"
        ],
        correct: 1,
        subject: "Sports"
    },
    {
        id: 31,
        question: "What is the new name of 'Rajpath' in New Delhi?",
        questionHindi: "नई दिल्ली में 'राजपथ' का नया नाम क्या है?",
        options: [
            "Kartavya Path / कर्तव्य पथ",
            "Atal Path / अटल पथ",
            "Gandhi Path / गांधी पथ",
            "Swaraj Path / स्वराज पथ"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 32,
        question: "Which country became the 31st member of NATO?",
        questionHindi: "कौन सा देश नाटो (NATO) का 31वां सदस्य बना?",
        options: [
            "Sweden / स्वीडन",
            "Ukraine / यूक्रेन",
            "Finland / फिनलैंड",
            "Norway / नॉर्वे"
        ],
        correct: 2,
        subject: "Current Affairs"
    },

    // --- MATH & REASONING ---
    {
        id: 33,
        question: "Find the next number in the series: 5, 10, 15, 20, ?",
        questionHindi: "श्रृंखला में अगली संख्या ज्ञात कीजिए: 5, 10, 15, 20, ?",
        options: [
            "25",
            "30",
            "35",
            "24"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 34,
        question: "If A = 1, B = 2, C = 3, what is BAD?",
        questionHindi: "यदि A = 1, B = 2, C = 3, तो BAD क्या है?",
        options: [
            "6",
            "7",
            "8",
            "9"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 35,
        question: "What is 20% of 500?",
        questionHindi: "500 का 20% क्या है?",
        options: [
            "50",
            "100",
            "150",
            "200"
        ],
        correct: 1,
        subject: "Math"
    },
    {
        id: 36,
        question: "A square has how many sides?",
        questionHindi: "एक वर्ग (Square) की कितनी भुजाएँ होती हैं?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 1,
        subject: "Math"
    },
    {
        id: 37,
        question: "Identify the odd one out:",
        questionHindi: "विषम को पहचानें:",
        options: [
            "Car / कार",
            "Bus / बस",
            "Truck / ट्रक",
            "Airplane / हवाई जहाज"
        ],
        correct: 3,
        subject: "Reasoning"
    },

    // --- MISCELLANEOUS GK ---
    {
        id: 38,
        question: "Who is known as the 'Father of the Nation' in India?",
        questionHindi: "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
        options: [
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "Mahatma Gandhi / महात्मा गांधी",
            "Sardar Patel / सरदार पटेल",
            "Subhash Chandra Bose / सुभाष चंद्र बोस"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 39,
        question: "Which is the national bird of India?",
        questionHindi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
        options: [
            "Peacock / मोर",
            "Parrot / तोता",
            "Pigeon / कबूतर",
            "Eagle / चील"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 40,
        question: "The capital of Australia is:",
        questionHindi: "ऑस्ट्रेलिया की राजधानी है:",
        options: [
            "Sydney / सिडनी",
            "Melbourne / मेलबर्न",
            "Canberra / कैनबरा",
            "Perth / पर्थ"
        ],
        correct: 2,
        subject: "GK"
    },
    {
        id: 41,
        question: "Which planet is known as the 'Red Planet'?",
        questionHindi: "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
        options: [
            "Venus / शुक्र",
            "Mars / मंगल",
            "Jupiter / बृहस्पति",
            "Saturn / शनि"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 42,
        question: "The 'Golden Temple' is situated in:",
        questionHindi: "'स्वर्ण मंदिर' कहाँ स्थित है?",
        options: [
            "Amritsar / अमृतसर",
            "Ludhiana / लुधियाना",
            "Chandigarh / चंडीगढ़",
            "Jalandhar / जालंधर"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 43,
        question: "Who invented the Telephone?",
        questionHindi: "टेलीफोन का आविष्कार किसने किया?",
        options: [
            "Alexander Graham Bell / अलेक्जेंडर ग्राहम बेल",
            "Thomas Edison / थॉमस एडिसन",
            "Marconi / मार्कोनी",
            "Newton / न्यूटन"
        ],
        correct: 0,
        subject: "Science"
    },
    {
        id: 44,
        question: "The currency of the United Kingdom (UK) is:",
        questionHindi: "यूनाइटेड किंगडम (UK) की मुद्रा है:",
        options: [
            "Dollar / डॉलर",
            "Euro / यूरो",
            "Pound Sterling / पाउंड स्टर्लिंग",
            "Yen / येन"
        ],
        correct: 2,
        subject: "GK"
    },
    {
        id: 45,
        question: "Which is the largest ocean in the world?",
        questionHindi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
        options: [
            "Atlantic Ocean / अटलांटिक महासागर",
            "Indian Ocean / हिंद महासागर",
            "Arctic Ocean / आर्कटिक महासागर",
            "Pacific Ocean / प्रशांत महासागर"
        ],
        correct: 3,
        subject: "Geography"
    },
    {
        id: 46,
        question: "Who wrote the 'Ramayana'?",
        questionHindi: "'रामायण' किसने लिखी?",
        options: [
            "Valmiki / वाल्मीकि",
            "Tulsidas / तुलसीदास",
            "Ved Vyas / वेद व्यास",
            "Kalidasa / कालिदास"
        ],
        correct: 0,
        subject: "Ancient History"
    },
    {
        id: 47,
        question: "Which gas is used in balloons to make them fly?",
        questionHindi: "गुब्बारों को उड़ाने के लिए उनमें कौन सी गैस भरी जाती है?",
        options: [
            "Oxygen / ऑक्सीजन",
            "Carbon Dioxide / कार्बन डाइऑक्साइड",
            "Helium / हीलियम",
            "Nitrogen / नाइट्रोजन"
        ],
        correct: 2,
        subject: "Science"
    },
    {
        id: 48,
        question: "The 'Gateway of India' is located in:",
        questionHindi: "'गेटवे ऑफ इंडिया' कहाँ स्थित है?",
        options: [
            "New Delhi / नई दिल्ली",
            "Mumbai / मुंबई",
            "Kolkata / कोलकाता",
            "Chennai / चेन्नई"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 49,
        question: "Which day is celebrated as 'Independence Day' in India?",
        questionHindi: "भारत में 'स्वतंत्रता दिवस' किस दिन मनाया जाता है?",
        options: [
            "26 January / 26 जनवरी",
            "15 August / 15 अगस्त",
            "2 October / 2 अक्टूबर",
            "14 November / 14 नवंबर"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 50,
        question: "Which is the smallest state in India by area?",
        questionHindi: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
        options: [
            "Goa / गोवा",
            "Sikkim / सिक्किम",
            "Tripura / त्रिपुरा",
            "Meghalaya / मेघालय"
        ],
        correct: 0,
        subject: "Geography"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}