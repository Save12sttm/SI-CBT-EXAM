// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 5
// Focus: Mixed High-Yield Mock (History, Science, Current Affairs, Bihar Special)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- HISTORY & BIHAR SPECIAL ---
    {
        id: 1,
        question: "Who was the editor of the newspaper 'Som Prakash'?",
        questionHindi: "समाचार पत्र 'सोम प्रकाश' के संपादक कौन थे?",
        options: [
            "Ishwar Chandra Vidyasagar / ईश्वर चंद्र विद्यासागर",
            "Raja Ram Mohan Roy / राजा राम मोहन राय",
            "Dayanand Saraswati / दयानंद सरस्वती",
            "Surendranath Banerjee / सुरेंद्रनाथ बनर्जी"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 2,
        question: "In which session of Congress was the demand for 'Purna Swaraj' made?",
        questionHindi: "कांग्रेस के किस अधिवेशन में 'पूर्ण स्वराज' की मांग की गई थी?",
        options: [
            "Lahore Session (1929) / लाहौर अधिवेशन (1929)",
            "Calcutta Session (1928) / कलकत्ता अधिवेशन (1928)",
            "Karachi Session (1931) / कराची अधिवेशन (1931)",
            "Lucknow Session (1916) / लखनऊ अधिवेशन (1916)"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 3,
        question: "Kunwar Singh, a leader of the 1857 revolt, belonged to which place in Bihar?",
        questionHindi: "1857 के विद्रोह के नेता कुंवर सिंह बिहार के किस स्थान से संबंधित थे?",
        options: [
            "Jagdishpur / जगदीशपुर",
            "Patna / पटना",
            "Ara / आरा",
            "Gaya / गया"
        ],
        correct: 0,
        subject: "Bihar History"
    },
    {
        id: 4,
        question: "The 'Haryanka Dynasty' was founded by:",
        questionHindi: "'हर्यक वंश' की स्थापना किसने की थी?",
        options: [
            "Bimbisara / बिम्बिसार",
            "Ajatashatru / अजातशत्रु",
            "Udayin / उदयन",
            "Shishunaga / शिशुनाग"
        ],
        correct: 0,
        subject: "Ancient History"
    },
    {
        id: 5,
        question: "Which inscription gives information about the victory of Samudragupta?",
        questionHindi: "कौन सा अभिलेख समुद्रगुप्त की विजय के बारे में जानकारी देता है?",
        options: [
            "Prayag Prasasti / प्रयाग प्रशस्ति",
            "Junagadh Inscription / जूनागढ़ अभिलेख",
            "Aihole Inscription / ऐहोल अभिलेख",
            "Mehrauli Pillar / मेहरौली स्तंभ"
        ],
        correct: 0,
        subject: "Ancient History"
    },

    // --- POLITY ---
    {
        id: 6,
        question: "The concept of 'Public Interest Litigation' (PIL) originated in:",
        questionHindi: "'जनहित याचिका' (PIL) की अवधारणा कहाँ उत्पन्न हुई?",
        options: [
            "USA / अमेरिका",
            "UK / ब्रिटेन",
            "Australia / ऑस्ट्रेलिया",
            "India / भारत"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 7,
        question: "Which Article ensures 'Protection against arrest and detention in certain cases'?",
        questionHindi: "कौन सा अनुच्छेद 'कुछ मामलों में गिरफ्तारी और हिरासत के खिलाफ संरक्षण' सुनिश्चित करता है?",
        options: [
            "Article 22 / अनुच्छेद 22",
            "Article 20 / अनुच्छेद 20",
            "Article 21 / अनुच्छेद 21",
            "Article 24 / अनुच्छेद 24"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 8,
        question: "Who can remove the Vice-President from his office?",
        questionHindi: "उपराष्ट्रपति को उनके पद से कौन हटा सकता है?",
        options: [
            "Parliament / संसद",
            "President / राष्ट्रपति",
            "Supreme Court / सर्वोच्च न्यायालय",
            "Rajya Sabha only / केवल राज्यसभा"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 9,
        question: "The 'Sarkaria Commission' was appointed to review:",
        questionHindi: "'सरकारिया आयोग' की नियुक्ति किसकी समीक्षा के लिए की गई थी?",
        options: [
            "Centre-State Relations / केंद्र-राज्य संबंध",
            "Electoral Reforms / चुनाव सुधार",
            "Judicial Reforms / न्यायिक सुधार",
            "Banking Reforms / बैंकिंग सुधार"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 10,
        question: "Under which article is the 'Annual Financial Statement' (Budget) presented?",
        questionHindi: "'वार्षिक वित्तीय विवरण' (बजट) किस अनुच्छेद के तहत प्रस्तुत किया जाता है?",
        options: [
            "Article 112 / अनुच्छेद 112",
            "Article 110 / अनुच्छेद 110",
            "Article 280 / अनुच्छेद 280",
            "Article 360 / अनुच्छेद 360"
        ],
        correct: 0,
        subject: "Polity"
    },

    // --- GEOGRAPHY & ENVIRONMENT ---
    {
        id: 11,
        question: "Which is the highest peak of the Nilgiri Hills?",
        questionHindi: "नीलगिरी पहाड़ियों की सबसे ऊंची चोटी कौन सी है?",
        options: [
            "Doddabetta / डोड्डाबेट्टा",
            "Anaimudi / अनाईमुडी",
            "Mahendragiri / महेंद्रगिरी",
            "Guru Shikhar / गुरु शिखर"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 12,
        question: "Which state in India is the largest producer of Bauxite?",
        questionHindi: "भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        options: [
            "Odisha / ओडिशा",
            "Jharkhand / झारखंड",
            "Gujarat / गुजरात",
            "Maharashtra / महाराष्ट्र"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 13,
        question: "The 'Kyoto Protocol' is related to:",
        questionHindi: "'क्योटो प्रोटोकॉल' किससे संबंधित है?",
        options: [
            "Greenhouse Gases / ग्रीनहाउस गैसें",
            "Ozone Depletion / ओजोन क्षरण",
            "Biodiversity / जैव विविधता",
            "Wetlands / आर्द्रभूमि"
        ],
        correct: 0,
        subject: "Environment"
    },
    {
        id: 14,
        question: "Which river is known as the 'Lifeline of Kerala'?",
        questionHindi: "किस नदी को 'केरल की जीवन रेखा' कहा जाता है?",
        options: [
            "Periyar / पेरियार",
            "Pamba / पम्बा",
            "Bharathapuzha / भरतपुझा",
            "Kaveri / कावेरी"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 15,
        question: "Where is the 'Great Barrier Reef' located?",
        questionHindi: "'ग्रेट बैरियर रीफ' कहाँ स्थित है?",
        options: [
            "Australia / ऑस्ट्रेलिया",
            "India / भारत",
            "USA / अमेरिका",
            "Brazil / ब्राजील"
        ],
        correct: 0,
        subject: "Geography"
    },

    // --- GENERAL SCIENCE ---
    {
        id: 16,
        question: "Which hormone is known as the 'Flight or Fight' hormone?",
        questionHindi: "किस हार्मोन को 'उड़ो या लड़ो' (Flight or Fight) हार्मोन के रूप में जाना जाता है?",
        options: [
            "Adrenaline / एड्रेनालाईन",
            "Insulin / इंसुलिन",
            "Thyroxine / थायरोक्सिन",
            "Estrogen / एस्ट्रोजन"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 17,
        question: "The filament of an electric bulb is made of:",
        questionHindi: "विद्युत बल्ब का फिलामेंट किसका बना होता है?",
        options: [
            "Tungsten / टंगस्टन",
            "Nichrome / नाइक्रोम",
            "Copper / तांबा",
            "Iron / लोहा"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 18,
        question: "Which gas is used in fire extinguishers?",
        questionHindi: "अग्निशामक यंत्रों में किस गैस का उपयोग किया जाता है?",
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
        id: 19,
        question: "Blue colour of the sky is due to:",
        questionHindi: "आकाश का नीला रंग किसके कारण होता है?",
        options: [
            "Scattering of Light / प्रकाश का प्रकीर्णन",
            "Reflection of Light / प्रकाश का परावर्तन",
            "Refraction of Light / प्रकाश का अपवर्तन",
            "Dispersion of Light / प्रकाश का विक्षेपण"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 20,
        question: "Which acid is found in Ant stings?",
        questionHindi: "चींटी के डंक में कौन सा अम्ल पाया जाता है?",
        options: [
            "Formic Acid / फार्मिक अम्ल",
            "Acetic Acid / एसिटिक अम्ल",
            "Citric Acid / साइट्रिक अम्ल",
            "Lactic Acid / लैक्टिक अम्ल"
        ],
        correct: 0,
        subject: "Chemistry"
    },

    // --- CURRENT AFFAIRS (2024-25) ---
    {
        id: 21,
        question: "Who won the 'Booker Prize 2024'?",
        questionHindi: "'बुकर पुरस्कार 2024' किसने जीता?",
        options: [
            "Samantha Harvey / सामंथा हार्वे",
            "Paul Lynch / पॉल लिंच",
            "Shehan Karunatilaka / शेहान करुणातिलक",
            "Geetanjali Shree / गीतांजलि श्री"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 22,
        question: "The 'Vibrant Villages Programme' was launched for the development of:",
        questionHindi: "'वाइब्रेंट विलेज प्रोग्राम' किसके विकास के लिए शुरू किया गया था?",
        options: [
            "Border Villages / सीमावर्ती गाँव",
            "Coastal Villages / तटीय गाँव",
            "Tribal Villages / आदिवासी गाँव",
            "Desert Villages / रेगिस्तानी गाँव"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 23,
        question: "Which country won the 'Thomas Cup 2024' (Badminton)?",
        questionHindi: "किस देश ने 'थॉमस कप 2024' (बैडमिंटन) जीता?",
        options: [
            "China / चीन",
            "Indonesia / इंडोनेशिया",
            "India / भारत",
            "Denmark / डेनमार्क"
        ],
        correct: 0,
        subject: "Sports"
    },
    {
        id: 24,
        question: "What is the theme of 'International Yoga Day 2024'?",
        questionHindi: "'अंतर्राष्ट्रीय योग दिवस 2024' का विषय क्या है?",
        options: [
            "Yoga for Self and Society / स्वयं और समाज के लिए योग",
            "Yoga for Vasudhaiva Kutumbakam / वसुधैव कुटुम्बकम के लिए योग",
            "Yoga for Humanity / मानवता के लिए योग",
            "Yoga for Wellness / कल्याण के लिए योग"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 25,
        question: "Who has been appointed as the new Chief of Army Staff (India)?",
        questionHindi: "भारतीय सेना के नए प्रमुख के रूप में किसे नियुक्त किया गया है?",
        options: [
            "General Upendra Dwivedi / जनरल उपेंद्र द्विवेदी",
            "General Manoj Pande / जनरल मनोज पांडे",
            "General M.M. Naravane / जनरल एम.एम. नरवणे",
            "General Anil Chauhan / जनरल अनिल चौहान"
        ],
        correct: 0,
        subject: "Defence"
    },

    // --- BIHAR SPECIAL & ECONOMY ---
    {
        id: 26,
        question: "What is the rank of Bihar in terms of population (2011 Census)?",
        questionHindi: "जनसंख्या (2011 की जनगणना) की दृष्टि से बिहार का स्थान क्या है?",
        options: [
            "3rd / तीसरा",
            "2nd / दूसरा",
            "4th / चौथा",
            "1st / पहला"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 27,
        question: "Which city in Bihar has the only Oil Refinery?",
        questionHindi: "बिहार के किस शहर में एकमात्र तेल रिफाइनरी है?",
        options: [
            "Barauni / बरौनी",
            "Patna / पटना",
            "Muzaffarpur / मुजफ्फरपुर",
            "Bhagalpur / भागलपुर"
        ],
        correct: 0,
        subject: "Bihar Economy"
    },
    {
        id: 28,
        question: "The 'Valmiki National Park' is located in which district of Bihar?",
        questionHindi: "'वाल्मीकि राष्ट्रीय उद्यान' बिहार के किस जिले में स्थित है?",
        options: [
            "West Champaran / पश्चिम चंपारण",
            "East Champaran / पूर्वी चंपारण",
            "Kaimur / कैमूर",
            "Rohtas / रोहतास"
        ],
        correct: 0,
        subject: "Bihar Geography"
    },
    {
        id: 29,
        question: "In India, GST is based on the model of which country?",
        questionHindi: "भारत में GST किस देश के मॉडल पर आधारित है?",
        options: [
            "Canada / कनाडा",
            "France / फ्रांस",
            "USA / अमेरिका",
            "UK / ब्रिटेन"
        ],
        correct: 0,
        subject: "Economy"
    },
    {
        id: 30,
        question: "Who calculates the 'National Income' in India?",
        questionHindi: "भारत में 'राष्ट्रीय आय' की गणना कौन करता है?",
        options: [
            "NSO (National Statistical Office) / NSO (राष्ट्रीय सांख्यिकी कार्यालय)",
            "RBI / आरबीआई",
            "Finance Ministry / वित्त मंत्रालय",
            "NITI Aayog / नीति आयोग"
        ],
        correct: 0,
        subject: "Economy"
    },

    // --- MATH & REASONING ---
    {
        id: 31,
        question: "The ratio of two numbers is 3:4 and their HCF is 4. Their LCM is:",
        questionHindi: "दो संख्याओं का अनुपात 3:4 है और उनका HCF 4 है। उनका LCM है:",
        options: [
            "48",
            "12",
            "24",
            "36"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 32,
        question: "A man buys a radio for ₹1200 and sells it for ₹1500. His profit percentage is:",
        questionHindi: "एक आदमी ₹1200 में एक रेडियो खरीदता है और इसे ₹1500 में बेचता है। उसका लाभ प्रतिशत है:",
        options: [
            "25%",
            "20%",
            "15%",
            "30%"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 33,
        question: "If A:B = 2:3 and B:C = 4:5, then A:B:C is:",
        questionHindi: "यदि A:B = 2:3 और B:C = 4:5, तो A:B:C है:",
        options: [
            "8:12:15",
            "2:3:5",
            "8:10:15",
            "4:6:9"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 34,
        question: "Find the odd one out:",
        questionHindi: "विषम चुनें:",
        options: [
            "Tomato / टमाटर",
            "Potato / आलू",
            "Carrot / गाजर",
            "Ginger / अदरक"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 35,
        question: "If 'P' means 'multiply', 'Q' means 'divide', 'R' means 'plus', 'S' means 'minus', then 12 P 4 R 16 Q 4 S 6 = ?",
        questionHindi: "यदि 'P' का अर्थ 'गुणा', 'Q' का अर्थ 'भाग', 'R' का अर्थ 'जोड़', 'S' का अर्थ 'घटाना' है, तो 12 P 4 R 16 Q 4 S 6 = ?",
        options: [
            "46",
            "50",
            "52",
            "48"
        ],
        correct: 0,
        subject: "Reasoning"
    },

    // --- MISCELLANEOUS ---
    {
        id: 36,
        question: "The 'Nobel Prize' is not awarded in which field?",
        questionHindi: "'नोबेल पुरस्कार' किस क्षेत्र में नहीं दिया जाता है?",
        options: [
            "Mathematics / गणित",
            "Physics / भौतिकी",
            "Peace / शांति",
            "Literature / साहित्य"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 37,
        question: "The classical dance 'Kathakali' belongs to which state?",
        questionHindi: "शास्त्रीय नृत्य 'कथकली' किस राज्य का है?",
        options: [
            "Kerala / केरल",
            "Tamil Nadu / तमिलनाडु",
            "Andhra Pradesh / आंध्र प्रदेश",
            "Karnataka / कर्नाटक"
        ],
        correct: 0,
        subject: "Culture"
    },
    {
        id: 38,
        question: "Which day is celebrated as 'National Voters Day' in India?",
        questionHindi: "भारत में 'राष्ट्रीय मतदाता दिवस' किस दिन मनाया जाता है?",
        options: [
            "25 January / 25 जनवरी",
            "26 January / 26 जनवरी",
            "24 January / 24 जनवरी",
            "30 January / 30 जनवरी"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 39,
        question: "The first Indian sound film (Talkie) was:",
        questionHindi: "पहली भारतीय बोलती फिल्म (टॉकी) थी:",
        options: [
            "Alam Ara / आलम आरा",
            "Raja Harishchandra / राजा हरिश्चंद्र",
            "Kisan Kanya / किसान कन्या",
            "Mother India / मदर इंडिया"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 40,
        question: "Who is known as the 'Missile Man of India'?",
        questionHindi: "'भारत का मिसाइल मैन' किसे कहा जाता है?",
        options: [
            "Dr. A.P.J. Abdul Kalam / डॉ. ए.पी.जे. अब्दुल कलाम",
            "Homi J. Bhabha / होमी जे. भाभा",
            "Vikram Sarabhai / विक्रम साराभाई",
            "C.V. Raman / सी.वी. रमन"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 41,
        question: "The largest planet in our Solar System is:",
        questionHindi: "हमारे सौरमंडल का सबसे बड़ा ग्रह है:",
        options: [
            "Jupiter / बृहस्पति",
            "Saturn / शनि",
            "Uranus / अरुण",
            "Earth / पृथ्वी"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 42,
        question: "In computer terminology, 'RAM' stands for:",
        questionHindi: "कंप्यूटर शब्दावली में, 'RAM' का अर्थ है:",
        options: [
            "Random Access Memory / रैंडम एक्सेस मेमोरी",
            "Read Only Memory / रीड ओनली मेमोरी",
            "Rapid Access Memory / रैपिड एक्सेस मेमोरी",
            "Rolling Access Memory / रोलिंग एक्सेस मेमोरी"
        ],
        correct: 0,
        subject: "Computer"
    },
    {
        id: 43,
        question: "The 'Palk Strait' lies between:",
        questionHindi: "'पाक जलडमरूमध्य' किसके बीच स्थित है?",
        options: [
            "India and Sri Lanka / भारत और श्रीलंका",
            "India and Maldives / भारत और मालदीव",
            "India and Indonesia / भारत और इंडोनेशिया",
            "Andaman and Nicobar / अंडमान और निकोबार"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 44,
        question: "Which gas is known as 'Greenhouse Gas'?",
        questionHindi: "किस गैस को 'ग्रीनहाउस गैस' के रूप में जाना जाता है?",
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
        question: "The 'Jnanpith Award' is related to which field?",
        questionHindi: "'ज्ञानपीठ पुरस्कार' किस क्षेत्र से संबंधित है?",
        options: [
            "Literature / साहित्य",
            "Music / संगीत",
            "Sports / खेल",
            "Science / विज्ञान"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 46,
        question: "Which part of the body is affected by 'Typhoid'?",
        questionHindi: "'टाइफाइड' से शरीर का कौन सा अंग प्रभावित होता है?",
        options: [
            "Intestine / आंत",
            "Lungs / फेफड़े",
            "Liver / यकृत",
            "Kidney / गुर्दा"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 47,
        question: "Who was the first woman President of India?",
        questionHindi: "भारत की पहली महिला राष्ट्रपति कौन थीं?",
        options: [
            "Pratibha Patil / प्रतिभा पाटिल",
            "Indira Gandhi / इंदिरा गांधी",
            "Draupadi Murmu / द्रौपदी मुर्मू",
            "Sarojini Naidu / सरोजिनी नायडू"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 48,
        question: "The currency of Japan is:",
        questionHindi: "जापान की मुद्रा है:",
        options: [
            "Yen / येन",
            "Yuan / युआन",
            "Won / वोन",
            "Dollar / डॉलर"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 49,
        question: "Which of the following is an Ore of Iron?",
        questionHindi: "निम्नलिखित में से कौन लोहे का अयस्क है?",
        options: [
            "Haematite / हेमेटाइट",
            "Bauxite / बॉक्साइट",
            "Cinnabar / सिनेबार",
            "Galena / गैलेना"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 50,
        question: "World Environment Day is celebrated on:",
        questionHindi: "विश्व पर्यावरण दिवस कब मनाया जाता है?",
        options: [
            "5 June / 5 जून",
            "22 April / 22 अप्रैल",
            "16 September / 16 सितंबर",
            "1 December / 1 दिसंबर"
        ],
        correct: 0,
        subject: "Environment"
    }
];

if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}