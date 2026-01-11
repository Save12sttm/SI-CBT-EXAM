// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 4
// Focus: Indian Polity (Constitution) & Indian Economy
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- INDIAN POLITY (Constitution) ---
    {
        id: 1,
        question: "The idea of 'Concurrent List' in the Indian Constitution is borrowed from:",
        questionHindi: "भारतीय संविधान में 'समवर्ती सूची' का विचार कहाँ से लिया गया है?",
        options: [
            "USA / अमेरिका",
            "Canada / कनाडा",
            "Australia / ऑस्ट्रेलिया",
            "Ireland / आयरलैंड"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 2,
        question: "Which Article of the Constitution deals with the 'Pardon Power of the President'?",
        questionHindi: "संविधान का कौन सा अनुच्छेद 'राष्ट्रपति की क्षमादान शक्ति' से संबंधित है?",
        options: [
            "Article 72 / अनुच्छेद 72",
            "Article 61 / अनुच्छेद 61",
            "Article 52 / अनुच्छेद 52",
            "Article 123 / अनुच्छेद 123"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 3,
        question: "Who presides over the joint sitting of the Parliament?",
        questionHindi: "संसद की संयुक्त बैठक की अध्यक्षता कौन करता है?",
        options: [
            "President / राष्ट्रपति",
            "Vice President / उपराष्ट्रपति",
            "Speaker of Lok Sabha / लोकसभा अध्यक्ष",
            "Prime Minister / प्रधान मंत्री"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 4,
        question: "The 'Right to Property' was removed from Fundamental Rights by which Amendment?",
        questionHindi: "'संपत्ति के अधिकार' को किस संशोधन द्वारा मौलिक अधिकारों से हटाया गया?",
        options: [
            "42nd Amendment / 42वां संशोधन",
            "44th Amendment / 44वां संशोधन",
            "86th Amendment / 86वां संशोधन",
            "52nd Amendment / 52वां संशोधन"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 5,
        question: "Which Schedule of the Constitution deals with the 'Anti-Defection Law'?",
        questionHindi: "संविधान की कौन सी अनुसूची 'दल-बदल विरोधी कानून' से संबंधित है?",
        options: [
            "8th Schedule / 8वीं अनुसूची",
            "9th Schedule / 9वीं अनुसूची",
            "10th Schedule / 10वीं अनुसूची",
            "11th Schedule / 11वीं अनुसूची"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 6,
        question: "The minimum age to become a member of the Rajya Sabha is:",
        questionHindi: "राज्यसभा का सदस्य बनने के लिए न्यूनतम आयु है:",
        options: [
            "25 years / 25 वर्ष",
            "30 years / 30 वर्ष",
            "35 years / 35 वर्ष",
            "21 years / 21 वर्ष"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 7,
        question: "Who is the 'Guardian of the Constitution'?",
        questionHindi: "'संविधान का संरक्षक' कौन है?",
        options: [
            "Parliament / संसद",
            "President / राष्ट्रपति",
            "Supreme Court / सर्वोच्च न्यायालय",
            "Prime Minister / प्रधान मंत्री"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 8,
        question: "Article 360 of the Indian Constitution deals with:",
        questionHindi: "भारतीय संविधान का अनुच्छेद 360 किससे संबंधित है?",
        options: [
            "National Emergency / राष्ट्रीय आपातकाल",
            "State Emergency / राज्य आपातकाल",
            "Financial Emergency / वित्तीय आपातकाल",
            "Amendment Procedure / संशोधन प्रक्रिया"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 9,
        question: "Who appoints the Comptroller and Auditor General (CAG) of India?",
        questionHindi: "भारत के नियंत्रक और महालेखा परीक्षक (CAG) की नियुक्ति कौन करता है?",
        options: [
            "Prime Minister / प्रधान मंत्री",
            "Finance Minister / वित्त मंत्री",
            "President / राष्ट्रपति",
            "Chief Justice / मुख्य न्यायाधीश"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 10,
        question: "The concept of 'Judicial Review' in India is adopted from:",
        questionHindi: "भारत में 'न्यायिक समीक्षा' की अवधारणा कहाँ से अपनाई गई है?",
        options: [
            "UK Constitution / ब्रिटेन का संविधान",
            "USA Constitution / अमेरिका का संविधान",
            "Swiss Constitution / स्विस संविधान",
            "Australian Constitution / ऑस्ट्रेलियाई संविधान"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 11,
        question: "Which part of the Constitution is called the 'Magna Carta of India'?",
        questionHindi: "संविधान के किस भाग को 'भारत का मैग्ना कार्टा' कहा जाता है?",
        options: [
            "Part II / भाग II",
            "Part III / भाग III",
            "Part IV / भाग IV",
            "Part V / भाग V"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 12,
        question: "The 73rd Constitutional Amendment Act is related to:",
        questionHindi: "73वां संविधान संशोधन अधिनियम किससे संबंधित है?",
        options: [
            "Panchayati Raj / पंचायती राज",
            "Municipalities / नगरपालिकाएं",
            "Language / भाषा",
            "Anti-Defection / दल-बदल विरोधी"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 13,
        question: "Who was the Chairman of the Drafting Committee of the Constitution?",
        questionHindi: "संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
        options: [
            "Dr. Rajendra Prasad / डॉ. राजेंद्र प्रसाद",
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "Dr. B.R. Ambedkar / डॉ. बी.आर. अंबेडकर",
            "Sardar Patel / सरदार पटेल"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 14,
        question: "Under which Article can the President declare 'National Emergency'?",
        questionHindi: "किस अनुच्छेद के तहत राष्ट्रपति 'राष्ट्रीय आपातकाल' घोषित कर सकते हैं?",
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
        id: 15,
        question: "The term of office of the Chief Election Commissioner is:",
        questionHindi: "मुख्य चुनाव आयुक्त का कार्यकाल कितना होता है?",
        options: [
            "5 years or 65 years of age / 5 वर्ष या 65 वर्ष की आयु",
            "6 years or 65 years of age / 6 वर्ष या 65 वर्ष की आयु",
            "5 years or 62 years of age / 5 वर्ष या 62 वर्ष की आयु",
            "6 years or 62 years of age / 6 वर्ष या 62 वर्ष की आयु"
        ],
        correct: 1,
        subject: "Polity"
    },

    // --- INDIAN ECONOMY ---
    {
        id: 16,
        question: "Who is the Chairman of NITI Aayog?",
        questionHindi: "नीति आयोग के अध्यक्ष कौन हैं?",
        options: [
            "President / राष्ट्रपति",
            "Prime Minister / प्रधान मंत्री",
            "Finance Minister / वित्त मंत्री",
            "RBI Governor / आरबीआई गवर्नर"
        ],
        correct: 1,
        subject: "Economy"
    },
    {
        id: 17,
        question: "In which year was the Reserve Bank of India (RBI) nationalized?",
        questionHindi: "भारतीय रिजर्व बैंक (RBI) का राष्ट्रीयकरण किस वर्ष किया गया था?",
        options: [
            "1935",
            "1947",
            "1949",
            "1955"
        ],
        correct: 2,
        subject: "Economy"
    },
    {
        id: 18,
        question: "Which sector contributes the most to India's GDP?",
        questionHindi: "भारत के सकल घरेलू उत्पाद (GDP) में कौन सा क्षेत्र सबसे अधिक योगदान देता है?",
        options: [
            "Agriculture / कृषि",
            "Industry / उद्योग",
            "Service Sector / सेवा क्षेत्र",
            "Manufacturing / विनिर्माण"
        ],
        correct: 2,
        subject: "Economy"
    },
    {
        id: 19,
        question: "The concept of 'Five Year Plans' in India was borrowed from:",
        questionHindi: "भारत में 'पंचवर्षीय योजनाओं' की अवधारणा कहाँ से ली गई थी?",
        options: [
            "USA / अमेरिका",
            "UK / ब्रिटेन",
            "Russia (USSR) / रूस (सोवियत संघ)",
            "France / फ्रांस"
        ],
        correct: 2,
        subject: "Economy"
    },
    {
        id: 20,
        question: "What does 'Repo Rate' mean?",
        questionHindi: "'रेपो रेट' का क्या अर्थ है?",
        options: [
            "Rate at which RBI lends to banks / वह दर जिस पर आरबीआई बैंकों को उधार देता है",
            "Rate at which banks lend to RBI / वह दर जिस पर बैंक आरबीआई को उधार देते हैं",
            "Rate at which banks lend to public / वह दर जिस पर बैंक जनता को उधार देते हैं",
            "None of these / इनमें से कोई नहीं"
        ],
        correct: 0,
        subject: "Economy"
    },
    {
        id: 21,
        question: "Who signs the one rupee note in India?",
        questionHindi: "भारत में एक रुपये के नोट पर किसके हस्ताक्षर होते हैं?",
        options: [
            "RBI Governor / आरबीआई गवर्नर",
            "Finance Minister / वित्त मंत्री",
            "Finance Secretary / वित्त सचिव",
            "Prime Minister / प्रधान मंत्री"
        ],
        correct: 2,
        subject: "Economy"
    },
    {
        id: 22,
        question: "The headquarters of SEBI (Securities and Exchange Board of India) is in:",
        questionHindi: "सेबी (SEBI) का मुख्यालय कहाँ है?",
        options: [
            "New Delhi / नई दिल्ली",
            "Mumbai / मुंबई",
            "Kolkata / कोलकाता",
            "Chennai / चेन्नई"
        ],
        correct: 1,
        subject: "Economy"
    },
    {
        id: 23,
        question: "Green Revolution is related to the production of:",
        questionHindi: "हरित क्रांति किसके उत्पादन से संबंधित है?",
        options: [
            "Milk / दूध",
            "Food Grains / खाद्यान्न",
            "Fish / मछली",
            "Oilseeds / तिलहन"
        ],
        correct: 1,
        subject: "Economy"
    },
    {
        id: 24,
        question: "GST (Goods and Services Tax) is a type of:",
        questionHindi: "जीएसटी (वस्तु एवं सेवा कर) किस प्रकार का कर है?",
        options: [
            "Direct Tax / प्रत्यक्ष कर",
            "Indirect Tax / अप्रत्यक्ष कर",
            "Income Tax / आयकर",
            "Wealth Tax / धन कर"
        ],
        correct: 1,
        subject: "Economy"
    },
    {
        id: 25,
        question: "Which Indian state has the highest per capita income?",
        questionHindi: "किस भारतीय राज्य की प्रति व्यक्ति आय सबसे अधिक है?",
        options: [
            "Maharashtra / महाराष्ट्र",
            "Goa / गोवा",
            "Punjab / पंजाब",
            "Kerala / केरल"
        ],
        correct: 1,
        subject: "Economy"
    },

    // --- BIHAR SPECIAL (Economy & Polity) ---
    {
        id: 26,
        question: "According to Census 2011, which is the most populous district of Bihar?",
        questionHindi: "जनगणना 2011 के अनुसार, बिहार का सबसे अधिक जनसंख्या वाला जिला कौन सा है?",
        options: [
            "Patna / पटना",
            "Gaya / गया",
            "Muzaffarpur / मुजफ्फरपुर",
            "Madhubani / मधुबनी"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 27,
        question: "How many seats are there in the Bihar Legislative Assembly (Vidhan Sabha)?",
        questionHindi: "बिहार विधानसभा में कितनी सीटें हैं?",
        options: [
            "240",
            "243",
            "245",
            "250"
        ],
        correct: 1,
        subject: "Bihar Polity"
    },
    {
        id: 28,
        question: "Who was the first Governor of Bihar after Independence?",
        questionHindi: "स्वतंत्रता के बाद बिहार के प्रथम राज्यपाल कौन थे?",
        options: [
            "Jairamdas Daulatram / जयरामदास दौलतराम",
            "Zakir Hussain / जाकिर हुसैन",
            "Madhav Shrihari Aney / माधव श्रीहरि अणे",
            "R.R. Diwakar / आर.आर. दिवाकर"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 29,
        question: "Which crop is most cultivated in Bihar?",
        questionHindi: "बिहार में किस फसल की खेती सबसे अधिक होती है?",
        options: [
            "Wheat / गेहूं",
            "Rice (Paddy) / चावल (धान)",
            "Maize / मक्का",
            "Sugarcane / गन्ना"
        ],
        correct: 1,
        subject: "Bihar Economy"
    },
    {
        id: 30,
        question: "The 'Jeevika' scheme in Bihar is supported by:",
        questionHindi: "बिहार में 'जीविका' योजना किसके द्वारा समर्थित है?",
        options: [
            "World Bank / विश्व बैंक",
            "IMF / आईएमएफ",
            "ADB / एडीबी",
            "Central Govt / केंद्र सरकार"
        ],
        correct: 0,
        subject: "Bihar Economy"
    },

    // --- GENERAL KNOWLEDGE & MISC ---
    {
        id: 31,
        question: "The first Indian woman to go to space was:",
        questionHindi: "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थी?",
        options: [
            "Sunita Williams / सुनीता विलियम्स",
            "Kalpana Chawla / कल्पना चावला",
            "Valentina Tereshkova / वेलेंटीना टेरेश्कोवा",
            "Sally Ride / सैली राइड"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 32,
        question: "National Youth Day is celebrated in memory of:",
        questionHindi: "राष्ट्रीय युवा दिवस किसकी स्मृति में मनाया जाता है?",
        options: [
            "Bhagat Singh / भगत सिंह",
            "Swami Vivekananda / स्वामी विवेकानंद",
            "Subhash Chandra Bose / सुभाष चंद्र बोस",
            "Mahatma Gandhi / महात्मा गांधी"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 33,
        question: "Which is the largest organ in the human body?",
        questionHindi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
        options: [
            "Liver / यकृत",
            "Skin / त्वचा",
            "Heart / हृदय",
            "Lungs / फेफड़े"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 34,
        question: "Who discovered Penicillin?",
        questionHindi: "पेनिसिलिन की खोज किसने की?",
        options: [
            "Alexander Fleming / अलेक्जेंडर फ्लेमिंग",
            "Louis Pasteur / लुई पाश्चर",
            "Edward Jenner / एडवर्ड जेनर",
            "Robert Koch / रॉबर्ट कोच"
        ],
        correct: 0,
        subject: "Science"
    },
    {
        id: 35,
        question: "The chemical formula of Common Salt is:",
        questionHindi: "साधारण नमक का रासायनिक सूत्र है:",
        options: [
            "Na2CO3",
            "NaHCO3",
            "NaCl",
            "KCl"
        ],
        correct: 2,
        subject: "Chemistry"
    },

    // --- REASONING & MENTAL ABILITY ---
    {
        id: 36,
        question: "Find the missing number in the series: 4, 9, 16, 25, 36, ?",
        questionHindi: "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 4, 9, 16, 25, 36, ?",
        options: [
            "47",
            "49",
            "52",
            "64"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 37,
        question: "If A = 1, CAT = 24, then DOG = ?",
        questionHindi: "यदि A = 1, CAT = 24, तो DOG = ?",
        options: [
            "25",
            "26",
            "24",
            "28"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 38,
        question: "Which word cannot be formed using the letters of 'CONSTITUTION'?",
        questionHindi: "'CONSTITUTION' शब्द के अक्षरों का उपयोग करके कौन सा शब्द नहीं बनाया जा सकता है?",
        options: [
            "STATION",
            "TUITION",
            "TALENT",
            "INSTITUTION"
        ],
        correct: 2,
        subject: "Reasoning"
    },
    {
        id: 39,
        question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. Then, how is A related to D?",
        questionHindi: "A, B की बहन है। C, B की माँ है। D, C का पिता है। E, D की माँ है। तो, A, D से कैसे संबंधित है?",
        options: [
            "Granddaughter / पोती/नातिन",
            "Daughter / बेटी",
            "Grandmother / दादी/नानी",
            "Aunt / बुआ/मौसी"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 40,
        question: "Identify the odd one out:",
        questionHindi: "विषम को पहचानें:",
        options: [
            "Ear / कान",
            "Eye / आँख",
            "Nose / नाक",
            "Liver / यकृत"
        ],
        correct: 3,
        subject: "Reasoning"
    },
    {
        id: 41,
        question: "The sum of two numbers is 25 and their difference is 13. Find the numbers.",
        questionHindi: "दो संख्याओं का योग 25 है और उनका अंतर 13 है। संख्याएँ ज्ञात कीजिए।",
        options: [
            "19, 6",
            "18, 7",
            "20, 5",
            "15, 10"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 42,
        question: "If the cost price of 12 articles is equal to the selling price of 10 articles, the profit percent is:",
        questionHindi: "यदि 12 वस्तुओं का क्रय मूल्य 10 वस्तुओं के विक्रय मूल्य के बराबर है, तो लाभ प्रतिशत है:",
        options: [
            "16.66%",
            "20%",
            "25%",
            "10%"
        ],
        correct: 1,
        subject: "Math"
    },
    {
        id: 43,
        question: "A train 150m long is running at 54 km/hr. Time taken to cross a pole is:",
        questionHindi: "150 मीटर लंबी एक ट्रेन 54 किमी/घंटा की गति से चल रही है। एक खंभे को पार करने में लिया गया समय है:",
        options: [
            "8 sec",
            "10 sec",
            "12 sec",
            "15 sec"
        ],
        correct: 1,
        subject: "Math"
    },
    {
        id: 44,
        question: "The average of first 50 natural numbers is:",
        questionHindi: "प्रथम 50 प्राकृतिक संख्याओं का औसत है:",
        options: [
            "25",
            "25.5",
            "26",
            "50.5"
        ],
        correct: 1,
        subject: "Math"
    },
    {
        id: 45,
        question: "Find the simple interest on ₹5000 at 10% per annum for 3 years.",
        questionHindi: "₹5000 पर 10% प्रति वर्ष की दर से 3 वर्षों के लिए साधारण ब्याज ज्ञात कीजिए।",
        options: [
            "₹1000",
            "₹1500",
            "₹2000",
            "₹2500"
        ],
        correct: 1,
        subject: "Math"
    },

    // --- CURRENT AFFAIRS (Mixed) ---
    {
        id: 46,
        question: "Which country became the 31st member of NATO?",
        questionHindi: "कौन सा देश नाटो (NATO) का 31वां सदस्य बना?",
        options: [
            "Finland / फिनलैंड",
            "Sweden / स्वीडन",
            "Ukraine / यूक्रेन",
            "Norway / नॉर्वे"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 47,
        question: "Who won the ICC Men's Cricket World Cup 2023?",
        questionHindi: "ICC पुरुष क्रिकेट विश्व कप 2023 किसने जीता?",
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
        id: 48,
        question: "The 'Statue of Unity' is located in which state?",
        questionHindi: "'स्टैच्यू ऑफ यूनिटी' किस राज्य में स्थित है?",
        options: [
            "Maharashtra / महाराष्ट्र",
            "Gujarat / गुजरात",
            "Rajasthan / राजस्थान",
            "Madhya Pradesh / मध्य प्रदेश"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 49,
        question: "Which city is known as the 'Electronic City of India'?",
        questionHindi: "किस शहर को 'भारत की इलेक्ट्रॉनिक सिटी' के रूप में जाना जाता है?",
        options: [
            "Hyderabad / हैदराबाद",
            "Bengaluru / बेंगलुरु",
            "Pune / पुणे",
            "Chennai / चेन्नई"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 50,
        question: "Who is the current Chief Justice of India (as of 2025)?",
        questionHindi: "भारत के वर्तमान मुख्य न्यायाधीश (2025 तक) कौन हैं?",
        options: [
            "D.Y. Chandrachud / डी.वाई. चंद्रचूड़",
            "Sanjiv Khanna / संजीव खन्ना",
            "U.U. Lalit / यू.यू. ललित",
            "N.V. Ramana / एन.वी. रमना"
        ],
        correct: 1,
        subject: "Current Affairs"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}