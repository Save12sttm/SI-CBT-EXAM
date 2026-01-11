// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 9
// Focus: Balanced Full Mock (Standard Exam Pattern)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- HISTORY (Ancient, Medieval, Modern) ---
    {
        id: 1,
        question: "Which Harappan site is located in Gujarat?",
        questionHindi: "कौन सा हड़प्पा स्थल गुजरात में स्थित है?",
        options: [
            "Kalibangan / कालीबंगा",
            "Ropar / रोपड़",
            "Dholavira / धोलावीरा",
            "Rakhi Garhi / राखीगढ़ी"
        ],
        correct: 2,
        subject: "Ancient History"
    },
    {
        id: 2,
        question: "Who was the founder of the 'Satavahana' dynasty?",
        questionHindi: "'सातवाहन' वंश का संस्थापक कौन था?",
        options: [
            "Simuka / सिमुक",
            "Kanha / कान्हा",
            "Satakarni I / सातकर्णी प्रथम",
            "Gautamiputra Satakarni / गौतमीपुत्र सातकर्णी"
        ],
        correct: 0,
        subject: "Ancient History"
    },
    {
        id: 3,
        question: "The 'Mansabdari System' was introduced by:",
        questionHindi: "'मनसबदारी प्रथा' किसके द्वारा शुरू की गई थी?",
        options: [
            "Babur / बाबर",
            "Akbar / अकबर",
            "Humayun / हुमायूं",
            "Shah Jahan / शाहजहाँ"
        ],
        correct: 1,
        subject: "Medieval History"
    },
    {
        id: 4,
        question: "Who founded the 'Servants of India Society'?",
        questionHindi: "'सर्वेंट्स ऑफ इंडिया सोसाइटी' की स्थापना किसने की?",
        options: [
            "Gopal Krishna Gokhale / गोपाल कृष्ण गोखले",
            "Bal Gangadhar Tilak / बाल गंगाधर तिलक",
            "Dadabhai Naoroji / दादाभाई नौरोजी",
            "Annie Besant / एनी बेसेंट"
        ],
        correct: 0,
        subject: "Modern History"
    },
    {
        id: 5,
        question: "The 'Kakori Conspiracy Case' took place in which year?",
        questionHindi: "'काकोरी षड्यंत्र कांड' किस वर्ष हुआ था?",
        options: [
            "1920",
            "1922",
            "1925",
            "1929"
        ],
        correct: 2,
        subject: "Modern History"
    },
    {
        id: 6,
        question: "Who was the Viceroy of India when the Indian National Congress was formed?",
        questionHindi: "भारतीय राष्ट्रीय कांग्रेस की स्थापना के समय भारत का वायसराय कौन था?",
        options: [
            "Lord Ripon / लॉर्ड रिपन",
            "Lord Lytton / लॉर्ड लिटन",
            "Lord Dufferin / लॉर्ड डफरिन",
            "Lord Curzon / लॉर्ड कर्जन"
        ],
        correct: 2,
        subject: "Modern History"
    },
    {
        id: 7,
        question: "The book 'Poverty and Un-British Rule in India' was written by:",
        questionHindi: "'पॉवर्टी एंड अन-ब्रिटिश रूल इन इंडिया' पुस्तक किसके द्वारा लिखी गई थी?",
        options: [
            "R.C. Dutt / आर.सी. दत्त",
            "Dadabhai Naoroji / दादाभाई नौरोजी",
            "M.G. Ranade / एम.जी. रानाडे",
            "Jawaharlal Nehru / जवाहरलाल नेहरू"
        ],
        correct: 1,
        subject: "Modern History"
    },

    // --- GENERAL SCIENCE ---
    {
        id: 8,
        question: "The SI unit of Power of a lens is:",
        questionHindi: "लेंस की शक्ति की SI इकाई है:",
        options: [
            "Watt / वाट",
            "Dioptre / डायोप्टर",
            "Lumen / लुमेन",
            "Candela / कैंडेला"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 9,
        question: "Sound travels fastest in which medium?",
        questionHindi: "ध्वनि किस माध्यम में सबसे तेज गति करती है?",
        options: [
            "Air / हवा",
            "Water / पानी",
            "Vacuum / निर्वात",
            "Steel / इस्पात"
        ],
        correct: 3,
        subject: "Physics"
    },
    {
        id: 10,
        question: "Which gas is used in electric bulbs?",
        questionHindi: "विद्युत बल्बों में किस गैस का उपयोग किया जाता है?",
        options: [
            "Oxygen / ऑक्सीजन",
            "Nitrogen / नाइट्रोजन",
            "Argon / आर्गन",
            "Carbon Dioxide / कार्बन डाइऑक्साइड"
        ],
        correct: 2,
        subject: "Chemistry"
    },
    {
        id: 11,
        question: "The main constituent of Gobar Gas is:",
        questionHindi: "गोबर गैस का मुख्य घटक है:",
        options: [
            "Methane / मीथेन",
            "Ethane / इथेन",
            "Propane / प्रोपेन",
            "Butane / ब्यूटेन"
        ],
        correct: 0,
        subject: "Chemistry"
    },
    {
        id: 12,
        question: "Which metal is liquid at room temperature?",
        questionHindi: "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        options: [
            "Sodium / सोडियम",
            "Mercury / पारा (मरकरी)",
            "Bromine / ब्रोमीन",
            "Potassium / पोटैशियम"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 13,
        question: "The powerhouse of the cell is:",
        questionHindi: "कोशिका का पावरहाउस है:",
        options: [
            "Mitochondria / माइटोकॉन्ड्रिया",
            "Ribosome / राइबोसोम",
            "Lysosome / लाइसोसोम",
            "Nucleus / केंद्रक"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 14,
        question: "Which vitamin is water soluble?",
        questionHindi: "कौन सा विटामिन पानी में घुलनशील है?",
        options: [
            "Vitamin A / विटामिन ए",
            "Vitamin D / विटामिन डी",
            "Vitamin C / विटामिन सी",
            "Vitamin K / विटामिन के"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 15,
        question: "The normal blood pressure of a human being is:",
        questionHindi: "एक इंसान का सामान्य रक्तचाप होता है:",
        options: [
            "120/80 mm Hg",
            "140/90 mm Hg",
            "100/60 mm Hg",
            "130/70 mm Hg"
        ],
        correct: 0,
        subject: "Biology"
    },

    // --- POLITY & CONSTITUTION ---
    {
        id: 16,
        question: "The 'Directive Principles of State Policy' (DPSP) are adopted from which country?",
        questionHindi: "'राज्य के नीति निर्देशक सिद्धांत' (DPSP) किस देश से अपनाए गए हैं?",
        options: [
            "USA / अमेरिका",
            "Canada / कनाडा",
            "Ireland / आयरलैंड",
            "USSR / यूएसएसआर"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 17,
        question: "Who appoints the Governor of a State?",
        questionHindi: "राज्य के राज्यपाल की नियुक्ति कौन करता है?",
        options: [
            "Chief Minister / मुख्यमंत्री",
            "President / राष्ट्रपति",
            "Prime Minister / प्रधान मंत्री",
            "Chief Justice of High Court / उच्च न्यायालय के मुख्य न्यायाधीश"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 18,
        question: "Which article deals with the 'Uniform Civil Code'?",
        questionHindi: "कौन सा अनुच्छेद 'समान नागरिक संहिता' से संबंधित है?",
        options: [
            "Article 40 / अनुच्छेद 40",
            "Article 44 / अनुच्छेद 44",
            "Article 45 / अनुच्छेद 45",
            "Article 50 / अनुच्छेद 50"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 19,
        question: "The minimum age for becoming a member of Lok Sabha is:",
        questionHindi: "लोकसभा का सदस्य बनने के लिए न्यूनतम आयु है:",
        options: [
            "21 years / 21 वर्ष",
            "25 years / 25 वर्ष",
            "30 years / 30 वर्ष",
            "35 years / 35 वर्ष"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 20,
        question: "Financial Emergency is mentioned in which Article?",
        questionHindi: "वित्तीय आपातकाल का उल्लेख किस अनुच्छेद में है?",
        options: [
            "Article 352 / अनुच्छेद 352",
            "Article 356 / अनुच्छेद 356",
            "Article 360 / अनुच्छेद 360",
            "Article 365 / अनुच्छेद 365"
        ],
        correct: 2,
        subject: "Polity"
    },

    // --- GEOGRAPHY & BIHAR SPECIAL ---
    {
        id: 21,
        question: "Which river is known as the 'Sorrow of Bihar'?",
        questionHindi: "किस नदी को 'बिहार का शोक' कहा जाता है?",
        options: [
            "Ganga / गंगा",
            "Kosi / कोसी",
            "Gandak / गंडक",
            "Son / सोन"
        ],
        correct: 1,
        subject: "Bihar Geography"
    },
    {
        id: 22,
        question: "The 'Valmiki Tiger Reserve' is located in which district of Bihar?",
        questionHindi: "'वाल्मीकि टाइगर रिजर्व' बिहार के किस जिले में स्थित है?",
        options: [
            "West Champaran / पश्चिम चंपारण",
            "East Champaran / पूर्वी चंपारण",
            "Gopalganj / गोपालगंज",
            "Siwan / सीवान"
        ],
        correct: 0,
        subject: "Bihar Geography"
    },
    {
        id: 23,
        question: "In which year was Bihar separated from Bengal?",
        questionHindi: "बिहार को बंगाल से किस वर्ष अलग किया गया था?",
        options: [
            "1905",
            "1911",
            "1912",
            "1936"
        ],
        correct: 2,
        subject: "Bihar History"
    },
    {
        id: 24,
        question: "Who led the 1857 revolt in Patna?",
        questionHindi: "पटना में 1857 के विद्रोह का नेतृत्व किसने किया?",
        options: [
            "Kunwar Singh / कुंवर सिंह",
            "Pir Ali / पीर अली",
            "Amar Singh / अमर सिंह",
            "Wazir Ali / वजीर अली"
        ],
        correct: 1,
        subject: "Bihar History"
    },
    {
        id: 25,
        question: "Which soil is known as 'Regur Soil'?",
        questionHindi: "किस मिट्टी को 'रेगुर मिट्टी' के नाम से जाना जाता है?",
        options: [
            "Alluvial Soil / जलोढ़ मिट्टी",
            "Red Soil / लाल मिट्टी",
            "Black Soil / काली मिट्टी",
            "Laterite Soil / लेटराइट मिट्टी"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 26,
        question: "The largest planet in our solar system is:",
        questionHindi: "हमारे सौरमंडल का सबसे बड़ा ग्रह है:",
        options: [
            "Earth / पृथ्वी",
            "Mars / मंगल",
            "Jupiter / बृहस्पति",
            "Saturn / शनि"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 27,
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

    // --- CURRENT AFFAIRS (Mixed) ---
    {
        id: 28,
        question: "Who is the current Chief Election Commissioner of India (2024)?",
        questionHindi: "भारत के वर्तमान मुख्य चुनाव आयुक्त (2024) कौन हैं?",
        options: [
            "Rajiv Kumar / राजीव कुमार",
            "Arun Goel / अरुण गोयल",
            "Anup Chandra Pandey / अनूप चंद्र पांडे",
            "Sushil Chandra / सुशील चंद्र"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 29,
        question: "Which country hosted the G20 Summit in 2023?",
        questionHindi: "2023 में G20 शिखर सम्मेलन की मेजबानी किस देश ने की?",
        options: [
            "Indonesia / इंडोनेशिया",
            "India / भारत",
            "Brazil / ब्राजील",
            "USA / अमेरिका"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 30,
        question: "Who won the 'Dadasaheb Phalke Lifetime Achievement Award' recently?",
        questionHindi: "हाल ही में 'दादा साहब फाल्के लाइफटाइम अचीवमेंट अवार्ड' किसने जीता?",
        options: [
            "Waheeda Rehman / वहीदा रहमान",
            "Asha Parekh / आशा पारेख",
            "Rajinikanth / रजनीकांत",
            "Amitabh Bachchan / अमिताभ बच्चन"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 31,
        question: "The 'Aditya-L1' mission is related to the study of:",
        questionHindi: "'आदित्य-एल1' मिशन किसके अध्ययन से संबंधित है?",
        options: [
            "Moon / चंद्रमा",
            "Sun / सूर्य",
            "Mars / मंगल",
            "Venus / शुक्र"
        ],
        correct: 1,
        subject: "Science & Tech"
    },
    {
        id: 32,
        question: "Which film won the Best Feature Film award at the 69th National Film Awards?",
        questionHindi: "69वें राष्ट्रीय फिल्म पुरस्कारों में किस फिल्म ने सर्वश्रेष्ठ फीचर फिल्म का पुरस्कार जीता?",
        options: [
            "RRR / आरआरआर",
            "Rocketry: The Nambi Effect / रॉकेटरी: द नांबी इफेक्ट",
            "Pushpa / पुष्पा",
            "Gangubai Kathiawadi / गंगूबाई काठियावाड़ी"
        ],
        correct: 1,
        subject: "Current Affairs"
    },

    // --- REASONING & MATH ---
    {
        id: 33,
        question: "Select the related word: Heart : Cardiology :: Kidney : ?",
        questionHindi: "संबंधित शब्द चुनें: हृदय : कार्डियोलॉजी :: गुर्दा : ?",
        options: [
            "Neurology / न्यूरोलॉजी",
            "Nephrology / नेफ्रोलॉजी",
            "Pathology / पैथोलॉजी",
            "Hematology / हेमेटोलॉजी"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 34,
        question: "Find the missing number: 5, 10, 20, 40, ?",
        questionHindi: "लुप्त संख्या ज्ञात करें: 5, 10, 20, 40, ?",
        options: [
            "60",
            "70",
            "80",
            "90"
        ],
        correct: 2,
        subject: "Reasoning"
    },
    {
        id: 35,
        question: "If A is the brother of B, B is the sister of C, and C is the father of D, how is D related to A?",
        questionHindi: "यदि A, B का भाई है, B, C की बहन है, और C, D का पिता है, तो D का A से क्या संबंध है?",
        options: [
            "Nephew/Niece / भतीजा/भतीजी",
            "Brother / भाई",
            "Uncle / चाचा",
            "Father / पिता"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 36,
        question: "A train running at 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        questionHindi: "60 किमी/घंटा की गति से चल रही एक ट्रेन 9 सेकंड में एक खंभे को पार करती है। ट्रेन की लंबाई क्या है?",
        options: [
            "120 m",
            "150 m",
            "180 m",
            "324 m"
        ],
        correct: 1,
        subject: "Math"
    },
    {
        id: 37,
        question: "The ratio of two numbers is 3:4 and their LCM is 84. The greater number is:",
        questionHindi: "दो संख्याओं का अनुपात 3:4 है और उनका लघुत्तम समापवर्तक (LCM) 84 है। बड़ी संख्या है:",
        options: [
            "21",
            "24",
            "28",
            "84"
        ],
        correct: 2,
        subject: "Math"
    },

    // --- MISCELLANEOUS GK ---
    {
        id: 38,
        question: "Who is known as the 'Iron Man of India'?",
        questionHindi: "'भारत का लौह पुरुष' किसे कहा जाता है?",
        options: [
            "Mahatma Gandhi / महात्मा गांधी",
            "Sardar Vallabhbhai Patel / सरदार वल्लभभाई पटेल",
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "Subhash Chandra Bose / सुभाष चंद्र बोस"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 39,
        question: "The 'Hornbill Festival' is celebrated in which state?",
        questionHindi: "'हॉर्नबिल महोत्सव' किस राज्य में मनाया जाता है?",
        options: [
            "Nagaland / नागालैंड",
            "Manipur / मणिपुर",
            "Assam / असम",
            "Meghalaya / मेघालय"
        ],
        correct: 0,
        subject: "Culture"
    },
    {
        id: 40,
        question: "Where is the headquarters of ISRO located?",
        questionHindi: "इसरो (ISRO) का मुख्यालय कहाँ स्थित है?",
        options: [
            "New Delhi / नई दिल्ली",
            "Mumbai / मुंबई",
            "Bengaluru / बेंगलुरु",
            "Chennai / चेन्नई"
        ],
        correct: 2,
        subject: "Science & Tech"
    },
    {
        id: 41,
        question: "Which is the largest organ in the human body?",
        questionHindi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
        options: [
            "Heart / हृदय",
            "Liver / यकृत",
            "Skin / त्वचा",
            "Lungs / फेफड़े"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 42,
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
    {
        id: 43,
        question: "Who wrote 'Vande Mataram'?",
        questionHindi: "'वंदे मातरम' किसने लिखा था?",
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
        id: 44,
        question: "The 'Gir National Park' is famous for:",
        questionHindi: "'गिर राष्ट्रीय उद्यान' किसके लिए प्रसिद्ध है?",
        options: [
            "Tigers / बाघ",
            "Asiatic Lions / एशियाई शेर",
            "Elephants / हाथी",
            "Rhinos / गैंडे"
        ],
        correct: 1,
        subject: "Environment"
    },
    {
        id: 45,
        question: "Which day is celebrated as 'National Science Day'?",
        questionHindi: "'राष्ट्रीय विज्ञान दिवस' किस दिन मनाया जाता है?",
        options: [
            "28 February / 28 फरवरी",
            "8 March / 8 मार्च",
            "5 June / 5 जून",
            "14 November / 14 नवंबर"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 46,
        question: "Who was the first woman President of India?",
        questionHindi: "भारत की पहली महिला राष्ट्रपति कौन थीं?",
        options: [
            "Indira Gandhi / इंदिरा गांधी",
            "Pratibha Patil / प्रतिभा पाटिल",
            "Draupadi Murmu / द्रौपदी मुर्मू",
            "Sarojini Naidu / सरोजिनी नायडू"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 47,
        question: "What is the currency of Japan?",
        questionHindi: "जापान की मुद्रा क्या है?",
        options: [
            "Yuan / युआन",
            "Yen / येन",
            "Won / वोन",
            "Dollar / डॉलर"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 48,
        question: "Which gas is known as 'Laughing Gas'?",
        questionHindi: "किस गैस को 'लाफिंग गैस' के नाम से जाना जाता है?",
        options: [
            "Nitric Oxide / नाइट्रिक ऑक्साइड",
            "Nitrous Oxide / नाइट्रस ऑक्साइड",
            "Nitrogen Dioxide / नाइट्रोजन डाइऑक्साइड",
            "Nitrogen Peroxide / नाइट्रोजन पेरोक्साइड"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 49,
        question: "The 'Satyameva Jayate' slogan is taken from which Upanishad?",
        questionHindi: "'सत्यमेव जयते' का नारा किस उपनिषद से लिया गया है?",
        options: [
            "Mundaka Upanishad / मुंडक उपनिषद",
            "Katha Upanishad / कठ उपनिषद",
            "Mandukya Upanishad / मांडूक्य उपनिषद",
            "Chandogya Upanishad / छांदोग्य उपनिषद"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 50,
        question: "Which of the following is an input device?",
        questionHindi: "निम्नलिखित में से कौन एक इनपुट डिवाइस है?",
        options: [
            "Monitor / मॉनिटर",
            "Printer / प्रिंटर",
            "Mouse / माउस",
            "Speaker / स्पीकर"
        ],
        correct: 2,
        subject: "Computer"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}