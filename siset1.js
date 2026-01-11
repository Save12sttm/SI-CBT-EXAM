// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 1
// Subject: General Knowledge & General Awareness (Prelims Pattern)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong
// Bilingual: Hindi (Priority) / English

const siQuestions = [
    // --- BIHAR SPECIAL & HISTORY ---
    {
        id: 1,
        question: "Who led the Revolt of 1857 in Bihar?",
        questionHindi: "बिहार में 1857 के विद्रोह का नेतृत्व किसने किया?",
        options: [
            "Amar Singh / अमर सिंह",
            "Kunwar Singh / कुंवर सिंह", 
            "Pir Ali / पीर अली",
            "Maulvi Ahmadullah / मौलवी अहमदुल्लाह"
        ],
        correct: 1,
        subject: "Bihar History"
    },
    {
        id: 2,
        question: "Which of the following is the only Tiger Reserve in Bihar?",
        questionHindi: "निम्नलिखित में से कौन बिहार का एकमात्र टाइगर रिजर्व है?",
        options: [
            "Bhimbandh / भीमबंध",
            "Valmiki / वाल्मीकि",
            "Kaimur / कैमूर",
            "Gautam Buddha / गौतम बुद्ध"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 3,
        question: "The Second Buddhist Council was held at:",
        questionHindi: "द्वितीय बौद्ध संगीति का आयोजन कहाँ हुआ था?",
        options: [
            "Rajgriha / राजगृह",
            "Vaishali / वैशाली",
            "Pataliputra / पाटलिपुत्र",
            "Kashmir / कश्मीर"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 4,
        question: "Who founded the city of Pataliputra?",
        questionHindi: "पाटलिपुत्र शहर की स्थापना किसने की?",
        options: [
            "Ajatashatru / अजातशत्रु",
            "Udayin / उदयन",
            "Bimbisara / बिम्बिसार",
            "Ashoka / अशोक"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 5,
        question: "In which year was the 'Bihar Socialist Party' formed?",
        questionHindi: "'बिहार सोशलिस्ट पार्टी' का गठन किस वर्ष हुआ था?",
        options: [
            "1931",
            "1934",
            "1942",
            "1929"
        ],
        correct: 0,
        subject: "Bihar History"
    },
    
    // --- POLITY ---
    {
        id: 6,
        question: "Which Article of the Indian Constitution deals with the 'Uniform Civil Code'?",
        questionHindi: "भारतीय संविधान का कौन सा अनुच्छेद 'समान नागरिक संहिता' से संबंधित है?",
        options: [
            "Article 40 / अनुच्छेद 40",
            "Article 44 / अनुच्छेद 44",
            "Article 45 / अनुच्छेद 45",
            "Article 51 / अनुच्छेद 51"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 7,
        question: "The power to decide whether a bill is a Money Bill rests with:",
        questionHindi: "कोई विधेयक धन विधेयक है या नहीं, यह निर्णय लेने की शक्ति किसके पास है:",
        options: [
            "President / राष्ट्रपति",
            "Prime Minister / प्रधान मंत्री",
            "Speaker of Lok Sabha / लोकसभा अध्यक्ष",
            "Finance Minister / वित्त मंत्री"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 8,
        question: "Anti-Defection Law is contained in which Schedule?",
        questionHindi: "दल-बदल विरोधी कानून किस अनुसूची में निहित है?",
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
        id: 9,
        question: "The minimum age required to become the Governor of a state is:",
        questionHindi: "राज्य का राज्यपाल बनने के लिए न्यूनतम आयु क्या है:",
        options: [
            "25 years / 25 वर्ष",
            "30 years / 30 वर्ष",
            "35 years / 35 वर्ष",
            "40 years / 40 वर्ष"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 10,
        question: "Fundamental Duties were added on the recommendation of which committee?",
        questionHindi: "मौलिक कर्तव्यों को किस समिति की सिफारिश पर जोड़ा गया था?",
        options: [
            "Verma Committee / वर्मा समिति",
            "Sarkaria Commission / सरकारिया आयोग",
            "Swaran Singh Committee / स्वर्ण सिंह समिति",
            "Balwant Rai Mehta Committee / बलवंत राय मेहता समिति"
        ],
        correct: 2,
        subject: "Polity"
    },

    // --- GEOGRAPHY ---
    {
        id: 11,
        question: "Which river is known as 'Sorrow of Bihar'?",
        questionHindi: "किस नदी को 'बिहार का शोक' कहा जाता है?",
        options: [
            "Ganga / गंगा",
            "Kosi / कोसी",
            "Gandak / गंडक",
            "Son / सोन"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 12,
        question: "Where is the headquarters of the 'East Central Railway' located?",
        questionHindi: "'पूर्व मध्य रेलवे' का मुख्यालय कहाँ स्थित है?",
        options: [
            "Patna / पटना",
            "Hajipur / हाजीपुर",
            "Muzaffarpur / मुजफ्फरपुर",
            "Kolkata / कोलकाता"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 13,
        question: "The longest river in Peninsular India is:",
        questionHindi: "प्रायद्वीपीय भारत की सबसे लंबी नदी है:",
        options: [
            "Narmada / नर्मदा",
            "Godavari / गोदावरी",
            "Krishna / कृष्णा",
            "Kaveri / कावेरी"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 14,
        question: "Which soil is also known as 'Regur Soil'?",
        questionHindi: "किस मिट्टी को 'रेगुर मिट्टी' के नाम से भी जाना जाता है?",
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
        id: 15,
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

    // --- SCIENCE ---
    {
        id: 16,
        question: "What is the SI unit of Force?",
        questionHindi: "बल का SI मात्रक क्या है?",
        options: [
            "Joule / जूल",
            "Pascal / पास्कल",
            "Newton / न्यूटन",
            "Watt / वाट"
        ],
        correct: 2,
        subject: "Science"
    },
    {
        id: 17,
        question: "Which vitamin is water-soluble?",
        questionHindi: "कौन सा विटामिन पानी में घुलनशील है?",
        options: [
            "Vitamin A / विटामिन ए",
            "Vitamin D / विटामिन डी",
            "Vitamin C / विटामिन सी",
            "Vitamin K / विटामिन के"
        ],
        correct: 2,
        subject: "Science"
    },
    {
        id: 18,
        question: "The gas used for ripening of green fruits artificially is:",
        questionHindi: "हरे फलों को कृत्रिम रूप से पकाने के लिए प्रयुक्त गैस है:",
        options: [
            "Ethylene / एथिलीन",
            "Acetylene / एसिटिलीन",
            "Ethane / इथेन",
            "Methane / मीथेन"
        ],
        correct: 1,
        subject: "Science"
    },
    {
        id: 19,
        question: "Which metal is liquid at room temperature?",
        questionHindi: "कमरे के तापमान पर कौन सी धातु तरल होती है?",
        options: [
            "Sodium / सोडियम",
            "Mercury / पारा (मरकरी)",
            "Bromine / ब्रोमीन",
            "Potassium / पोटैशियम"
        ],
        correct: 1,
        subject: "Science"
    },
    {
        id: 20,
        question: "The powerhouse of the cell is called:",
        questionHindi: "कोशिका का 'शक्ति गृह' (Powerhouse) किसे कहा जाता है?",
        options: [
            "Nucleus / केंद्रक",
            "Mitochondria / माइटोकॉन्ड्रिया",
            "Ribosome / राइबोसोम",
            "Lysosome / लाइसोसोम"
        ],
        correct: 1,
        subject: "Science"
    },
    
    // --- GENERAL KNOWLEDGE & HISTORY ---
    {
        id: 21,
        question: "Who wrote the book 'Arthashastra'?",
        questionHindi: "'अर्थशास्त्र' पुस्तक किसने लिखी?",
        options: [
            "Megasthenes / मेगस्थनीज",
            "Chanakya (Kautilya) / चाणक्य (कौटिल्य)",
            "Kalidasa / कालिदास",
            "Harshavardhana / हर्षवर्धन"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 22,
        question: "Satyameva Jayate is taken from which Upanishad?",
        questionHindi: "सत्यमेव जयते किस उपनिषद से लिया गया है?",
        options: [
            "Katha Upanishad / कठोपनिषद",
            "Mundaka Upanishad / मुंडकोपनिषद",
            "Chandogya Upanishad / छांदोग्य उपनिषद",
            "Mandukya Upanishad / मांडूक्य उपनिषद"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 23,
        question: "Who was the first Governor-General of Independent India?",
        questionHindi: "स्वतंत्र भारत के प्रथम गवर्नर जनरल कौन थे?",
        options: [
            "C. Rajagopalachari / सी. राजगोपालाचारी",
            "Lord Mountbatten / लॉर्ड माउंटबेटन",
            "Rajendra Prasad / राजेंद्र प्रसाद",
            "Jawaharlal Nehru / जवाहरलाल नेहरू"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 24,
        question: "The term 'Grand Slam' is associated with which sport?",
        questionHindi: "'ग्रैंड स्लैम' शब्द किस खेल से संबंधित है?",
        options: [
            "Cricket / क्रिकेट",
            "Football / फुटबॉल",
            "Lawn Tennis / लॉन टेनिस",
            "Badminton / बैडमिंटन"
        ],
        correct: 2,
        subject: "Sports"
    },
    {
        id: 25,
        question: "Which country is known as the 'Land of the Rising Sun'?",
        questionHindi: "किस देश को 'उगते सूरज की भूमि' के रूप में जाना जाता है?",
        options: [
            "Norway / नॉर्वे",
            "Japan / जापान",
            "New Zealand / न्यूजीलैंड",
            "China / चीन"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 26,
        question: "Operation Flood is related to:",
        questionHindi: "ऑपरेशन फ्लड का संबंध किससे है:",
        options: [
            "Flood Control / बाढ़ नियंत्रण",
            "Milk Production / दुग्ध उत्पादन",
            "Fish Production / मछली उत्पादन",
            "Oil Production / तिलहन उत्पादन"
        ],
        correct: 1,
        subject: "Economy"
    },
    {
        id: 27,
        question: "The largest gland in the human body is:",
        questionHindi: "मानव शरीर की सबसे बड़ी ग्रंथि है:",
        options: [
            "Thyroid / थायराइड",
            "Liver / यकृत (लीवर)",
            "Pancreas / अग्न्याशय",
            "Adrenal / अधिवृक्क"
        ],
        correct: 1,
        subject: "Science"
    },
    {
        id: 28,
        question: "Deficiency of Iodine causes:",
        questionHindi: "आयोडीन की कमी से होता है:",
        options: [
            "Scurvy / स्कर्वी",
            "Rickets / रिकेट्स",
            "Goitre / घेंघा (Goitre)",
            "Anemia / रक्ताल्पता"
        ],
        correct: 2,
        subject: "Science"
    },
    {
        id: 29,
        question: "Who gave the slogan 'Do or Die'?",
        questionHindi: "'करो या मरो' का नारा किसने दिया?",
        options: [
            "Subhash Chandra Bose / सुभाष चंद्र बोस",
            "Mahatma Gandhi / महात्मा गांधी",
            "Bhagat Singh / भगत सिंह",
            "Lala Lajpat Rai / लाला लाजपत राय"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 30,
        question: "The boundary line between India and China is called:",
        questionHindi: "भारत और चीन के बीच की सीमा रेखा कहलाती है:",
        options: [
            "Radcliffe Line / रेडक्लिफ रेखा",
            "Durand Line / डूरंड रेखा",
            "McMahon Line / मैकमोहन रेखा",
            "Palk Strait / पाक जलडमरूमध्य"
        ],
        correct: 2,
        subject: "Geography"
    },

    // --- MORE HISTORY & MISC ---
    {
        id: 31,
        question: "In which year did the Jallianwala Bagh massacre take place?",
        questionHindi: "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
        options: ["1917", "1918", "1919", "1920"],
        correct: 2,
        subject: "History"
    },
    {
        id: 32,
        question: "Who founded the 'Arya Samaj'?",
        questionHindi: "'आर्य समाज' की स्थापना किसने की?",
        options: [
            "Raja Ram Mohan Roy / राजा राम मोहन राय",
            "Swami Dayanand Saraswati / स्वामी दयानंद सरस्वती",
            "Swami Vivekananda / स्वामी विवेकानंद",
            "Ishwar Chandra Vidyasagar / ईश्वर चंद्र विद्यासागर"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 33,
        question: "Which tax is levied by the State Government?",
        questionHindi: "कौन सा कर राज्य सरकार द्वारा लगाया जाता है?",
        options: [
            "Income Tax / आयकर",
            "Corporate Tax / कॉर्पोरेट कर",
            "Land Revenue / भू-राजस्व",
            "Customs Duty / सीमा शुल्क"
        ],
        correct: 2,
        subject: "Economy"
    },
    {
        id: 34,
        question: "Sound waves cannot travel through:",
        questionHindi: "ध्वनि तरंगें किसके माध्यम से यात्रा नहीं कर सकती हैं:",
        options: [
            "Solids / ठोस",
            "Liquids / तरल",
            "Gases / गैस",
            "Vacuum / निर्वात"
        ],
        correct: 3,
        subject: "Science"
    },
    {
        id: 35,
        question: "The pH value of pure water is:",
        questionHindi: "शुद्ध जल का pH मान है:",
        options: ["5", "6", "7", "8"],
        correct: 2,
        subject: "Science"
    },
    {
        id: 36,
        question: "The first session of the Indian National Congress was held at:",
        questionHindi: "भारतीय राष्ट्रीय कांग्रेस का प्रथम अधिवेशन कहाँ हुआ था?",
        options: [
            "Calcutta / कलकत्ता",
            "Bombay / बॉम्बे",
            "Madras / मद्रास",
            "Pune / पुणे"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 37,
        question: "Who was the founder of the Gupta Empire?",
        questionHindi: "गुप्त साम्राज्य का संस्थापक कौन था?",
        options: [
            "Chandragupta I / चंद्रगुप्त प्रथम",
            "Sri Gupta / श्री गुप्त",
            "Samudragupta / समुद्रगुप्त",
            "Ghatotkacha / घटोत्कच"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 38,
        question: "Bigha is a unit of measurement of:",
        questionHindi: "बीघा मापने की एक इकाई है:",
        options: [
            "Land / भूमि",
            "Water / पानी",
            "Cloth / कपड़ा",
            "Distance / दूरी"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 39,
        question: "Which article abolishes 'Untouchability'?",
        questionHindi: "कौन सा अनुच्छेद 'अस्पृश्यता' को समाप्त करता है?",
        options: [
            "Article 16 / अनुच्छेद 16",
            "Article 17 / अनुच्छेद 17",
            "Article 18 / अनुच्छेद 18",
            "Article 23 / अनुच्छेद 23"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 40,
        question: "Who appoints the Chief Minister of a State?",
        questionHindi: "राज्य के मुख्यमंत्री की नियुक्ति कौन करता है?",
        options: [
            "President / राष्ट्रपति",
            "Prime Minister / प्रधान मंत्री",
            "Governor / राज्यपाल",
            "Chief Justice of High Court / उच्च न्यायालय के मुख्य न्यायाधीश"
        ],
        correct: 2,
        subject: "Polity"
    },

    // --- REASONING & MATH (Basic for SI) ---
    {
        id: 41,
        question: "Find the missing number: 2, 5, 10, 17, ?, 37",
        questionHindi: "लुप्त संख्या ज्ञात कीजिए: 2, 5, 10, 17, ?, 37",
        options: ["24", "26", "25", "27"],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 42,
        question: "If A is brother of B, B is sister of C, and C is father of D, how is D related to A?",
        questionHindi: "यदि A, B का भाई है, B, C की बहन है, और C, D का पिता है, तो D, A से कैसे संबंधित है?",
        options: [
            "Brother / भाई",
            "Nephew/Niece / भतीजा/भतीजी",
            "Uncle / चाचा/मामा",
            "Cousin / चचेरा भाई"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 43,
        question: "Complete the series: AZ, CX, EV, GT, ?",
        questionHindi: "श्रृंखला को पूरा करें: AZ, CX, EV, GT, ?",
        options: ["IR", "HS", "JQ", "KP"],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 44,
        question: "In a code language, 'CAT' is written as '3120'. How is 'DOG' written?",
        questionHindi: "एक कूट भाषा में, 'CAT' को '3120' लिखा जाता है। 'DOG' को कैसे लिखा जाएगा?",
        options: ["4157", "4150", "3157", "4152"],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 45,
        question: "A man walks 5 km towards North, then turns right and walks 3 km. Which direction is he now?",
        questionHindi: "एक आदमी 5 किमी उत्तर की ओर चलता है, फिर दाएं मुड़ता है और 3 किमी चलता है। वह अब किस दिशा में है?",
        options: [
            "North / उत्तर",
            "East / पूर्व",
            "West / पश्चिम",
            "South / दक्षिण"
        ],
        correct: 1,
        subject: "Reasoning"
    },

    // --- MISCELLANEOUS GK ---
    {
        id: 46,
        question: "National Science Day is celebrated on:",
        questionHindi: "राष्ट्रीय विज्ञान दिवस कब मनाया जाता है:",
        options: [
            "January 28 / 28 जनवरी",
            "February 28 / 28 फरवरी",
            "March 28 / 28 मार्च",
            "April 28 / 28 अप्रैल"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 47,
        question: "The currency of Bangladesh is:",
        questionHindi: "बांग्लादेश की मुद्रा है:",
        options: [
            "Rupee / रुपया",
            "Taka / टका",
            "Yen / येन",
            "Dollar / डॉलर"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 48,
        question: "Who is known as the 'Iron Man of India'?",
        questionHindi: "'भारत का लौह पुरुष' किसे कहा जाता है?",
        options: [
            "B.R. Ambedkar / बी.आर. अम्बेडकर",
            "Sardar Vallabhbhai Patel / सरदार वल्लभभाई पटेल",
            "Subhash Chandra Bose / सुभाष चंद्र बोस",
            "Lal Bahadur Shastri / लाल बहादुर शास्त्री"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 49,
        question: "Which of the following is NOT a greenhouse gas?",
        questionHindi: "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
        options: [
            "Methane / मीथेन",
            "Nitrogen / नाइट्रोजन",
            "Carbon Dioxide / कार्बन डाइऑक्साइड",
            "Chlorofluorocarbons / क्लोरोफ्लोरोकार्बन"
        ],
        correct: 1,
        subject: "Environment"
    },
    {
        id: 50,
        question: "The first battle of Panipat was fought in:",
        questionHindi: "पानीपत की पहली लड़ाई कब लड़ी गई थी:",
        options: ["1526", "1556", "1761", "1576"],
        correct: 0,
        subject: "History"
    }
];

window.siQuestions = siQuestions;