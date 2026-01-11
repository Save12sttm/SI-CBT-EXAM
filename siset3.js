// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 3
// Focus: General Science & Indian History (Ancient/Medieval)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- GENERAL SCIENCE (Physics) ---
    {
        id: 1,
        question: "Light year is a unit of:",
        questionHindi: "प्रकाश वर्ष किसकी इकाई है?",
        options: [
            "Time / समय",
            "Distance / दूरी",
            "Speed of Light / प्रकाश की गति",
            "Intensity of Light / प्रकाश की तीव्रता"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 2,
        question: "Which mirror is used in the headlights of vehicles?",
        questionHindi: "वाहनों की हेडलाइट में किस दर्पण का उपयोग किया जाता है?",
        options: [
            "Convex Mirror / उत्तल दर्पण",
            "Concave Mirror / अवतल दर्पण",
            "Plane Mirror / समतल दर्पण",
            "Parabolic Mirror / परवलयिक दर्पण"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 3,
        question: "The device used to measure the depth of the ocean is:",
        questionHindi: "महासागर की गहराई मापने के लिए किस यंत्र का उपयोग किया जाता है?",
        options: [
            "Fathometer / फैदोमीटर",
            "Galvanometer / गैल्वेनोमीटर",
            "Barometer / बैरोमीटर",
            "Altimeter / अल्टीमीटर"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 4,
        question: "Sound travels fastest in:",
        questionHindi: "ध्वनि सबसे तेज किसमें यात्रा करती है?",
        options: [
            "Vacuum / निर्वात",
            "Air / वायु",
            "Water / जल",
            "Steel / इस्पात"
        ],
        correct: 3,
        subject: "Physics"
    },
    {
        id: 5,
        question: "Which of the following is a scalar quantity?",
        questionHindi: "निम्नलिखित में से कौन एक अदिश राशि है?",
        options: [
            "Velocity / वेग",
            "Force / बल",
            "Momentum / संवेग",
            "Energy / ऊर्जा"
        ],
        correct: 3,
        subject: "Physics"
    },
    {
        id: 6,
        question: "The working principle of a washing machine is:",
        questionHindi: "वाशिंग मशीन का कार्य सिद्धांत है:",
        options: [
            "Centrifugation / अपकेंद्रण",
            "Dialysis / अपोहन",
            "Reverse Osmosis / रिवर्स ऑस्मोसिस",
            "Diffusion / विसरण"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 7,
        question: "Optical fibre works on the principle of:",
        questionHindi: "ऑप्टिकल फाइबर किस सिद्धांत पर कार्य करता है?",
        options: [
            "Refraction / अपवर्तन",
            "Interference / व्यतिकरण",
            "Total Internal Reflection / पूर्ण आंतरिक परावर्तन",
            "Diffraction / विवर्तन"
        ],
        correct: 2,
        subject: "Physics"
    },

    // --- GENERAL SCIENCE (Chemistry) ---
    {
        id: 8,
        question: "Which metal is used in galvanization of iron?",
        questionHindi: "लोहे के गैल्वनीकरण में किस धातु का उपयोग किया जाता है?",
        options: [
            "Copper / तांबा",
            "Zinc / जस्ता (जिंक)",
            "Tin / टिन",
            "Lead / सीसा"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 9,
        question: "The main component of Biogas is:",
        questionHindi: "बायोगैस का मुख्य घटक है:",
        options: [
            "Methane / मीथेन",
            "Propane / प्रोपेन",
            "Butane / ब्यूटेन",
            "Ethane / इथेन"
        ],
        correct: 0,
        subject: "Chemistry"
    },
    {
        id: 10,
        question: "Which acid is present in vinegar?",
        questionHindi: "सिरका में कौन सा अम्ल होता है?",
        options: [
            "Citric Acid / साइट्रिक अम्ल",
            "Acetic Acid / एसिटिक अम्ल",
            "Lactic Acid / लैक्टिक अम्ल",
            "Tartaric Acid / टार्टरिक अम्ल"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 11,
        question: "Brass is an alloy of:",
        questionHindi: "पीतल किसका मिश्र धातु है?",
        options: [
            "Copper and Tin / तांबा और टिन",
            "Copper and Zinc / तांबा और जस्ता",
            "Copper and Aluminum / तांबा और एल्यूमीनियम",
            "Iron and Nickel / लोहा और निकल"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 12,
        question: "Which of the following is known as 'Laughing Gas'?",
        questionHindi: "निम्नलिखित में से किसे 'लाफिंग गैस' के रूप में जाना जाता है?",
        options: [
            "Nitric Oxide / नाइट्रिक ऑक्साइड",
            "Nitrous Oxide / नाइट्रस ऑक्साइड",
            "Nitrogen Dioxide / नाइट्रोजन डाइऑक्साइड",
            "Nitrogen Pentoxide / नाइट्रोजन पेंटोक्साइड"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 13,
        question: "The hardest substance available on earth is:",
        questionHindi: "पृथ्वी पर उपलब्ध सबसे कठोर पदार्थ है:",
        options: [
            "Gold / सोना",
            "Iron / लोहा",
            "Diamond / हीरा",
            "Platinum / प्लेटिनम"
        ],
        correct: 2,
        subject: "Chemistry"
    },

    // --- GENERAL SCIENCE (Biology) ---
    {
        id: 14,
        question: "Which is the longest bone in the human body?",
        questionHindi: "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
        options: [
            "Stapes / स्टेप्स",
            "Femur / फीमर (जांघ की हड्डी)",
            "Tibia / टिबिया",
            "Fibula / फिबुला"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 15,
        question: "Vitamins were discovered by:",
        questionHindi: "विटामिन की खोज किसने की थी?",
        options: [
            "Edward Jenner / एडवर्ड जेनर",
            "Funk / फंक",
            "Louis Pasteur / लुई पाश्चर",
            "Alexander Fleming / अलेक्जेंडर फ्लेमिंग"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 16,
        question: "Which blood cells are called 'Soldiers of the Body'?",
        questionHindi: "किन रक्त कोशिकाओं को 'शरीर का सिपाही' कहा जाता है?",
        options: [
            "RBC / लाल रक्त कणिकाएं",
            "WBC / श्वेत रक्त कणिकाएं",
            "Platelets / प्लेटलेट्स",
            "Plasma / प्लाज्मा"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 17,
        question: "Insulin is secreted by:",
        questionHindi: "इंसुलिन किसके द्वारा स्रावित होता है?",
        options: [
            "Liver / यकृत",
            "Pancreas / अग्न्याशय",
            "Kidney / गुर्दा",
            "Pituitary Gland / पीयूष ग्रंथि"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 18,
        question: "Study of fruits is called:",
        questionHindi: "फलों के अध्ययन को क्या कहा जाता है?",
        options: [
            "Pomology / पोमोलॉजी",
            "Anthology / एंथोलॉजी",
            "Pedology / पेडोलॉजी",
            "Spermology / स्पर्मोलॉजी"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 19,
        question: "Which disease is caused by the bite of a mad dog?",
        questionHindi: "पागल कुत्ते के काटने से कौन सा रोग होता है?",
        options: [
            "Hydrophobia (Rabies) / हाइड्रोफोबिया (रेबीज)",
            "Cholera / हैजा",
            "Malaria / मलेरिया",
            "Tetanus / टेटनस"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 20,
        question: "Photosynthesis takes place in:",
        questionHindi: "प्रकाश संश्लेषण किसमें होता है?",
        options: [
            "Nucleus / केंद्रक",
            "Mitochondria / माइटोकॉन्ड्रिया",
            "Chloroplast / क्लोरोप्लास्ट",
            "Ribosome / राइबोसोम"
        ],
        correct: 2,
        subject: "Biology"
    },

    // --- INDIAN HISTORY (Ancient & Medieval) ---
    {
        id: 21,
        question: "Indus Valley Civilization was discovered in:",
        questionHindi: "सिंधु घाटी सभ्यता की खोज कब हुई थी?",
        options: [
            "1911",
            "1921",
            "1931",
            "1941"
        ],
        correct: 1,
        subject: "Ancient History"
    },
    {
        id: 22,
        question: "Who was the court poet of Harsha?",
        questionHindi: "हर्ष का दरबारी कवि कौन था?",
        options: [
            "Banabhatta / बाणभट्ट",
            "Kalidasa / कालिदास",
            "Chand Bardai / चंद बरदाई",
            "Bhavabhuti / भवभूति"
        ],
        correct: 0,
        subject: "Ancient History"
    },
    {
        id: 23,
        question: "Which ruler built the Grand Trunk Road?",
        questionHindi: "ग्रैंड ट्रंक रोड का निर्माण किस शासक ने करवाया था?",
        options: [
            "Akbar / अकबर",
            "Ashoka / अशोक",
            "Sher Shah Suri / शेर शाह सूरी",
            "Humayun / हुमायूं"
        ],
        correct: 2,
        subject: "Medieval History"
    },
    {
        id: 24,
        question: "Who was the first woman ruler of India?",
        questionHindi: "भारत की पहली महिला शासिका कौन थी?",
        options: [
            "Chand Bibi / चांद बीबी",
            "Razia Sultan / रजिया सुल्तान",
            "Nur Jahan / नूरजहाँ",
            "Rani Durgavati / रानी दुर्गावती"
        ],
        correct: 1,
        subject: "Medieval History"
    },
    {
        id: 25,
        question: "The First Battle of Tarain took place in:",
        questionHindi: "तराइन का प्रथम युद्ध कब हुआ था?",
        options: [
            "1191 AD / 1191 ई.",
            "1192 AD / 1192 ई.",
            "1193 AD / 1193 ई.",
            "1194 AD / 1194 ई."
        ],
        correct: 0,
        subject: "Medieval History"
    },
    {
        id: 26,
        question: "Who introduced the 'Market Control Policy'?",
        questionHindi: "'बाजार नियंत्रण नीति' किसने लागू की?",
        options: [
            "Balban / बलबन",
            "Alauddin Khilji / अलाउद्दीन खिलजी",
            "Muhammad Bin Tughlaq / मुहम्मद बिन तुगलक",
            "Firoz Shah Tughlaq / फिरोज शाह तुगलक"
        ],
        correct: 1,
        subject: "Medieval History"
    },
    {
        id: 27,
        question: "The famous 'Buland Darwaza' was built by:",
        questionHindi: "प्रसिद्ध 'बुलंद दरवाजा' किसके द्वारा बनवाया गया था?",
        options: [
            "Shah Jahan / शाहजहाँ",
            "Akbar / अकबर",
            "Jahangir / जहांगीर",
            "Aurangzeb / औरंगजेब"
        ],
        correct: 1,
        subject: "Medieval History"
    },
    {
        id: 28,
        question: "Who was the guru of Shivaji?",
        questionHindi: "शिवाजी के गुरु कौन थे?",
        options: [
            "Ramdas / रामदास",
            "Tukaram / तुकाराम",
            "Eknath / एकनाथ",
            "Namdev / नामदेव"
        ],
        correct: 0,
        subject: "Medieval History"
    },
    {
        id: 29,
        question: "Which Veda contains the details of charms and spells?",
        questionHindi: "किस वेद में जादू और मंत्रों का विवरण है?",
        options: [
            "Rigveda / ऋग्वेद",
            "Samaveda / सामवेद",
            "Yajurveda / यजुर्वेद",
            "Atharvaveda / अथर्ववेद"
        ],
        correct: 3,
        subject: "Ancient History"
    },
    {
        id: 30,
        question: "Tripitakas are sacred books of:",
        questionHindi: "त्रिपिटक किसके पवित्र ग्रंथ हैं?",
        options: [
            "Jains / जैन",
            "Buddhists / बौद्ध",
            "Hindus / हिंदू",
            "Sikhs / सिख"
        ],
        correct: 1,
        subject: "Ancient History"
    },

    // --- BIHAR SPECIAL (History & Geography) ---
    {
        id: 31,
        question: "Sher Shah Suri's tomb is located at:",
        questionHindi: "शेर शाह सूरी का मकबरा कहाँ स्थित है?",
        options: [
            "Sasaram / सासाराम",
            "Patna / पटना",
            "Delhi / दिल्ली",
            "Agra / आगरा"
        ],
        correct: 0,
        subject: "Bihar History"
    },
    {
        id: 32,
        question: "Which city is known as the 'Silk City' of Bihar?",
        questionHindi: "बिहार के किस शहर को 'सिल्क सिटी' के नाम से जाना जाता है?",
        options: [
            "Gaya / गया",
            "Bhagalpur / भागलपुर",
            "Muzaffarpur / मुजफ्फरपुर",
            "Darbhanga / दरभंगा"
        ],
        correct: 1,
        subject: "Bihar GK"
    },
    {
        id: 33,
        question: "Who was the first Chief Minister of Bihar?",
        questionHindi: "बिहार के प्रथम मुख्यमंत्री कौन थे?",
        options: [
            "Sri Krishna Singh / श्री कृष्ण सिंह",
            "Anugrah Narayan Sinha / अनुग्रह नारायण सिन्हा",
            "Jayaprakash Narayan / जयप्रकाश नारायण",
            "Karpoori Thakur / कर्पूरी ठाकुर"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 34,
        question: "Vikramshila University was founded by:",
        questionHindi: "विक्रमशिला विश्वविद्यालय की स्थापना किसने की थी?",
        options: [
            "Dharmapala / धर्मपाल",
            "Devapala / देवपाल",
            "Gopala / गोपाल",
            "Mahipala / महीपाल"
        ],
        correct: 0,
        subject: "Bihar History"
    },
    {
        id: 35,
        question: "The famous Sonepur Cattle Fair is held in which month?",
        questionHindi: "प्रसिद्ध सोनपुर पशु मेला किस महीने में आयोजित किया जाता है?",
        options: [
            "Kartik / कार्तिक (November)",
            "Chaitra / चैत्र (March)",
            "Magh / माघ (January)",
            "Phalguna / फाल्गुन (February)"
        ],
        correct: 0,
        subject: "Bihar GK"
    },

    // --- MISCELLANEOUS & REASONING ---
    {
        id: 36,
        question: "Headquarters of World Health Organization (WHO) is in:",
        questionHindi: "विश्व स्वास्थ्य संगठन (WHO) का मुख्यालय कहाँ है?",
        options: [
            "New York / न्यूयॉर्क",
            "Geneva / जिनेवा",
            "Paris / पेरिस",
            "London / लंदन"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 37,
        question: "Who is called the 'Napoleon of India'?",
        questionHindi: "'भारत का नेपोलियन' किसे कहा जाता है?",
        options: [
            "Samudragupta / समुद्रगुप्त",
            "Chandragupta Maurya / चंद्रगुप्त मौर्य",
            "Ashoka / अशोक",
            "Harsha / हर्ष"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 38,
        question: "Which day is celebrated as 'International Women's Day'?",
        questionHindi: "'अंतर्राष्ट्रीय महिला दिवस' किस दिन मनाया जाता है?",
        options: [
            "8 March / 8 मार्च",
            "8 April / 8 अप्रैल",
            "10 March / 10 मार्च",
            "15 August / 15 अगस्त"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 39,
        question: "If 'FISH' is written as 'EHRG', how is 'JUNGLE' written?",
        questionHindi: "यदि 'FISH' को 'EHRG' लिखा जाता है, तो 'JUNGLE' को कैसे लिखा जाएगा?",
        options: [
            "ITMFKD",
            "KVOHMF",
            "ITNFKD",
            "TIMFKD"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 40,
        question: "Select the odd one out:",
        questionHindi: "विषम चुनें:",
        options: [
            "Square / वर्ग",
            "Triangle / त्रिभुज",
            "Rectangle / आयत",
            "Circle / वृत्त"
        ],
        correct: 3,
        subject: "Reasoning"
    },
    {
        id: 41,
        question: "A person covers a distance of 600m in 5 minutes. What is his speed in km/hr?",
        questionHindi: "एक व्यक्ति 600 मीटर की दूरी 5 मिनट में तय करता है। उसकी गति किमी/घंटा में क्या है?",
        options: [
            "7.2 km/hr",
            "8.4 km/hr",
            "9.6 km/hr",
            "10 km/hr"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 42,
        question: "The sum of ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
        questionHindi: "3 वर्ष के अंतराल पर जन्म लेने वाले 5 बच्चों की आयु का योग 50 वर्ष है। सबसे छोटे बच्चे की आयु क्या है?",
        options: [
            "4 years / 4 वर्ष",
            "8 years / 8 वर्ष",
            "10 years / 10 वर्ष",
            "None of these / इनमें से कोई नहीं"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 43,
        question: "Which number will complete the series: 3, 7, 15, 31, 63, ?",
        questionHindi: "कौन सी संख्या श्रृंखला को पूरा करेगी: 3, 7, 15, 31, 63, ?",
        options: [
            "92",
            "115",
            "127",
            "131"
        ],
        correct: 2,
        subject: "Math"
    },
    {
        id: 44,
        question: "The ratio of width of our National Flag to its length is:",
        questionHindi: "हमारे राष्ट्रीय ध्वज की चौड़ाई का उसकी लंबाई से अनुपात है:",
        options: [
            "3:5",
            "2:3",
            "2:4",
            "3:4"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 45,
        question: "Who wrote 'Vande Mataram'?",
        questionHindi: "'वंदे मातरम' किसने लिखा?",
        options: [
            "Rabindranath Tagore / रवींद्रनाथ टैगोर",
            "Bankim Chandra Chatterjee / बंकिम चंद्र चटर्जी",
            "Sarojini Naidu / सरोजिनी नायडू",
            "Sri Aurobindo / श्री अरबिंदो"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 46,
        question: "The term 'Bull and Bear' is associated with:",
        questionHindi: "'बुल एंड बियर' (Bull and Bear) शब्द किससे संबंधित है?",
        options: [
            "Banking / बैंकिंग",
            "Stock Market / शेयर बाजार",
            "Agriculture / कृषि",
            "Zoo / चिड़ियाघर"
        ],
        correct: 1,
        subject: "Economy"
    },
    {
        id: 47,
        question: "GST was introduced in India by which Constitutional Amendment?",
        questionHindi: "भारत में GST किस संवैधानिक संशोधन द्वारा लागू किया गया था?",
        options: [
            "100th",
            "101st",
            "102nd",
            "103rd"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 48,
        question: "Which of the following is NOT a fundamental right?",
        questionHindi: "निम्नलिखित में से कौन एक मौलिक अधिकार नहीं है?",
        options: [
            "Right to Equality / समानता का अधिकार",
            "Right to Freedom / स्वतंत्रता का अधिकार",
            "Right to Property / संपत्ति का अधिकार",
            "Right against Exploitation / शोषण के खिलाफ अधिकार"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 49,
        question: "The largest organ of the human body is:",
        questionHindi: "मानव शरीर का सबसे बड़ा अंग है:",
        options: [
            "Heart / हृदय",
            "Skin / त्वचा",
            "Liver / यकृत",
            "Brain / मस्तिष्क"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 50,
        question: "Pongal is a famous festival of which state?",
        questionHindi: "पोंगल किस राज्य का प्रसिद्ध त्योहार है?",
        options: [
            "Kerala / केरल",
            "Tamil Nadu / तमिलनाडु",
            "Karnataka / कर्नाटक",
            "Andhra Pradesh / आंध्र प्रदेश"
        ],
        correct: 1,
        subject: "Culture"
    }
];

// Export
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}