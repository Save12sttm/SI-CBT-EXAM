// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 8
// Focus: Challenging Mock (Science Application, Current Affairs, Bihar GK)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- CURRENT AFFAIRS (National & Bihar) ---
    {
        id: 1,
        question: "Which operation was launched by India to evacuate its citizens from Israel?",
        questionHindi: "भारत ने अपने नागरिकों को इजरायल से निकालने के लिए कौन सा ऑपरेशन शुरू किया?",
        options: [
            "Operation Ganga / ऑपरेशन गंगा",
            "Operation Ajay / ऑपरेशन अजय",
            "Operation Kaveri / ऑपरेशन कावेरी",
            "Operation Dost / ऑपरेशन दोस्त"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 2,
        question: "Who has been honored with the 'Bihar Kesari' award recently?",
        questionHindi: "हाल ही में 'बिहार केसरी' पुरस्कार से किसे सम्मानित किया गया है?",
        options: [
            "Sharda Sinha / शारदा सिन्हा",
            "Khan Sir / खान सर",
            "Anand Kumar / आनंद कुमार",
            "Manoj Bajpayee / मनोज बाजपेयी"
        ],
        correct: 1,
        subject: "Bihar Current"
    },
    {
        id: 3,
        question: "The 'Women's Reservation Bill' (Nari Shakti Vandan Adhiniyam) provides what percent reservation?",
        questionHindi: "'महिला आरक्षण विधेयक' (नारी शक्ति वंदन अधिनियम) कितना प्रतिशत आरक्षण प्रदान करता है?",
        options: [
            "30%",
            "33%",
            "50%",
            "25%"
        ],
        correct: 1,
        subject: "Polity/Current"
    },
    {
        id: 4,
        question: "Which city has been declared the first 'Solar City' of India?",
        questionHindi: "किस शहर को भारत का पहला 'सौर शहर' (Solar City) घोषित किया गया है?",
        options: [
            "Sanchi / सांची",
            "Modhera / मोढेरा",
            "Indore / इंदौर",
            "Ayodhya / अयोध्या"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 5,
        question: "In the Asian Games 2023, India won how many gold medals?",
        questionHindi: "एशियाई खेल 2023 में भारत ने कितने स्वर्ण पदक जीते?",
        options: [
            "20",
            "28",
            "35",
            "107"
        ],
        correct: 1,
        subject: "Sports"
    },

    // --- GENERAL SCIENCE (Physics & Chemistry) ---
    {
        id: 6,
        question: "The phenomenon of 'Total Internal Reflection' is used in:",
        questionHindi: "'पूर्ण आंतरिक परावर्तन' की घटना का उपयोग किसमें किया जाता है?",
        options: [
            "Telescope / दूरबीन",
            "Optical Fibre / ऑप्टिकल फाइबर",
            "Microscope / माइक्रोस्कोप",
            "Periscope / पेरिस्कोप"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 7,
        question: "Which acid is used in Lead Storage Batteries?",
        questionHindi: "लेड स्टोरेज बैटरी (सीसा संचायक सेल) में किस अम्ल का उपयोग किया जाता है?",
        options: [
            "Hydrochloric Acid / हाइड्रोक्लोरिक अम्ल",
            "Nitric Acid / नाइट्रिक अम्ल",
            "Sulphuric Acid / सल्फ्यूरिक अम्ल",
            "Acetic Acid / एसिटिक अम्ल"
        ],
        correct: 2,
        subject: "Chemistry"
    },
    {
        id: 8,
        question: "The SI unit of Electrical Resistance is:",
        questionHindi: "विद्युत प्रतिरोध की SI इकाई है:",
        options: [
            "Ampere / एम्पेयर",
            "Volt / वोल्ट",
            "Ohm / ओम",
            "Watt / वाट"
        ],
        correct: 2,
        subject: "Physics"
    },
    {
        id: 9,
        question: "Bronze is an alloy of:",
        questionHindi: "कांस्य (Bronze) किसका मिश्र धातु है?",
        options: [
            "Copper and Zinc / तांबा और जस्ता",
            "Copper and Tin / तांबा और टिन",
            "Copper and Iron / तांबा और लोहा",
            "Zinc and Tin / जस्ता और टिन"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 10,
        question: "Which isotope of Uranium is used in nuclear reactors?",
        questionHindi: "परमाणु रिएक्टरों में यूरेनियम के किस समस्थानिक (Isotope) का उपयोग किया जाता है?",
        options: [
            "U-238",
            "U-235",
            "U-234",
            "U-239"
        ],
        correct: 1,
        subject: "Physics"
    },

    // --- BIHAR SPECIAL (Geography & Census) ---
    {
        id: 11,
        question: "According to Census 2011, what is the literacy rate of Bihar?",
        questionHindi: "जनगणना 2011 के अनुसार, बिहार की साक्षरता दर क्या है?",
        options: [
            "61.80%",
            "63.82%",
            "59.45%",
            "71.20%"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 12,
        question: "The river 'Falgu' is formed by the confluence of which two streams?",
        questionHindi: "'फल्गु' नदी किन दो धाराओं के संगम से बनती है?",
        options: [
            "Mohana and Lilajan (Niranjana) / मोहाना और लीलाजन (निरंजना)",
            "Son and Ganga / सोन और गंगा",
            "Gandak and Kosi / गंडक और कोसी",
            "Kamla and Balan / कमला और बालन"
        ],
        correct: 0,
        subject: "Bihar Geography"
    },
    {
        id: 13,
        question: "Which soil is predominantly found in North Bihar?",
        questionHindi: "उत्तर बिहार में मुख्य रूप से कौन सी मिट्टी पाई जाती है?",
        options: [
            "Red Soil / लाल मिट्टी",
            "Terai Soil / तराई मिट्टी",
            "Alluvial Soil (Jallodh) / जलोढ़ मिट्टी",
            "Laterite Soil / लेटराइट मिट्टी"
        ],
        correct: 2,
        subject: "Bihar Geography"
    },
    {
        id: 14,
        question: "Who was the first independent Chief Minister of Bihar (1937)?",
        questionHindi: "बिहार के पहले स्वतंत्र मुख्यमंत्री (1937) कौन थे?",
        options: [
            "Dr. Sri Krishna Singh / डॉ. श्री कृष्ण सिंह",
            "Muhammad Yunus / मुहम्मद यूनुस",
            "Anugrah Narayan Sinha / अनुग्रह नारायण सिन्हा",
            "Deep Narayan Singh / दीप नारायण सिंह"
        ],
        correct: 1,
        subject: "Bihar History"
    },
    {
        id: 15,
        question: "The 'Barabar Caves' are located in which district?",
        questionHindi: "'बराबर की गुफाएं' किस जिले में स्थित हैं?",
        options: [
            "Gaya / गया",
            "Jehanabad / जहानाबाद",
            "Aurangabad / औरंगाबाद",
            "Nawada / नवादा"
        ],
        correct: 1,
        subject: "Bihar History"
    },

    // --- BIOLOGY & ENVIRONMENT ---
    {
        id: 16,
        question: "Which of the following is responsible for 'Greenhouse Effect'?",
        questionHindi: "'ग्रीनहाउस प्रभाव' के लिए निम्नलिखित में से कौन जिम्मेदार है?",
        options: [
            "Nitrogen / नाइट्रोजन",
            "Oxygen / ऑक्सीजन",
            "Carbon Dioxide / कार्बन डाइऑक्साइड",
            "Argon / आर्गन"
        ],
        correct: 2,
        subject: "Environment"
    },
    {
        id: 17,
        question: "The power of a lens is measured in:",
        questionHindi: "लेंस की शक्ति किसमें मापी जाती है?",
        options: [
            "Diopter / डायोप्टर",
            "Lumen / लुमेन",
            "Candela / कैंडेला",
            "Decibel / डेसिबल"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 18,
        question: "Which blood group has no antibodies?",
        questionHindi: "किस रक्त समूह में कोई एंटीबॉडी नहीं होती है?",
        options: [
            "A",
            "B",
            "AB",
            "O"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 19,
        question: "Xerophthalmia is caused due to deficiency of:",
        questionHindi: "जेरोफथैल्मिया (Xerophthalmia) किसकी कमी के कारण होता है?",
        options: [
            "Vitamin A / विटामिन ए",
            "Vitamin B / विटामिन बी",
            "Vitamin C / विटामिन सी",
            "Vitamin K / विटामिन के"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 20,
        question: "Which gland controls the Blood Pressure?",
        questionHindi: "कौन सी ग्रंथि रक्तचाप को नियंत्रित करती है?",
        options: [
            "Thyroid / थायराइड",
            "Adrenal / अधिवृक्क (Adrenal)",
            "Thymus / थाइमस",
            "Pituitary / पीयूष"
        ],
        correct: 1,
        subject: "Biology"
    },

    // --- INDIAN HISTORY (Modern Focus) ---
    {
        id: 21,
        question: "Who was the Governor-General during the Revolt of 1857?",
        questionHindi: "1857 के विद्रोह के समय गवर्नर-जनरल कौन था?",
        options: [
            "Lord Dalhousie / लॉर्ड डलहौजी",
            "Lord Canning / लॉर्ड कैनिंग",
            "Lord Ripon / लॉर्ड रिपन",
            "Lord Curzon / लॉर्ड कर्जन"
        ],
        correct: 1,
        subject: "Modern History"
    },
    {
        id: 22,
        question: "The 'Lucknow Pact' (1916) was signed between:",
        questionHindi: "'लखनऊ समझौता' (1916) किसके बीच हस्ताक्षरित हुआ था?",
        options: [
            "Congress and British / कांग्रेस और ब्रिटिश",
            "Congress and Muslim League / कांग्रेस और मुस्लिम लीग",
            "Moderates and Extremists / नरम दल और गरम दल",
            "Gandhi and Ambedkar / गांधी और अंबेडकर"
        ],
        correct: 1,
        subject: "Modern History"
    },
    {
        id: 23,
        question: "Who established the 'Atmiya Sabha'?",
        questionHindi: "'आत्मीय सभा' की स्थापना किसने की?",
        options: [
            "Raja Ram Mohan Roy / राजा राम मोहन राय",
            "Debendranath Tagore / देबेंद्रनाथ टैगोर",
            "Swami Vivekananda / स्वामी विवेकानंद",
            "Dayanand Saraswati / दयानंद सरस्वती"
        ],
        correct: 0,
        subject: "Modern History"
    },
    {
        id: 24,
        question: "Which incident led Gandhiji to withdraw the Non-Cooperation Movement?",
        questionHindi: "किस घटना के कारण गांधीजी को असहयोग आंदोलन वापस लेना पड़ा?",
        options: [
            "Jallianwala Bagh / जलियांवाला बाग",
            "Chauri Chaura / चौरी चौरा",
            "Kakori Conspiracy / काकोरी षड्यंत्र",
            "Dandi March / दांडी मार्च"
        ],
        correct: 1,
        subject: "Modern History"
    },
    {
        id: 25,
        question: "Who was the first Indian to clear the Indian Civil Service (ICS) exam?",
        questionHindi: "भारतीय सिविल सेवा (ICS) परीक्षा पास करने वाले पहले भारतीय कौन थे?",
        options: [
            "Satyendranath Tagore / सत्येंद्रनाथ टैगोर",
            "Subhash Chandra Bose / सुभाष चंद्र बोस",
            "Surendranath Banerjee / सुरेंद्रनाथ बनर्जी",
            "Dadabhai Naoroji / दादाभाई नौरोजी"
        ],
        correct: 0,
        subject: "Modern History"
    },

    // --- INDIAN POLITY & CONSTITUTION ---
    {
        id: 26,
        question: "By which amendment was the 'Fundamental Duties' added?",
        questionHindi: "किस संशोधन द्वारा 'मौलिक कर्तव्यों' को जोड़ा गया?",
        options: [
            "42nd Amendment / 42वां संशोधन",
            "44th Amendment / 44वां संशोधन",
            "86th Amendment / 86वां संशोधन",
            "61st Amendment / 61वां संशोधन"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 27,
        question: "The 'Joint Session' of Parliament is summoned by:",
        questionHindi: "संसद का 'संयुक्त सत्र' किसके द्वारा बुलाया जाता है?",
        options: [
            "Speaker of Lok Sabha / लोकसभा अध्यक्ष",
            "Prime Minister / प्रधान मंत्री",
            "President / राष्ट्रपति",
            "Vice President / उपराष्ट्रपति"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 28,
        question: "Which article gives the President the power to issue Ordinances?",
        questionHindi: "कौन सा अनुच्छेद राष्ट्रपति को अध्यादेश जारी करने की शक्ति देता है?",
        options: [
            "Article 123 / अनुच्छेद 123",
            "Article 213 / अनुच्छेद 213",
            "Article 110 / अनुच्छेद 110",
            "Article 143 / अनुच्छेद 143"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 29,
        question: "The maximum gap between two sessions of Parliament cannot exceed:",
        questionHindi: "संसद के दो सत्रों के बीच अधिकतम अंतराल इससे अधिक नहीं हो सकता:",
        options: [
            "3 Months / 3 महीने",
            "6 Months / 6 महीने",
            "9 Months / 9 महीने",
            "1 Year / 1 वर्ष"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 30,
        question: "Panchayati Raj was first introduced in which state?",
        questionHindi: "पंचायती राज सबसे पहले किस राज्य में लागू किया गया था?",
        options: [
            "Andhra Pradesh / आंध्र प्रदेश",
            "Rajasthan / राजस्थान",
            "Bihar / बिहार",
            "Punjab / पंजाब"
        ],
        correct: 1,
        subject: "Polity"
    },

    // --- REASONING & MATH (Mental Ability) ---
    {
        id: 31,
        question: "If A = 2, M = 26, Z = 52, then BET = ?",
        questionHindi: "यदि A = 2, M = 26, Z = 52, तो BET = ?",
        options: [
            "44",
            "54",
            "64",
            "72"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 32,
        question: "Find the odd one out:",
        questionHindi: "विषम चुनें:",
        options: [
            "Zinc / जस्ता",
            "Iron / लोहा",
            "Copper / तांबा",
            "Brass / पीतल"
        ],
        correct: 3,
        subject: "Reasoning"
    },
    {
        id: 33,
        question: "A man walks 4 km East, then turns right and walks 3 km. How far is he from the starting point?",
        questionHindi: "एक आदमी 4 किमी पूर्व की ओर चलता है, फिर दाएं मुड़ता है और 3 किमी चलता है। वह प्रारंभिक बिंदु से कितनी दूर है?",
        options: [
            "7 km",
            "5 km",
            "6 km",
            "4 km"
        ],
        correct: 1,
        subject: "Math"
    },
    {
        id: 34,
        question: "Complete the series: 2, 6, 12, 20, 30, ?",
        questionHindi: "श्रृंखला को पूरा करें: 2, 6, 12, 20, 30, ?",
        options: [
            "40",
            "42",
            "44",
            "38"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 35,
        question: "If 15% of A = 20% of B, then A:B is:",
        questionHindi: "यदि A का 15% = B का 20% है, तो A:B है:",
        options: [
            "3:4",
            "4:3",
            "5:4",
            "4:5"
        ],
        correct: 1,
        subject: "Math"
    },

    // --- MISCELLANEOUS GK ---
    {
        id: 36,
        question: "Which city is situated on the banks of river Sarayu?",
        questionHindi: "सरयू नदी के तट पर कौन सा शहर स्थित है?",
        options: [
            "Varanasi / वाराणसी",
            "Ayodhya / अयोध्या",
            "Allahabad / इलाहाबाद",
            "Lucknow / लखनऊ"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 37,
        question: "The classical dance 'Kuchipudi' belongs to which state?",
        questionHindi: "शास्त्रीय नृत्य 'कुचिपुड़ी' किस राज्य का है?",
        options: [
            "Kerala / केरल",
            "Tamil Nadu / तमिलनाडु",
            "Andhra Pradesh / आंध्र प्रदेश",
            "Odisha / ओडिशा"
        ],
        correct: 2,
        subject: "Culture"
    },
    {
        id: 38,
        question: "Who is the author of 'Annihilation of Caste'?",
        questionHindi: "'जाति का विनाश' (Annihilation of Caste) के लेखक कौन हैं?",
        options: [
            "B.R. Ambedkar / बी.आर. अम्बेडकर",
            "Jyotiba Phule / ज्योतिबा फुले",
            "Periyar / पेरियार",
            "M.K. Gandhi / एम.के. गांधी"
        ],
        correct: 0,
        subject: "Books"
    },
    {
        id: 39,
        question: "Which country is known as the 'Sugar Bowl of the World'?",
        questionHindi: "किस देश को 'विश्व का चीनी का कटोरा' कहा जाता है?",
        options: [
            "India / भारत",
            "Brazil / ब्राजील",
            "Cuba / क्यूबा",
            "China / चीन"
        ],
        correct: 2,
        subject: "World GK"
    },
    {
        id: 40,
        question: "The 'Ramsar Convention' is associated with the conservation of:",
        questionHindi: "'रामसर कन्वेंशन' किसके संरक्षण से संबंधित है?",
        options: [
            "Forests / वन",
            "Wetlands / आर्द्रभूमि",
            "Tigers / बाघ",
            "Elephants / हाथी"
        ],
        correct: 1,
        subject: "Environment"
    },
    {
        id: 41,
        question: "Where is the Indian Military Academy (IMA) located?",
        questionHindi: "भारतीय सैन्य अकादमी (IMA) कहाँ स्थित है?",
        options: [
            "Dehradun / देहरादून",
            "Pune / पुणे",
            "Chennai / चेन्नई",
            "New Delhi / नई दिल्ली"
        ],
        correct: 0,
        subject: "Defence"
    },
    {
        id: 42,
        question: "Which gas is used in the manufacturing of Vanaspati Ghee?",
        questionHindi: "वनस्पति घी के निर्माण में किस गैस का उपयोग किया जाता है?",
        options: [
            "Oxygen / ऑक्सीजन",
            "Hydrogen / हाइड्रोजन",
            "Nitrogen / नाइट्रोजन",
            "Carbon Dioxide / कार्बन डाइऑक्साइड"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 43,
        question: "The 'Golden Revolution' is related to:",
        questionHindi: "'स्वर्ण क्रांति' (Golden Revolution) किससे संबंधित है?",
        options: [
            "Oilseeds / तिलहन",
            "Horticulture & Honey / बागवानी और शहद",
            "Jute / जूट",
            "Egg / अंडा"
        ],
        correct: 1,
        subject: "Economy"
    },
    {
        id: 44,
        question: "Who was the first woman Governor of a state in independent India?",
        questionHindi: "स्वतंत्र भारत में किसी राज्य की पहली महिला राज्यपाल कौन थीं?",
        options: [
            "Sarojini Naidu / सरोजिनी नायडू",
            "Sucheta Kripalani / सुचेता कृपलानी",
            "Vijayalakshmi Pandit / विजयालक्ष्मी पंडित",
            "Indira Gandhi / इंदिरा गांधी"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 45,
        question: "Which planet is the hottest in the solar system?",
        questionHindi: "सौरमंडल का सबसे गर्म ग्रह कौन सा है?",
        options: [
            "Mercury / बुध",
            "Venus / शुक्र",
            "Mars / मंगल",
            "Jupiter / बृहस्पति"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 46,
        question: "The currency of Russia is:",
        questionHindi: "रूस की मुद्रा है:",
        options: [
            "Euro / यूरो",
            "Ruble / रूबल",
            "Dollar / डॉलर",
            "Pound / पाउंड"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 47,
        question: "Which vitamin is synthesized in our body by sunlight?",
        questionHindi: "सूर्य के प्रकाश से हमारे शरीर में किस विटामिन का संश्लेषण होता है?",
        options: [
            "Vitamin A / विटामिन ए",
            "Vitamin D / विटामिन डी",
            "Vitamin E / विटामिन ई",
            "Vitamin K / विटामिन के"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 48,
        question: "The 'Kharif' crops are harvested in:",
        questionHindi: "'खरीफ' फसलों की कटाई कब की जाती है?",
        options: [
            "June - July / जून - जुलाई",
            "September - October / सितंबर - अक्टूबर",
            "March - April / मार्च - अप्रैल",
            "December - January / दिसंबर - जनवरी"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 49,
        question: "Who built the Red Fort in Delhi?",
        questionHindi: "दिल्ली में लाल किला किसने बनवाया था?",
        options: [
            "Akbar / अकबर",
            "Shah Jahan / शाहजहाँ",
            "Jahangir / जहांगीर",
            "Aurangzeb / औरंगजेब"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 50,
        question: "The largest gland in the human body is:",
        questionHindi: "मानव शरीर की सबसे बड़ी ग्रंथि है:",
        options: [
            "Pancreas / अग्न्याशय",
            "Liver / यकृत",
            "Thyroid / थायराइड",
            "Pituitary / पीयूष"
        ],
        correct: 1,
        subject: "Biology"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}