// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 11
// Focus: Comprehensive Mock (History, Science, Bihar GK, Mental Ability)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- HISTORY (Indian National Movement & Ancient) ---
    {
        id: 1,
        question: "Who started the 'Bhoodan Movement'?",
        questionHindi: "'भूदान आंदोलन' किसने शुरू किया था?",
        options: [
            "Mahatma Gandhi / महात्मा गांधी",
            "Vinoba Bhave / विनोबा भावे",
            "Jayaprakash Narayan / जयप्रकाश नारायण",
            "Ram Manohar Lohia / राम मनोहर लोहिया"
        ],
        correct: 1,
        subject: "Modern History"
    },
    {
        id: 2,
        question: "The 'Azad Hind Fauj' was formed in which country?",
        questionHindi: "'आजाद हिंद फौज' का गठन किस देश में हुआ था?",
        options: [
            "India / भारत",
            "Singapore / सिंगापुर",
            "Japan / जापान",
            "Germany / जर्मनी"
        ],
        correct: 1,
        subject: "Modern History"
    },
    {
        id: 3,
        question: "Who was the founder of the 'Maurya Dynasty'?",
        questionHindi: "'मौर्य वंश' का संस्थापक कौन था?",
        options: [
            "Ashoka / अशोक",
            "Chandragupta Maurya / चंद्रगुप्त मौर्य",
            "Bindusara / बिन्दुसार",
            "Bimbisara / बिम्बिसार"
        ],
        correct: 1,
        subject: "Ancient History"
    },
    {
        id: 4,
        question: "The famous 'Gayatri Mantra' is addressed to which deity?",
        questionHindi: "प्रसिद्ध 'गायत्री मंत्र' किस देवता को संबोधित है?",
        options: [
            "Indra / इंद्र",
            "Savitri (Sun) / सावित्री (सूर्य)",
            "Agni / अग्नि",
            "Varuna / वरुण"
        ],
        correct: 1,
        subject: "Ancient History"
    },
    {
        id: 5,
        question: "Who was the first Governor-General of Bengal?",
        questionHindi: "बंगाल का प्रथम गवर्नर-जनरल कौन था?",
        options: [
            "Robert Clive / रॉबर्ट क्लाइव",
            "Warren Hastings / वारेन हेस्टिंग्स",
            "Lord Cornwallis / लॉर्ड कॉर्नवालिस",
            "Lord Dalhousie / लॉर्ड डलहौजी"
        ],
        correct: 1,
        subject: "Modern History"
    },

    // --- GEOGRAPHY & ENVIRONMENT ---
    {
        id: 6,
        question: "Which river falls into the Arabian Sea?",
        questionHindi: "कौन सी नदी अरब सागर में गिरती है?",
        options: [
            "Godavari / गोदावरी",
            "Krishna / कृष्णा",
            "Narmada / नर्मदा",
            "Kaveri / कावेरी"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 7,
        question: "The 'Ozone Layer' restricts:",
        questionHindi: "'ओजोन परत' किसे रोकती है?",
        options: [
            "Visible Light / दृश्य प्रकाश",
            "Infrared Radiation / अवरक्त विकिरण",
            "Ultraviolet Radiation / पराबैंगनी विकिरण",
            "X-rays / एक्स-रे"
        ],
        correct: 2,
        subject: "Environment"
    },
    {
        id: 8,
        question: "Which state is the largest producer of Coffee in India?",
        questionHindi: "भारत में कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        options: [
            "Kerala / केरल",
            "Karnataka / कर्नाटक",
            "Tamil Nadu / तमिलनाडु",
            "Assam / असम"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 9,
        question: "The study of Universe is known as:",
        questionHindi: "ब्रह्मांड के अध्ययन को क्या कहा जाता है?",
        options: [
            "Cosmology / कॉस्मोलॉजी",
            "Astrology / ज्योतिष",
            "Seismology / सीस्मोलॉजी",
            "Limnology / लिम्नोलॉजी"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 10,
        question: "Which planet has the fastest revolution period?",
        questionHindi: "किस ग्रह का परिक्रमण काल ​​सबसे तेज है?",
        options: [
            "Mercury / बुध",
            "Venus / शुक्र",
            "Earth / पृथ्वी",
            "Mars / मंगल"
        ],
        correct: 0,
        subject: "Geography"
    },

    // --- POLITY ---
    {
        id: 11,
        question: "Who is the Constitutional Head of the State Govt?",
        questionHindi: "राज्य सरकार का संवैधानिक प्रमुख कौन होता है?",
        options: [
            "Chief Minister / मुख्यमंत्री",
            "Governor / राज्यपाल",
            "President / राष्ट्रपति",
            "High Court Judge / उच्च न्यायालय के न्यायाधीश"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 12,
        question: "The 'Right to Education' act was enacted in:",
        questionHindi: "'शिक्षा का अधिकार' अधिनियम कब लागू किया गया था?",
        options: [
            "2005",
            "2009",
            "2010",
            "2002"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 13,
        question: "How many members can the President nominate to the Rajya Sabha?",
        questionHindi: "राष्ट्रपति राज्यसभा में कितने सदस्यों को मनोनीत कर सकते हैं?",
        options: [
            "2",
            "10",
            "12",
            "15"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 14,
        question: "Which Article deals with 'Right to Constitutional Remedies'?",
        questionHindi: "कौन सा अनुच्छेद 'संवैधानिक उपचारों के अधिकार' से संबंधित है?",
        options: [
            "Article 19 / अनुच्छेद 19",
            "Article 32 / अनुच्छेद 32",
            "Article 14 / अनुच्छेद 14",
            "Article 21 / अनुच्छेद 21"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 15,
        question: "The term of the Lok Sabha is normally:",
        questionHindi: "लोकसभा का कार्यकाल सामान्यतः होता है:",
        options: [
            "4 Years / 4 वर्ष",
            "5 Years / 5 वर्ष",
            "6 Years / 6 वर्ष",
            "Permanent / स्थायी"
        ],
        correct: 1,
        subject: "Polity"
    },

    // --- GENERAL SCIENCE ---
    {
        id: 16,
        question: "Deficiency of Vitamin A causes:",
        questionHindi: "विटामिन ए की कमी से होता है:",
        options: [
            "Scurvy / स्कर्वी",
            "Rickets / रिकेट्स",
            "Night Blindness / रतौंधी",
            "Beriberi / बेरीबेरी"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 17,
        question: "The chemical symbol for Gold is:",
        questionHindi: "सोने (Gold) का रासायनिक प्रतीक है:",
        options: [
            "Ag",
            "Au",
            "Fe",
            "Hg"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 18,
        question: "Sound cannot travel through:",
        questionHindi: "ध्वनि किसके माध्यम से यात्रा नहीं कर सकती है?",
        options: [
            "Water / पानी",
            "Air / हवा",
            "Steel / इस्पात",
            "Vacuum / निर्वात"
        ],
        correct: 3,
        subject: "Physics"
    },
    {
        id: 19,
        question: "Which gas is evolved during Photosynthesis?",
        questionHindi: "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
        options: [
            "Carbon Dioxide / कार्बन डाइऑक्साइड",
            "Nitrogen / नाइट्रोजन",
            "Oxygen / ऑक्सीजन",
            "Hydrogen / हाइड्रोजन"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 20,
        question: "The unit of Frequency is:",
        questionHindi: "आवृत्ति (Frequency) की इकाई है:",
        options: [
            "Hertz / हर्ट्ज़",
            "Watt / वाट",
            "Volt / वोल्ट",
            "Newton / न्यूटन"
        ],
        correct: 0,
        subject: "Physics"
    },
    {
        id: 21,
        question: "Which blood cells help in fighting infections?",
        questionHindi: "कौन सी रक्त कोशिकाएं संक्रमण से लड़ने में मदद करती हैं?",
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
        id: 22,
        question: "Chemical name of Washing Soda is:",
        questionHindi: "वाशिंग सोडा का रासायनिक नाम है:",
        options: [
            "Sodium Carbonate / सोडियम कार्बोनेट",
            "Sodium Bicarbonate / सोडियम बाइकार्बोनेट",
            "Calcium Carbonate / कैल्शियम कार्बोनेट",
            "Sodium Hydroxide / सोडियम हाइड्रोक्साइड"
        ],
        correct: 0,
        subject: "Chemistry"
    },

    // --- BIHAR SPECIAL ---
    {
        id: 23,
        question: "In which year was the Patna High Court established?",
        questionHindi: "पटना उच्च न्यायालय की स्थापना किस वर्ष हुई थी?",
        options: [
            "1916",
            "1917",
            "1912",
            "1920"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 24,
        question: "Who was the first President of India from Bihar?",
        questionHindi: "बिहार से भारत के पहले राष्ट्रपति कौन थे?",
        options: [
            "Zakir Hussain / जाकिर हुसैन",
            "V.V. Giri / वी.वी. गिरि",
            "Dr. Rajendra Prasad / डॉ. राजेंद्र प्रसाद",
            "S. Radhakrishnan / एस. राधाकृष्णन"
        ],
        correct: 2,
        subject: "Bihar History"
    },
    {
        id: 25,
        question: "The 'Vikramshila Gangetic Dolphin Sanctuary' is located in:",
        questionHindi: "'विक्रमशिला गंगा डॉल्फिन अभयारण्य' कहाँ स्थित है?",
        options: [
            "Bhagalpur / भागलपुर",
            "Patna / पटना",
            "Munger / मुंगेर",
            "Begusarai / बेगूसराय"
        ],
        correct: 0,
        subject: "Bihar Geography"
    },
    {
        id: 26,
        question: "Which festival is mainly celebrated in Bihar with the worship of the Sun God?",
        questionHindi: "बिहार में मुख्य रूप से सूर्य देव की पूजा के साथ कौन सा त्योहार मनाया जाता है?",
        options: [
            "Diwali / दिवाली",
            "Chhath Puja / छठ पूजा",
            "Holi / होली",
            "Durga Puja / दुर्गा पूजा"
        ],
        correct: 1,
        subject: "Bihar Culture"
    },
    {
        id: 27,
        question: "The total number of districts in Bihar is:",
        questionHindi: "बिहार में जिलों की कुल संख्या है:",
        options: [
            "35",
            "38",
            "40",
            "39"
        ],
        correct: 1,
        subject: "Bihar GK"
    },

    // --- CURRENT AFFAIRS ---
    {
        id: 28,
        question: "Who won the ICC Men's Cricket World Cup 2023?",
        questionHindi: "ICC पुरुष क्रिकेट विश्व कप 2023 किसने जीता?",
        options: [
            "India / भारत",
            "New Zealand / न्यूजीलैंड",
            "Australia / ऑस्ट्रेलिया",
            "South Africa / दक्षिण अफ्रीका"
        ],
        correct: 2,
        subject: "Sports"
    },
    {
        id: 29,
        question: "The 'Statue of Unity' is dedicated to:",
        questionHindi: "'स्टैच्यू ऑफ यूनिटी' किसे समर्पित है?",
        options: [
            "Mahatma Gandhi / महात्मा गांधी",
            "Sardar Vallabhbhai Patel / सरदार वल्लभभाई पटेल",
            "Subhash Chandra Bose / सुभाष चंद्र बोस",
            "B.R. Ambedkar / बी.आर. अम्बेडकर"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 30,
        question: "Who is the current Chief Minister of Bihar (2024)?",
        questionHindi: "बिहार के वर्तमान मुख्यमंत्री (2024) कौन हैं?",
        options: [
            "Nitish Kumar / नीतीश कुमार",
            "Tejashwi Yadav / तेजस्वी यादव",
            "Sushil Modi / सुशील मोदी",
            "Lalu Prasad Yadav / लालू प्रसाद यादव"
        ],
        correct: 0,
        subject: "Bihar Current"
    },
    {
        id: 31,
        question: "Which city hosted the G20 Summit in 2023?",
        questionHindi: "2023 में G20 शिखर सम्मेलन की मेजबानी किस शहर ने की?",
        options: [
            "Mumbai / मुंबई",
            "New Delhi / नई दिल्ली",
            "Bangalore / बैंगलोर",
            "Ahmedabad / अहमदाबाद"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 32,
        question: "Chandrayaan-3 landed on which part of the Moon?",
        questionHindi: "चंद्रयान-3 चंद्रमा के किस भाग पर उतरा?",
        options: [
            "North Pole / उत्तरी ध्रुव",
            "Equator / भूमध्य रेखा",
            "South Pole / दक्षिणी ध्रुव",
            "Far Side / सुदूर पक्ष"
        ],
        correct: 2,
        subject: "Science & Tech"
    },

    // --- REASONING & MATH ---
    {
        id: 33,
        question: "Find the missing number: 2, 5, 11, 23, ?",
        questionHindi: "लुप्त संख्या ज्ञात करें: 2, 5, 11, 23, ?",
        options: [
            "46",
            "47",
            "48",
            "45"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 34,
        question: "If CAT = 24 and DOG = 26, then RAT = ?",
        questionHindi: "यदि CAT = 24 और DOG = 26, तो RAT = ?",
        options: [
            "39",
            "40",
            "38",
            "42"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 35,
        question: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
        questionHindi: "एक आदमी की ओर इशारा करते हुए एक महिला ने कहा, 'उसकी माँ मेरी माँ की इकलौती बेटी है।' महिला का पुरुष से क्या संबंध है?",
        options: [
            "Mother / माँ",
            "Sister / बहन",
            "Aunt / चाची",
            "Grandmother / दादी"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 36,
        question: "A train 100m long is running at 36 km/hr. Time taken to cross a pole is:",
        questionHindi: "100 मीटर लंबी एक ट्रेन 36 किमी/घंटा की गति से चल रही है। एक खंभे को पार करने में लिया गया समय है:",
        options: [
            "10 sec",
            "12 sec",
            "15 sec",
            "8 sec"
        ],
        correct: 0,
        subject: "Math"
    },
    {
        id: 37,
        question: "If the cost price of 10 articles is equal to the selling price of 8 articles, the profit percent is:",
        questionHindi: "यदि 10 वस्तुओं का क्रय मूल्य 8 वस्तुओं के विक्रय मूल्य के बराबर है, तो लाभ प्रतिशत है:",
        options: [
            "20%",
            "25%",
            "15%",
            "10%"
        ],
        correct: 1,
        subject: "Math"
    },

    // --- MISCELLANEOUS GK ---
    {
        id: 38,
        question: "Who wrote the national anthem 'Jana Gana Mana'?",
        questionHindi: "राष्ट्रगान 'जन गण मन' किसने लिखा था?",
        options: [
            "Bankim Chandra Chatterjee / बंकिम चंद्र चटर्जी",
            "Rabindranath Tagore / रवींद्रनाथ टैगोर",
            "Sarojini Naidu / सरोजिनी नायडू",
            "Premchand / प्रेमचंद"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 39,
        question: "The 'Golden Temple' is located in:",
        questionHindi: "'स्वर्ण मंदिर' कहाँ स्थित है?",
        options: [
            "New Delhi / नई दिल्ली",
            "Amritsar / अमृतसर",
            "Chandigarh / चंडीगढ़",
            "Ludhiana / लुधियाना"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 40,
        question: "Which city is known as the 'Silicon Valley of India'?",
        questionHindi: "किस शहर को 'भारत की सिलिकॉन वैली' के रूप में जाना जाता है?",
        options: [
            "Hyderabad / हैदराबाद",
            "Chennai / चेन्नई",
            "Bengaluru / बेंगलुरु",
            "Pune / पुणे"
        ],
        correct: 2,
        subject: "GK"
    },
    {
        id: 41,
        question: "The 'Hawa Mahal' is located in:",
        questionHindi: "'हवा महल' कहाँ स्थित है?",
        options: [
            "Udaipur / उदयपुर",
            "Jaipur / जयपुर",
            "Jodhpur / जोधपुर",
            "Agra / आगरा"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 42,
        question: "Which is the national animal of India?",
        questionHindi: "भारत का राष्ट्रीय पशु कौन सा है?",
        options: [
            "Lion / शेर",
            "Tiger / बाघ",
            "Elephant / हाथी",
            "Peacock / मोर"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 43,
        question: "Who was the first man to walk on the Moon?",
        questionHindi: "चंद्रमा पर चलने वाला पहला आदमी कौन था?",
        options: [
            "Yuri Gagarin / यूरी गगारिन",
            "Neil Armstrong / नील आर्मस्ट्रांग",
            "Buzz Aldrin / बज़ एल्ड्रिन",
            "Michael Collins / माइकल कोलिन्स"
        ],
        correct: 1,
        subject: "GK"
    },
    {
        id: 44,
        question: "Which gas is used in balloons?",
        questionHindi: "गुब्बारों में किस गैस का उपयोग किया जाता है?",
        options: [
            "Hydrogen / हाइड्रोजन",
            "Helium / हीलियम",
            "Nitrogen / नाइट्रोजन",
            "Oxygen / ऑक्सीजन"
        ],
        correct: 1,
        subject: "Science"
    },
    {
        id: 45,
        question: "The 'Taj Mahal' was built by:",
        questionHindi: "'ताज महल' किसके द्वारा बनवाया गया था?",
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
        id: 46,
        question: "Which of the following is not a primary color?",
        questionHindi: "निम्नलिखित में से कौन सा प्राथमिक रंग नहीं है?",
        options: [
            "Red / लाल",
            "Blue / नीला",
            "Green / हरा",
            "Yellow / पीला"
        ],
        correct: 3,
        subject: "Science"
    },
    {
        id: 47,
        question: "In which year did India become a Republic?",
        questionHindi: "भारत किस वर्ष गणतंत्र बना?",
        options: [
            "1947",
            "1948",
            "1950",
            "1952"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 48,
        question: "Who is the 'Father of the Indian Constitution'?",
        questionHindi: "'भारतीय संविधान का जनक' कौन है?",
        options: [
            "Mahatma Gandhi / महात्मा गांधी",
            "B.R. Ambedkar / बी.आर. अम्बेडकर",
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "Sardar Patel / सरदार पटेल"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 49,
        question: "Which is the smallest state in India by area?",
        questionHindi: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
        options: [
            "Goa / गोवा",
            "Sikkim / सिक्किम",
            "Tripura / त्रिपुरा",
            "Manipur / मणिपुर"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 50,
        question: "The currency of the USA is:",
        questionHindi: "संयुक्त राज्य अमेरिका (USA) की मुद्रा है:",
        options: [
            "Pound / पाउंड",
            "Euro / यूरो",
            "Dollar / डॉलर",
            "Yen / येन"
        ],
        correct: 2,
        subject: "GK"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}