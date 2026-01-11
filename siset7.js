// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 7
// Focus: Mains Level Mock (Polity Depth, World Geography, Environment, Tricky Reasoning)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- POLITY (Conceptual) ---
    {
        id: 1,
        question: "Which fund is under the control of the President of India to meet unforeseen expenditures?",
        questionHindi: "अप्रत्याशित व्यय को पूरा करने के लिए कौन सी निधि भारत के राष्ट्रपति के नियंत्रण में है?",
        options: [
            "Consolidated Fund / संचित निधि",
            "Contingency Fund / आकस्मिकता निधि",
            "Public Account Fund / सार्वजनिक खाता निधि",
            "Prime Minister Relief Fund / प्रधानमंत्री राहत कोष"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 2,
        question: "The 'Preamble' of the Indian Constitution ensures how many types of Justice?",
        questionHindi: "भारतीय संविधान की 'प्रस्तावना' कितने प्रकार के न्याय को सुनिश्चित करती है?",
        options: [
            "Two (2) / दो",
            "Three (3) / तीन",
            "Four (4) / चार",
            "Five (5) / पांच"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 3,
        question: "Who among the following does NOT participate in the impeachment of the President?",
        questionHindi: "निम्नलिखित में से कौन राष्ट्रपति के महाभियोग में भाग नहीं लेता है?",
        options: [
            "Elected members of Lok Sabha / लोकसभा के निर्वाचित सदस्य",
            "Nominated members of Rajya Sabha / राज्यसभा के मनोनीत सदस्य",
            "Elected members of State Assemblies / राज्य विधानसभाओं के निर्वाचित सदस्य",
            "Elected members of Rajya Sabha / राज्यसभा के निर्वाचित सदस्य"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 4,
        question: "Which Writ is issued by the court to inquire into the legality of claim of a person to a public office?",
        questionHindi: "किसी सार्वजनिक पद पर किसी व्यक्ति के दावे की वैधता की जांच करने के लिए अदालत द्वारा कौन सा रिट (Writ) जारी किया जाता है?",
        options: [
            "Mandamus / परमादेश",
            "Certiorari / उत्प्रेषण",
            "Quo-Warranto / अधिकार पृच्छा",
            "Habeas Corpus / बंदी प्रत्यक्षीकरण"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 5,
        question: "The 'Committee on Public Accounts' consists of how many members from Rajya Sabha?",
        questionHindi: "'लोक लेखा समिति' में राज्यसभा के कितने सदस्य होते हैं?",
        options: [
            "15",
            "7",
            "22",
            "10"
        ],
        correct: 1,
        subject: "Polity"
    },

    // --- GEOGRAPHY (World & Physical) ---
    {
        id: 6,
        question: "Which atmospheric layer reflects radio waves back to the earth?",
        questionHindi: "वायुमंडल की कौन सी परत रेडियो तरंगों को वापस पृथ्वी पर परावर्तित करती है?",
        options: [
            "Troposphere / क्षोभमंडल",
            "Stratosphere / समताप मंडल",
            "Ionosphere / आयनमंडल",
            "Exosphere / बहिर्मंडल"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 7,
        question: "The 'Ring of Fire' is associated with which Ocean?",
        questionHindi: "'रिंग ऑफ फायर' किस महासागर से संबंधित है?",
        options: [
            "Pacific Ocean / प्रशांत महासागर",
            "Atlantic Ocean / अटलांटिक महासागर",
            "Indian Ocean / हिंद महासागर",
            "Arctic Ocean / आर्कटिक महासागर"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 8,
        question: "Which of the following is a Cold Ocean Current?",
        questionHindi: "निम्नलिखित में से कौन सी एक ठंडी महासागरीय धारा है?",
        options: [
            "Gulf Stream / गल्फ स्ट्रीम",
            "Kuroshio Current / क्यूरोशियो धारा",
            "Labrador Current / लैब्राडोर धारा",
            "Agulhas Current / अगुलहास धारा"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 9,
        question: "Nathula Pass connects India with which country?",
        questionHindi: "नाथुला दर्रा भारत को किस देश से जोड़ता है?",
        options: [
            "Pakistan / पाकिस्तान",
            "Myanmar / म्यांमार",
            "China (Tibet) / चीन (तिब्बत)",
            "Afghanistan / अफगानिस्तान"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 10,
        question: "Which river crosses the Equator twice?",
        questionHindi: "कौन सी नदी भूमध्य रेखा को दो बार पार करती है?",
        options: [
            "Amazon / अमेज़न",
            "Nile / नील",
            "Congo (Zaire) / कांगो (जायरे)",
            "Limpopo / लिम्पोपो"
        ],
        correct: 2,
        subject: "Geography"
    },

    // --- HISTORY (Medieval & Modern Depth) ---
    {
        id: 11,
        question: "Who introduced the 'Diwan-i-Kohi' (Department of Agriculture)?",
        questionHindi: "'दीवान-ए-कोही' (कृषि विभाग) की शुरुआत किसने की?",
        options: [
            "Alauddin Khilji / अलाउद्दीन खिलजी",
            "Muhammad Bin Tughlaq / मुहम्मद बिन तुगलक",
            "Firoz Shah Tughlaq / फिरोज शाह तुगलक",
            "Sikandar Lodi / सिकंदर लोदी"
        ],
        correct: 1,
        subject: "Medieval History"
    },
    {
        id: 12,
        question: "The 'Tebhaga Movement' (1946) was associated with which state?",
        questionHindi: "'तेभागा आंदोलन' (1946) किस राज्य से संबंधित था?",
        options: [
            "Bihar / बिहार",
            "Bengal / बंगाल",
            "Punjab / पंजाब",
            "Maharashtra / महाराष्ट्र"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 13,
        question: "Who was the President of the Indian National Congress at the time of Independence?",
        questionHindi: "स्वतंत्रता के समय भारतीय राष्ट्रीय कांग्रेस के अध्यक्ष कौन थे?",
        options: [
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "J.B. Kripalani / जे.बी. कृपलानी",
            "Abul Kalam Azad / अबुल कलाम आजाद",
            "Rajendra Prasad / राजेंद्र प्रसाद"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 14,
        question: "The 'Vernacular Press Act' was enacted by:",
        questionHindi: "'वर्नाक्यूलर प्रेस एक्ट' किसके द्वारा लागू किया गया था?",
        options: [
            "Lord Lytton / लॉर्ड लिटन",
            "Lord Ripon / लॉर्ड रिपन",
            "Lord Curzon / लॉर्ड कर्जन",
            "Lord Mayo / लॉर्ड मेयो"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 15,
        question: "Who was the first Muslim President of Indian National Congress?",
        questionHindi: "भारतीय राष्ट्रीय कांग्रेस के प्रथम मुस्लिम अध्यक्ष कौन थे?",
        options: [
            "Abul Kalam Azad / अबुल कलाम आजाद",
            "Rafi Ahmed Kidwai / रफी अहमद किदवई",
            "Badruddin Tyabji / बदरुद्दीन तैयबजी",
            "Hakim Ajmal Khan / हकीम अजमल खान"
        ],
        correct: 2,
        subject: "History"
    },

    // --- ENVIRONMENT & ECOLOGY ---
    {
        id: 16,
        question: "Which gas is mainly responsible for 'Acid Rain'?",
        questionHindi: "'अम्लीय वर्षा' के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
        options: [
            "CO2 and CO / CO2 और CO",
            "SO2 and NO2 / SO2 और NO2",
            "Ozone and Dust / ओजोन और धूल",
            "CFCs / सीएफसी"
        ],
        correct: 1,
        subject: "Environment"
    },
    {
        id: 17,
        question: "Red Data Book contains data of:",
        questionHindi: "रेड डेटा बुक में किसका डेटा होता है?",
        options: [
            "Dangerous Plants / खतरनाक पौधे",
            "Endangered Species / लुप्तप्राय प्रजातियां",
            "Extinct Animals only / केवल विलुप्त जानवर",
            "Fossil Fuels / जीवाश्म ईंधन"
        ],
        correct: 1,
        subject: "Environment"
    },
    {
        id: 18,
        question: "'Project Tiger' was launched in India in the year:",
        questionHindi: "भारत में 'प्रोजेक्ट टाइगर' किस वर्ष शुरू किया गया था?",
        options: [
            "1971",
            "1972",
            "1973",
            "1980"
        ],
        correct: 2,
        subject: "Environment"
    },
    {
        id: 19,
        question: "Eutrophication leads to:",
        questionHindi: "यूत्रोफिकेशन (सुपोषण) से क्या होता है?",
        options: [
            "Increase in Oxygen / ऑक्सीजन में वृद्धि",
            "Reduction in Dissolved Oxygen / घुलित ऑक्सीजन में कमी",
            "Increase in Fish population / मछली की आबादी में वृद्धि",
            "Clear Water / साफ पानी"
        ],
        correct: 1,
        subject: "Environment"
    },
    {
        id: 20,
        question: "Which of the following is an example of an Artificial Ecosystem?",
        questionHindi: "निम्नलिखित में से कौन कृत्रिम पारिस्थितिकी तंत्र का एक उदाहरण है?",
        options: [
            "Forest / वन",
            "Lake / झील",
            "Crop field / खेत (फसल क्षेत्र)",
            "Ocean / महासागर"
        ],
        correct: 2,
        subject: "Environment"
    },

    // --- SCIENCE (Physics/Chem/Bio) ---
    {
        id: 21,
        question: "Mirage is an optical illusion caused by:",
        questionHindi: "मृगमरीचिका (Mirage) एक ऑप्टिकल भ्रम है जो किसके कारण होता है?",
        options: [
            "Refraction / अपवर्तन",
            "Total Internal Reflection / पूर्ण आंतरिक परावर्तन",
            "Diffraction / विवर्तन",
            "Scattering / प्रकीर्णन"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 22,
        question: "Which of the following hormones is a 'Plant Hormone'?",
        questionHindi: "निम्नलिखित में से कौन सा हार्मोन 'पादप हार्मोन' है?",
        options: [
            "Insulin / इंसुलिन",
            "Thyroxine / थायरोक्सिन",
            "Cytokinin / साइटोकिनिन",
            "Estrogen / एस्ट्रोजन"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 23,
        question: "Fuse wire is made of an alloy of:",
        questionHindi: "फ्यूज तार किस मिश्र धातु से बना होता है?",
        options: [
            "Lead and Tin / सीसा और टिन",
            "Copper and Iron / तांबा और लोहा",
            "Copper and Aluminum / तांबा और एल्यूमीनियम",
            "Iron and Lead / लोहा और सीसा"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 24,
        question: "Which part of the brain regulates body temperature?",
        questionHindi: "मस्तिष्क का कौन सा भाग शरीर के तापमान को नियंत्रित करता है?",
        options: [
            "Cerebellum / सेरिबैलम",
            "Hypothalamus / हाइपोथैलेमस",
            "Medulla / मेडुला",
            "Cerebrum / सेरिब्रम"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 25,
        question: "The chemical name of 'Vitamin E' is:",
        questionHindi: "'विटामिन ई' का रासायनिक नाम है:",
        options: [
            "Calciferol / कैल्सिफेरॉल",
            "Retinol / रेटिनोल",
            "Tocopherol / टोकोफेरॉल",
            "Ascorbic Acid / एस्कॉर्बिक एसिड"
        ],
        correct: 2,
        subject: "Chemistry"
    },

    // --- BIHAR SPECIAL ---
    {
        id: 26,
        question: "Kakolat Waterfall is located in which district of Bihar?",
        questionHindi: "ककोलत जलप्रपात बिहार के किस जिले में स्थित है?",
        options: [
            "Gaya / गया",
            "Nawada / नवादा",
            "Rohtas / रोहतास",
            "Munger / मुंगेर"
        ],
        correct: 1,
        subject: "Bihar Geography"
    },
    {
        id: 27,
        question: "Which ruler of Bihar defeated Humayun?",
        questionHindi: "बिहार के किस शासक ने हुमायूँ को हराया था?",
        options: [
            "Sher Shah Suri / शेर शाह सूरी",
            "Babar / बाबर",
            "Ibrahim Lodi / इब्राहिम लोदी",
            "Bahadur Shah / बहादुर शाह"
        ],
        correct: 0,
        subject: "Bihar History"
    },
    {
        id: 28,
        question: "As per Census 2011, which district of Bihar has the lowest population density?",
        questionHindi: "जनगणना 2011 के अनुसार, बिहार के किस जिले में जनसंख्या घनत्व सबसे कम है?",
        options: [
            "Kaimur / कैमूर",
            "Jamui / जमुई",
            "Banka / बांका",
            "West Champaran / पश्चिम चंपारण"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 29,
        question: "Jayaprakash Narayan was known by which title?",
        questionHindi: "जयप्रकाश नारायण को किस उपाधि से जाना जाता था?",
        options: [
            "Lokmanya / लोकमान्य",
            "Loknayak / लोकनायक",
            "Deshbandhu / देशबंधु",
            "Jananayak / जननायक"
        ],
        correct: 1,
        subject: "Bihar History"
    },
    {
        id: 30,
        question: "Where was the first Republic of the world established in ancient times?",
        questionHindi: "प्राचीन काल में विश्व का प्रथम गणराज्य कहाँ स्थापित किया गया था?",
        options: [
            "Vaishali / वैशाली",
            "Athens / एथेंस",
            "Sparta / स्पार्टा",
            "Pataliputra / पाटलिपुत्र"
        ],
        correct: 0,
        subject: "Ancient History"
    },

    // --- CURRENT AFFAIRS & ECONOMY ---
    {
        id: 31,
        question: "Who developed the 'Mahalanobis Model' used in Five Year Plans?",
        questionHindi: "पंचवर्षीय योजनाओं में प्रयुक्त 'महालनोबिस मॉडल' किसने विकसित किया?",
        options: [
            "P.C. Mahalanobis / पी.सी. महालनोबिस",
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "Dadabhai Naoroji / दादाभाई नौरोजी",
            "Amartya Sen / अमर्त्य सेन"
        ],
        correct: 0,
        subject: "Economy"
    },
    {
        id: 32,
        question: "What is the rank of India in the 'World Happiness Report 2024'?",
        questionHindi: "'विश्व खुशहाली रिपोर्ट 2024' में भारत का स्थान क्या है?",
        options: [
            "126th / 126वां",
            "136th / 136वां",
            "120th / 120वां",
            "111th / 111वां"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 33,
        question: "Which country became the first to land a spacecraft on the South Pole of the Moon?",
        questionHindi: "चंद्रमा के दक्षिणी ध्रुव पर अंतरिक्ष यान उतारने वाला पहला देश कौन बना?",
        options: [
            "USA / अमेरिका",
            "Russia / रूस",
            "China / चीन",
            "India / भारत"
        ],
        correct: 3,
        subject: "Science & Tech"
    },
    {
        id: 34,
        question: "The 'Santhosh Trophy' is associated with which sport?",
        questionHindi: "'संतोष ट्रॉफी' किस खेल से संबंधित है?",
        options: [
            "Cricket / क्रिकेट",
            "Football / फुटबॉल",
            "Hockey / हॉकी",
            "Badminton / बैडमिंटन"
        ],
        correct: 1,
        subject: "Sports"
    },
    {
        id: 35,
        question: "Which day is observed as 'Earth Day'?",
        questionHindi: "'पृथ्वी दिवस' किस दिन मनाया जाता है?",
        options: [
            "22 April / 22 अप्रैल",
            "5 June / 5 जून",
            "22 March / 22 मार्च",
            "16 September / 16 सितंबर"
        ],
        correct: 0,
        subject: "GK"
    },

    // --- REASONING (Tricky) ---
    {
        id: 36,
        question: "Find the missing number: 6, 11, 21, 36, 56, ?",
        questionHindi: "लुप्त संख्या ज्ञात कीजिए: 6, 11, 21, 36, 56, ?",
        options: [
            "81",
            "76",
            "86",
            "91"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 37,
        question: "In a row of boys, if A is 10th from the left and B is 9th from the right and they interchange their positions, A becomes 15th from the left. How many boys are there?",
        questionHindi: "लड़कों की एक पंक्ति में, यदि A बाएं से 10वें और B दाएं से 9वें स्थान पर है और वे अपना स्थान आपस में बदल लेते हैं, तो A बाएं से 15वें स्थान पर आ जाता है। पंक्ति में कितने लड़के हैं?",
        options: [
            "23",
            "24",
            "27",
            "28"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 38,
        question: "Statements: All cars are cats. All fans are cats. \nConclusion: \nI. All cars are fans. \nII. Some fans are cars.",
        questionHindi: "कथन: सभी कार बिल्लियाँ हैं। सभी पंखे बिल्लियाँ हैं। \nनिष्कर्ष: \nI. सभी कार पंखे हैं। \nII. कुछ पंखे कार हैं।",
        options: [
            "Only I follows / केवल I अनुसरण करता है",
            "Only II follows / केवल II अनुसरण करता है",
            "Both I and II follow / I और II दोनों अनुसरण करते हैं",
            "Neither I nor II follows / न तो I और न ही II अनुसरण करता है"
        ],
        correct: 3,
        subject: "Reasoning"
    },
    {
        id: 39,
        question: "If 'LIGHT' is coded as 'MJHIU', how is 'SOUND' coded?",
        questionHindi: "यदि 'LIGHT' को 'MJHIU' के रूप में कोडित किया जाता है, तो 'SOUND' को कैसे कोडित किया जाएगा?",
        options: [
            "TQVME",
            "TPVME",
            "TPVNE",
            "TQVNE"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 40,
        question: "Clock is related to Time as Thermometer is related to:",
        questionHindi: "घड़ी का संबंध समय से उसी प्रकार है जैसे थर्मामीटर का संबंध किससे है:",
        options: [
            "Heat / गर्मी",
            "Radiation / विकिरण",
            "Energy / ऊर्जा",
            "Temperature / तापमान"
        ],
        correct: 3,
        subject: "Reasoning"
    },

    // --- MISCELLANEOUS ---
    {
        id: 41,
        question: "Who is called the 'Shakespeare of India'?",
        questionHindi: "'भारत का शेक्सपियर' किसे कहा जाता है?",
        options: [
            "Kalidasa / कालिदास",
            "Tulsidas / तुलसीदास",
            "Rabindranath Tagore / रवींद्रनाथ टैगोर",
            "Premchand / प्रेमचंद"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 42,
        question: "The Headquarters of the International Court of Justice is at:",
        questionHindi: "अंतर्राष्ट्रीय न्यायालय का मुख्यालय कहाँ है?",
        options: [
            "Geneva / जिनेवा",
            "New York / न्यूयॉर्क",
            "The Hague / द हेग",
            "Paris / पेरिस"
        ],
        correct: 2,
        subject: "GK"
    },
    {
        id: 43,
        question: "Which chemical is used to ripen mangoes artificially?",
        questionHindi: "आम को कृत्रिम रूप से पकाने के लिए किस रसायन का उपयोग किया जाता है?",
        options: [
            "Calcium Carbide / कैल्शियम कार्बाइड",
            "Sodium Benzoate / सोडियम बेंजोएट",
            "Sulphur Dioxide / सल्फर डाइऑक्साइड",
            "Potassium Permanganate / पोटेशियम परमैंगनेट"
        ],
        correct: 0,
        subject: "Chemistry"
    },
    {
        id: 44,
        question: "The 'Madhubani Painting' style is native to which state?",
        questionHindi: "'मधुबनी पेंटिंग' शैली किस राज्य की मूल है?",
        options: [
            "Odisha / ओडिशा",
            "Bihar / बिहार",
            "West Bengal / पश्चिम बंगाल",
            "Rajasthan / राजस्थान"
        ],
        correct: 1,
        subject: "Culture"
    },
    {
        id: 45,
        question: "Who gave the slogan 'Jai Jawan Jai Kisan'?",
        questionHindi: "'जय जवान जय किसान' का नारा किसने दिया?",
        options: [
            "Atal Bihari Vajpayee / अटल बिहारी वाजपेयी",
            "Lal Bahadur Shastri / लाल बहादुर शास्त्री",
            "Chaudhary Charan Singh / चौधरी चरण सिंह",
            "Jawaharlal Nehru / जवाहरलाल नेहरू"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 46,
        question: "Which gas leaks caused the Bhopal Gas Tragedy?",
        questionHindi: "भोपाल गैस त्रासदी का कारण कौन सी गैस थी?",
        options: [
            "Methyl Isocyanate / मिथाइल आइसोसाइनेट",
            "Carbon Monoxide / कार्बन मोनोऑक्साइड",
            "Nitrogen Oxide / नाइट्रोजन ऑक्साइड",
            "Sulphur Dioxide / सल्फर डाइऑक्साइड"
        ],
        correct: 0,
        subject: "Environment"
    },
    {
        id: 47,
        question: "In computer science, 1 Kilobyte (KB) is equal to:",
        questionHindi: "कंप्यूटर विज्ञान में, 1 किलोबाइट (KB) किसके बराबर है?",
        options: [
            "1000 bytes / 1000 बाइट्स",
            "1024 bytes / 1024 बाइट्स",
            "1024 bits / 1024 बिट्स",
            "1000 bits / 1000 बिट्स"
        ],
        correct: 1,
        subject: "Computer"
    },
    {
        id: 48,
        question: "Who was the first Indian to win an Individual Olympic Gold Medal?",
        questionHindi: "व्यक्तिगत ओलंपिक स्वर्ण पदक जीतने वाले पहले भारतीय कौन थे?",
        options: [
            "Neeraj Chopra / नीरज चोपड़ा",
            "Abhinav Bindra / अभिनव बिंद्रा",
            "P.V. Sindhu / पी.वी. सिंधु",
            "Sushil Kumar / सुशील कुमार"
        ],
        correct: 1,
        subject: "Sports"
    },
    {
        id: 49,
        question: "The 'Battle of Buxar' was fought in the year:",
        questionHindi: "'बक्सर का युद्ध' किस वर्ष लड़ा गया था?",
        options: [
            "1757",
            "1761",
            "1764",
            "1857"
        ],
        correct: 2,
        subject: "History"
    },
    {
        id: 50,
        question: "Which article abolishes 'Titles' (except military and academic)?",
        questionHindi: "कौन सा अनुच्छेद 'उपाधियों' (सैन्य और शैक्षणिक को छोड़कर) को समाप्त करता है?",
        options: [
            "Article 17 / अनुच्छेद 17",
            "Article 18 / अनुच्छेद 18",
            "Article 19 / अनुच्छेद 19",
            "Article 21 / अनुच्छेद 21"
        ],
        correct: 1,
        subject: "Polity"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}