// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 10
// Focus: Grand Mock (Comprehensive Mix - Final Practice)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- CURRENT AFFAIRS & INTERNATIONAL ---
    {
        id: 1,
        question: "Which country has recently become the new member of BRICS (2024)?",
        questionHindi: "हाल ही में कौन सा देश ब्रिक्स (BRICS) का नया सदस्य बना है (2024)?",
        options: [
            "Egypt / मिस्र",
            "Pakistan / पाकिस्तान",
            "Sri Lanka / श्रीलंका",
            "Bangladesh / बांग्लादेश"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 2,
        question: "Who has been appointed as the CEO of NITI Aayog?",
        questionHindi: "नीति आयोग के सीईओ के रूप में किसे नियुक्त किया गया है?",
        options: [
            "B.V.R. Subrahmanyam / बी.वी.आर. सुब्रमण्यम",
            "Amitabh Kant / अमिताभ कांत",
            "Parameswaran Iyer / परमेश्वरन अय्यर",
            "Rajiv Kumar / राजीव कुमार"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 3,
        question: "The 'Mera Yuva Bharat' (MY Bharat) platform was launched on:",
        questionHindi: "'मेरा युवा भारत' (MY Bharat) प्लेटफॉर्म कब लॉन्च किया गया था?",
        options: [
            "31 October 2023 / 31 अक्टूबर 2023",
            "15 August 2023 / 15 अगस्त 2023",
            "26 January 2024 / 26 जनवरी 2024",
            "2 October 2023 / 2 अक्टूबर 2023"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 4,
        question: "Which state started the 'Caste-based Census' for the first time in India?",
        questionHindi: "भारत में पहली बार 'जाति आधारित जनगणना' किस राज्य ने शुरू की?",
        options: [
            "Bihar / बिहार",
            "Uttar Pradesh / उत्तर प्रदेश",
            "Rajasthan / राजस्थान",
            "Karnataka / कर्नाटक"
        ],
        correct: 0,
        subject: "Current Affairs"
    },

    // --- HISTORY (Ancient, Medieval, Modern) ---
    {
        id: 5,
        question: "The 'Great Bath' was found at which Harappan site?",
        questionHindi: "'विशाल स्नानागार' (Great Bath) किस हड़प्पा स्थल पर पाया गया था?",
        options: [
            "Mohenjo-daro / मोहनजोदड़ो",
            "Harappa / हड़प्पा",
            "Lothal / लोथल",
            "Kalibangan / कालीबंगा"
        ],
        correct: 0,
        subject: "Ancient History"
    },
    {
        id: 6,
        question: "Who wrote 'Akbarnama'?",
        questionHindi: "'अकबरनामा' किसने लिखा था?",
        options: [
            "Abul Fazl / अबुल फजल",
            "Faizi / फैजी",
            "Todar Mal / टोडरमल",
            "Birbal / बीरबल"
        ],
        correct: 0,
        subject: "Medieval History"
    },
    {
        id: 7,
        question: "The 'Subsidiary Alliance' system was introduced by:",
        questionHindi: "'सहायक संधि' (Subsidiary Alliance) प्रणाली किसके द्वारा शुरू की गई थी?",
        options: [
            "Lord Wellesley / लॉर्ड वेलेजली",
            "Lord Dalhousie / लॉर्ड डलहौजी",
            "Lord Hastings / लॉर्ड हेस्टिंग्स",
            "Lord Cornwallis / लॉर्ड कॉर्नवालिस"
        ],
        correct: 0,
        subject: "Modern History"
    },
    {
        id: 8,
        question: "Who founded the 'Prarthana Samaj'?",
        questionHindi: "'प्रार्थना समाज' की स्थापना किसने की?",
        options: [
            "Atmaram Pandurang / आत्माराम पांडुरंग",
            "Raja Ram Mohan Roy / राजा राम मोहन राय",
            "Dayanand Saraswati / दयानंद सरस्वती",
            "Keshab Chandra Sen / केशव चंद्र सेन"
        ],
        correct: 0,
        subject: "Modern History"
    },
    {
        id: 9,
        question: "In which session did the Congress split into Moderates and Extremists?",
        questionHindi: "कांग्रेस किस अधिवेशन में नरम दल और गरम दल में विभाजित हुई थी?",
        options: [
            "Surat Session (1907) / सूरत अधिवेशन (1907)",
            "Lucknow Session (1916) / लखनऊ अधिवेशन (1916)",
            "Benaras Session (1905) / बनारस अधिवेशन (1905)",
            "Calcutta Session (1906) / कलकत्ता अधिवेशन (1906)"
        ],
        correct: 0,
        subject: "Modern History"
    },
    {
        id: 10,
        question: "Who was called the 'Grand Old Man of India'?",
        questionHindi: "'भारत का वयोवृद्ध पुरुष' (Grand Old Man) किसे कहा जाता था?",
        options: [
            "Dadabhai Naoroji / दादाभाई नौरोजी",
            "Gopal Krishna Gokhale / गोपाल कृष्ण गोखले",
            "Bal Gangadhar Tilak / बाल गंगाधर तिलक",
            "M.G. Ranade / एम.जी. रानाडे"
        ],
        correct: 0,
        subject: "Modern History"
    },

    // --- GEOGRAPHY (Indian & World) ---
    {
        id: 11,
        question: "Which of the following is the highest peak of South India?",
        questionHindi: "निम्नलिखित में से दक्षिण भारत की सबसे ऊंची चोटी कौन सी है?",
        options: [
            "Anaimudi / अनाईमुडी",
            "Doddabetta / डोड्डाबेट्टा",
            "Mahendragiri / महेंद्रगिरी",
            "Kalsubai / कलसुबाई"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 12,
        question: "The 'Sardar Sarovar Dam' is built on which river?",
        questionHindi: "'सरदार सरोवर बांध' किस नदी पर बना है?",
        options: [
            "Narmada / नर्मदा",
            "Tapti / ताप्ती",
            "Mahi / माही",
            "Chambal / चंबल"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 13,
        question: "Which layer of the atmosphere contains the Ozone Layer?",
        questionHindi: "वायुमंडल की किस परत में ओजोन परत होती है?",
        options: [
            "Stratosphere / समताप मंडल",
            "Troposphere / क्षोभमंडल",
            "Mesosphere / मध्यमंडल",
            "Ionosphere / आयनमंडल"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 14,
        question: "Black soil is most suitable for the cultivation of:",
        questionHindi: "काली मिट्टी किसकी खेती के लिए सबसे उपयुक्त है?",
        options: [
            "Cotton / कपास",
            "Wheat / गेहूं",
            "Rice / चावल",
            "Tea / चाय"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 15,
        question: "The line dividing India and China is known as:",
        questionHindi: "भारत और चीन को विभाजित करने वाली रेखा कहलाती है:",
        options: [
            "McMahon Line / मैकमोहन रेखा",
            "Radcliffe Line / रेडक्लिफ रेखा",
            "Durand Line / डूरंड रेखा",
            "49th Parallel / 49वीं समानांतर रेखा"
        ],
        correct: 0,
        subject: "Geography"
    },

    // --- POLITY ---
    {
        id: 16,
        question: "The 'Fundamental Rights' in the Indian Constitution are borrowed from:",
        questionHindi: "भारतीय संविधान में 'मौलिक अधिकार' कहाँ से लिए गए हैं?",
        options: [
            "USA / अमेरिका",
            "UK / ब्रिटेन",
            "Ireland / आयरलैंड",
            "Canada / कनाडा"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 17,
        question: "Which Article deals with the 'Abolition of Untouchability'?",
        questionHindi: "कौन सा अनुच्छेद 'अस्पृश्यता के उन्मूलन' से संबंधित है?",
        options: [
            "Article 17 / अनुच्छेद 17",
            "Article 18 / अनुच्छेद 18",
            "Article 23 / अनुच्छेद 23",
            "Article 24 / अनुच्छेद 24"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 18,
        question: "Who is the ex-officio Chairman of the Rajya Sabha?",
        questionHindi: "राज्यसभा का पदेन सभापति कौन होता है?",
        options: [
            "Vice President / उपराष्ट्रपति",
            "President / राष्ट्रपति",
            "Prime Minister / प्रधान मंत्री",
            "Speaker / अध्यक्ष"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 19,
        question: "The 'Panchayati Raj' system is based on the principle of:",
        questionHindi: "'पंचायती राज' व्यवस्था किस सिद्धांत पर आधारित है?",
        options: [
            "Decentralization / विकेंद्रीकरण",
            "Centralization / केंद्रीकरण",
            "Democratic Centralism / लोकतांत्रिक केंद्रीयवाद",
            "Rule of Law / कानून का शासन"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 20,
        question: "How many schedules are there in the Indian Constitution?",
        questionHindi: "भारतीय संविधान में कितनी अनुसूचियां हैं?",
        options: [
            "12",
            "10",
            "8",
            "14"
        ],
        correct: 0,
        subject: "Polity"
    },

    // --- GENERAL SCIENCE ---
    {
        id: 21,
        question: "What is the chemical name of Vitamin C?",
        questionHindi: "विटामिन सी का रासायनिक नाम क्या है?",
        options: [
            "Ascorbic Acid / एस्कॉर्बिक एसिड",
            "Citric Acid / साइट्रिक एसिड",
            "Acetic Acid / एसिटिक एसिड",
            "Lactic Acid / लैक्टिक एसिड"
        ],
        correct: 0,
        subject: "Science"
    },
    {
        id: 22,
        question: "Which device is used to measure current?",
        questionHindi: "विद्युत धारा मापने के लिए किस यंत्र का उपयोग किया जाता है?",
        options: [
            "Ammeter / एमीटर",
            "Voltmeter / वोल्टमीटर",
            "Galvanometer / गैल्वेनोमीटर",
            "Potentiometer / पोटेंशियोमीटर"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 23,
        question: "The gas used in fire extinguishers is:",
        questionHindi: "अग्निशामक यंत्रों में प्रयुक्त गैस है:",
        options: [
            "Carbon Dioxide / कार्बन डाइऑक्साइड",
            "Oxygen / ऑक्सीजन",
            "Nitrogen / नाइट्रोजन",
            "Hydrogen / हाइड्रोजन"
        ],
        correct: 0,
        subject: "Chemistry"
    },
    {
        id: 24,
        question: "Which of the following is the 'Universal Donor' blood group?",
        questionHindi: "निम्नलिखित में से कौन 'सर्वदाता' रक्त समूह है?",
        options: [
            "O-",
            "O+",
            "AB+",
            "AB-"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 25,
        question: "Blue color of the sky is due to:",
        questionHindi: "आकाश का नीला रंग किसके कारण होता है?",
        options: [
            "Scattering of light / प्रकाश का प्रकीर्णन",
            "Reflection of light / प्रकाश का परावर्तन",
            "Refraction of light / प्रकाश का अपवर्तन",
            "Dispersion of light / प्रकाश का विक्षेपण"
        ],
        correct: 0,
        subject: "Physics"
    },

    // --- BIHAR SPECIAL ---
    {
        id: 26,
        question: "Which district of Bihar has the highest literacy rate?",
        questionHindi: "बिहार के किस जिले में साक्षरता दर सबसे अधिक है?",
        options: [
            "Rohtas / रोहतास",
            "Patna / पटना",
            "Gaya / गया",
            "Munger / मुंगेर"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 27,
        question: "The 'Kosi Project' is a joint venture of:",
        questionHindi: "'कोसी परियोजना' किसका संयुक्त उद्यम है?",
        options: [
            "India and Nepal / भारत और नेपाल",
            "Bihar and UP / बिहार और यूपी",
            "Bihar and West Bengal / बिहार और पश्चिम बंगाल",
            "India and Bangladesh / भारत और बांग्लादेश"
        ],
        correct: 0,
        subject: "Bihar Geography"
    },
    {
        id: 28,
        question: "Who was the first Chief Minister of Bihar?",
        questionHindi: "बिहार के प्रथम मुख्यमंत्री कौन थे?",
        options: [
            "Sri Krishna Singh / श्री कृष्ण सिंह",
            "Anugrah Narayan Sinha / अनुग्रह नारायण सिन्हा",
            "Karpoori Thakur / कर्पूरी ठाकुर",
            "Binodanand Jha / विनोदानंद झा"
        ],
        correct: 0,
        subject: "Bihar History"
    },
    {
        id: 29,
        question: "Where was the first Buddhist Council held?",
        questionHindi: "प्रथम बौद्ध संगीति कहाँ आयोजित की गई थी?",
        options: [
            "Rajgriha / राजगृह",
            "Vaishali / वैशाली",
            "Pataliputra / पाटलिपुत्र",
            "Kashmir / कश्मीर"
        ],
        correct: 0,
        subject: "Ancient History"
    },
    {
        id: 30,
        question: "The 'Sonepur Mela' is inaugurated on which day?",
        questionHindi: "'सोनपुर मेला' का उद्घाटन किस दिन किया जाता है?",
        options: [
            "Kartik Purnima / कार्तिक पूर्णिमा",
            "Makar Sankranti / मकर संक्रांति",
            "Basant Panchami / बसंत पंचमी",
            "Ram Navami / राम नवमी"
        ],
        correct: 0,
        subject: "Bihar Culture"
    },

    // --- MATH & REASONING ---
    {
        id: 31,
        question: "A man buys a cycle for ₹1400 and sells it at a loss of 15%. What is the selling price?",
        questionHindi: "एक आदमी ₹1400 में एक साइकिल खरीदता है और उसे 15% की हानि पर बेचता है। विक्रय मूल्य क्या है?",
        options: [
            "₹1190",
            "₹1202",
            "₹1160",
            "₹1290"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 32,
        question: "The average of 5 consecutive odd numbers is 61. What is the difference between the highest and lowest numbers?",
        questionHindi: "5 लगातार विषम संख्याओं का औसत 61 है। सबसे बड़ी और सबसे छोटी संख्याओं के बीच का अंतर क्या है?",
        options: [
            "8",
            "10",
            "12",
            "4"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 33,
        question: "If A:B = 3:4 and B:C = 8:9, then A:C is:",
        questionHindi: "यदि A:B = 3:4 और B:C = 8:9, तो A:C है:",
        options: [
            "2:3",
            "3:2",
            "1:2",
            "1:3"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 34,
        question: "Find the odd one out:",
        questionHindi: "विषम चुनें:",
        options: [
            "Square / वर्ग",
            "Rectangle / आयत",
            "Circle / वृत्त",
            "Triangle / त्रिभुज"
        ],
        correct: 2,
        subject: "Reasoning"
    },
    {
        id: 35,
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

    // --- MISCELLANEOUS GK ---
    {
        id: 36,
        question: "Who is known as the 'Missile Man of India'?",
        questionHindi: "'भारत का मिसाइल मैन' किसे कहा जाता है?",
        options: [
            "A.P.J. Abdul Kalam / ए.पी.जे. अब्दुल कलाम",
            "Vikram Sarabhai / विक्रम साराभाई",
            "Homi J. Bhabha / होमी जे. भाभा",
            "Satish Dhawan / सतीश धवन"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 37,
        question: "The 'Nobel Prize' was instituted by which country?",
        questionHindi: "'नोबेल पुरस्कार' किस देश द्वारा स्थापित किया गया था?",
        options: [
            "Sweden / स्वीडन",
            "USA / अमेरिका",
            "UK / ब्रिटेन",
            "Germany / जर्मनी"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 38,
        question: "Which day is observed as 'International Women's Day'?",
        questionHindi: "'अंतर्राष्ट्रीय महिला दिवस' किस दिन मनाया जाता है?",
        options: [
            "8 March / 8 मार्च",
            "12 May / 12 मई",
            "5 June / 5 जून",
            "10 December / 10 दिसंबर"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 39,
        question: "The currency of Bangladesh is:",
        questionHindi: "बांग्लादेश की मुद्रा है:",
        options: [
            "Taka / टका",
            "Rupee / रुपया",
            "Yen / येन",
            "Dollar / डॉलर"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 40,
        question: "Where is the headquarters of WHO located?",
        questionHindi: "WHO (विश्व स्वास्थ्य संगठन) का मुख्यालय कहाँ स्थित है?",
        options: [
            "Geneva / जिनेवा",
            "New York / न्यूयॉर्क",
            "Paris / पेरिस",
            "London / लंदन"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 41,
        question: "Which Indian state is known as the 'Spice Garden of India'?",
        questionHindi: "किस भारतीय राज्य को 'भारत का मसालों का बगीचा' कहा जाता है?",
        options: [
            "Kerala / केरल",
            "Karnataka / कर्नाटक",
            "Assam / असम",
            "Tamil Nadu / तमिलनाडु"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 42,
        question: "The first battle of Panipat was fought in:",
        questionHindi: "पानीपत की पहली लड़ाई कब लड़ी गई थी?",
        options: [
            "1526",
            "1556",
            "1761",
            "1527"
        ],
        correct: 0,
        subject: "Medieval History"
    },
    {
        id: 43,
        question: "Who discovered the circulation of blood?",
        questionHindi: "रक्त परिसंचरण की खोज किसने की?",
        options: [
            "William Harvey / विलियम हार्वे",
            "Louis Pasteur / लुई पाश्चर",
            "Karl Landsteiner / कार्ल लैंडस्टीनर",
            "Edward Jenner / एडवर्ड जेनर"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 44,
        question: "Which gas is mainly responsible for Global Warming?",
        questionHindi: "ग्लोबल वार्मिंग के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
        options: [
            "Carbon Dioxide / कार्बन डाइऑक्साइड",
            "Oxygen / ऑक्सीजन",
            "Nitrogen / नाइट्रोजन",
            "Argon / आर्गन"
        ],
        correct: 0,
        subject: "Environment"
    },
    {
        id: 45,
        question: "The term 'Grand Slam' is associated with which sport?",
        questionHindi: "'ग्रैंड स्लैम' शब्द किस खेल से संबंधित है?",
        options: [
            "Tennis / टेनिस",
            "Cricket / क्रिकेट",
            "Football / फुटबॉल",
            "Hockey / हॉकी"
        ],
        correct: 0,
        subject: "Sports"
    },
    {
        id: 46,
        question: "Who is the author of 'Discovery of India'?",
        questionHindi: "'डिस्कवरी ऑफ इंडिया' के लेखक कौन हैं?",
        options: [
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "Mahatma Gandhi / महात्मा गांधी",
            "Sardar Patel / सरदार पटेल",
            "Indira Gandhi / इंदिरा गांधी"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 47,
        question: "The largest delta in the world is:",
        questionHindi: "विश्व का सबसे बड़ा डेल्टा है:",
        options: [
            "Sunderban Delta / सुंदरवन डेल्टा",
            "Nile Delta / नील डेल्टा",
            "Amazon Delta / अमेज़न डेल्टा",
            "Mississippi Delta / मिसिसिपी डेल्टा"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 48,
        question: "Who was the first Indian woman to go to space?",
        questionHindi: "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थी?",
        options: [
            "Kalpana Chawla / कल्पना चावला",
            "Sunita Williams / सुनीता विलियम्स",
            "Valentina Tereshkova / वेलेंटीना टेरेश्कोवा",
            "Sally Ride / सैली राइड"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 49,
        question: "Which instrument is used to measure atmospheric pressure?",
        questionHindi: "वायुमंडलीय दाब मापने के लिए किस यंत्र का उपयोग किया जाता है?",
        options: [
            "Barometer / बैरोमीटर",
            "Thermometer / थर्मामीटर",
            "Lactometer / लैक्टोमीटर",
            "Seismograph / सीस्मोग्राफ"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 50,
        question: "Which article abolishes 'Titles'?",
        questionHindi: "कौन सा अनुच्छेद 'उपाधियों' को समाप्त करता है?",
        options: [
            "Article 18 / अनुच्छेद 18",
            "Article 17 / अनुच्छेद 17",
            "Article 19 / अनुच्छेद 19",
            "Article 21 / अनुच्छेद 21"
        ],
        correct: 0,
        subject: "Polity"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}