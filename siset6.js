// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 6
// Focus: High-Yield Mixed Mock (Science, Reasoning, Bihar Special, Modern History)
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- GENERAL SCIENCE (Physics, Chem, Bio) ---
    {
        id: 1,
        question: "Which of the following is used in non-stick cooking utensils?",
        questionHindi: "नॉन-स्टिक खाना पकाने के बर्तनों में निम्नलिखित में से किसका उपयोग किया जाता है?",
        options: [
            "PVC / पीवीसी",
            "Teflon / टेफ्लॉन",
            "Polystyrene / पॉलीस्टाइनिन",
            "Graphite / ग्रेफाइट"
        ],
        correct: 1,
        subject: "Chemistry"
    },
    {
        id: 2,
        question: "The smallest bone in the human body is:",
        questionHindi: "मानव शरीर की सबसे छोटी हड्डी है:",
        options: [
            "Femur / फीमर",
            "Stapes / स्टेप्स (कान की हड्डी)",
            "Tibia / टिबिया",
            "Humerus / ह्यूमरस"
        ],
        correct: 1,
        subject: "Biology"
    },
    {
        id: 3,
        question: "Which device converts Mechanical Energy into Electrical Energy?",
        questionHindi: "कौन सा यंत्र यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
        options: [
            "Electric Motor / विद्युत मोटर",
            "Dynamo / डायनेमो",
            "Microphone / माइक्रोफोन",
            "Battery / बैटरी"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 4,
        question: "Marsh Gas is mainly:",
        questionHindi: "मार्श गैस मुख्य रूप से है:",
        options: [
            "Methane / मीथेन (CH4)",
            "Ethane / इथेन",
            "Propane / प्रोपेन",
            "Butane / ब्यूटेन"
        ],
        correct: 0,
        subject: "Chemistry"
    },
    {
        id: 5,
        question: "Deficiency of Vitamin C causes:",
        questionHindi: "विटामिन सी की कमी से होता है:",
        options: [
            "Rickets / रिकेट्स",
            "Beriberi / बेरीबेरी",
            "Scurvy / स्कर्वी",
            "Night Blindness / रतौंधी"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 6,
        question: "What is the pH value of human blood?",
        questionHindi: "मानव रक्त का pH मान क्या है?",
        options: [
            "6.4",
            "7.0",
            "7.4",
            "8.2"
        ],
        correct: 2,
        subject: "Biology"
    },
    {
        id: 7,
        question: "Which lens is used to correct 'Myopia' (Near-sightedness)?",
        questionHindi: "'मायोपिया' (निकट दृष्टि दोष) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
        options: [
            "Convex Lens / उत्तल लेंस",
            "Concave Lens / अवतल लेंस",
            "Cylindrical Lens / बेलनाकार लेंस",
            "Bifocal Lens / बाइफोकल लेंस"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 8,
        question: "The chemical name of 'Blue Vitriol' is:",
        questionHindi: "'नीला थोथा' (Blue Vitriol) का रासायनिक नाम है:",
        options: [
            "Copper Sulphate / कॉपर सल्फेट",
            "Iron Sulphate / आयरन सल्फेट",
            "Zinc Sulphate / जिंक सल्फेट",
            "Calcium Sulphate / कैल्शियम सल्फेट"
        ],
        correct: 0,
        subject: "Chemistry"
    },
    {
        id: 9,
        question: "Who discovered the X-rays?",
        questionHindi: "एक्स-रे की खोज किसने की?",
        options: [
            "Marie Curie / मैरी क्यूरी",
            "Roentgen / रेंटजन",
            "Newton / न्यूटन",
            "Einstein / आइंस्टीन"
        ],
        correct: 1,
        subject: "Physics"
    },
    {
        id: 10,
        question: "Elisa Test is performed to test:",
        questionHindi: "एलिसा टेस्ट (ELISA) किसके परीक्षण के लिए किया जाता है?",
        options: [
            "Diabetes / मधुमेह",
            "Tuberculosis / तपेदिक",
            "AIDS / एड्स",
            "Typhoid / टाइफाइड"
        ],
        correct: 2,
        subject: "Biology"
    },

    // --- REASONING & MENTAL ABILITY ---
    {
        id: 11,
        question: "If SOUTH becomes NORTH-EAST, what will NORTH become?",
        questionHindi: "यदि दक्षिण, उत्तर-पूर्व बन जाता है, तो उत्तर क्या बन जाएगा?",
        options: [
            "South-West / दक्षिण-पश्चिम",
            "South-East / दक्षिण-पूर्व",
            "North-West / उत्तर-पश्चिम",
            "East / पूर्व"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 12,
        question: "Find the wrong number in the series: 3, 8, 15, 24, 34, 48, 63",
        questionHindi: "श्रृंखला में गलत संख्या ज्ञात कीजिए: 3, 8, 15, 24, 34, 48, 63",
        options: [
            "15",
            "24",
            "34",
            "48"
        ],
        correct: 2,
        subject: "Reasoning"
    },
    {
        id: 13,
        question: "In a certain code, 'TEACHER' is written as 'VGCEJGT'. How is 'CHILDREN' written?",
        questionHindi: "एक निश्चित कोड में, 'TEACHER' को 'VGCEJGT' लिखा जाता है। 'CHILDREN' को कैसे लिखा जाएगा?",
        options: [
            "EJKNFTGP",
            "EJKNFGTP",
            "EJKNEGTP",
            "EJKNFHTP"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 14,
        question: "A man points to a lady and says, 'She is the daughter of the only child of my grandmother.' How is the lady related to the man?",
        questionHindi: "एक आदमी एक महिला की ओर इशारा करता है और कहता है, 'वह मेरी दादी की इकलौती संतान की बेटी है।' महिला का पुरुष से क्या संबंध है?",
        options: [
            "Sister / बहन",
            "Mother / माँ",
            "Cousin / चचेरी बहन",
            "Aunt / बुआ"
        ],
        correct: 0,
        subject: "Reasoning"
    },
    {
        id: 15,
        question: "If + means ÷, ÷ means -, - means ×, and × means +, then: 12 + 6 ÷ 3 - 2 × 8 = ?",
        questionHindi: "यदि + का अर्थ ÷, ÷ का अर्थ -, - का अर्थ ×, और × का अर्थ + है, तो: 12 + 6 ÷ 3 - 2 × 8 = ?",
        options: [
            "2",
            "4",
            "8",
            "6"
        ],
        correct: 0,
        subject: "Reasoning"
    },

    // --- BIHAR SPECIAL ---
    {
        id: 16,
        question: "When is 'Bihar Diwas' celebrated every year?",
        questionHindi: "हर साल 'बिहार दिवस' कब मनाया जाता है?",
        options: [
            "1 April / 1 अप्रैल",
            "22 March / 22 मार्च",
            "15 November / 15 नवंबर",
            "20 May / 20 मई"
        ],
        correct: 1,
        subject: "Bihar GK"
    },
    {
        id: 17,
        question: "Which city of Bihar is known for 'Zardalu Mango' (GI Tag)?",
        questionHindi: "बिहार का कौन सा शहर 'जरदालु आम' (GI Tag) के लिए जाना जाता है?",
        options: [
            "Muzaffarpur / मुजफ्फरपुर",
            "Bhagalpur / भागलपुर",
            "Darbhanga / दरभंगा",
            "Hajipur / हाजीपुर"
        ],
        correct: 1,
        subject: "Bihar GK"
    },
    {
        id: 18,
        question: "Who led the 'Ambari Satyagraha' in Bihar in 1939?",
        questionHindi: "1939 में बिहार में 'अंबारी सत्याग्रह' का नेतृत्व किसने किया?",
        options: [
            "Rahul Sankrityayan / राहुल सांकृत्यायन",
            "Swami Sahajanand / स्वामी सहजानंद",
            "Yadunandan Sharma / यदुनंदन शर्मा",
            "Karyanand Sharma / कार्यानंद शर्मा"
        ],
        correct: 0,
        subject: "Bihar History"
    },
    {
        id: 19,
        question: "Where is the 'Mahabodhi Temple' located?",
        questionHindi: "'महाबोधि मंदिर' कहाँ स्थित है?",
        options: [
            "Rajgir / राजगीर",
            "Bodh Gaya / बोधगया",
            "Patna / पटना",
            "Vaishali / वैशाली"
        ],
        correct: 1,
        subject: "Bihar GK"
    },
    {
        id: 20,
        question: "Which district of Bihar produces the most Jute?",
        questionHindi: "बिहार का कौन सा जिला सबसे अधिक जूट का उत्पादन करता है?",
        options: [
            "Purnia / पूर्णिया",
            "Katihar / कटिहार",
            "Kishanganj / किशनगंज",
            "Saharsa / सहरसा"
        ],
        correct: 0,
        subject: "Bihar Economy"
    },

    // --- HISTORY (Modern & Freedom Struggle) ---
    {
        id: 21,
        question: "Who called the Revolt of 1857 the 'First War of Indian Independence'?",
        questionHindi: "1857 के विद्रोह को 'भारतीय स्वतंत्रता का प्रथम युद्ध' किसने कहा था?",
        options: [
            "R.C. Majumdar / आर.सी. मजूमदार",
            "V.D. Savarkar / वी.डी. सावरकर",
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "S.N. Sen / एस.एन. सेन"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 22,
        question: "Gandhiji started his first Satyagraha in India at:",
        questionHindi: "गांधीजी ने भारत में अपना पहला सत्याग्रह कहाँ शुरू किया?",
        options: [
            "Ahmedabad / अहमदाबाद",
            "Kheda / खेड़ा",
            "Champaran / चंपारण",
            "Bardoli / बारदोली"
        ],
        correct: 2,
        subject: "History"
    },
    {
        id: 23,
        question: "Who was the Viceroy of India at the time of Partition of Bengal (1905)?",
        questionHindi: "बंगाल विभाजन (1905) के समय भारत का वायसराय कौन था?",
        options: [
            "Lord Curzon / लॉर्ड कर्जन",
            "Lord Dalhousie / लॉर्ड डलहौजी",
            "Lord Canning / लॉर्ड कैनिंग",
            "Lord Hardinge / लॉर्ड हार्डिंग"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 24,
        question: "The 'Purna Swaraj' resolution was passed on the banks of which river?",
        questionHindi: "'पूर्ण स्वराज' प्रस्ताव किस नदी के तट पर पारित किया गया था?",
        options: [
            "Ganga / गंगा",
            "Ravi / रावी",
            "Indus / सिंधु",
            "Yamuna / यमुना"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 25,
        question: "Who founded the 'Forward Bloc'?",
        questionHindi: "'फॉरवर्ड ब्लॉक' की स्थापना किसने की?",
        options: [
            "Subhash Chandra Bose / सुभाष चंद्र बोस",
            "Bhagat Singh / भगत सिंह",
            "Chandrashekhar Azad / चंद्रशेखर आजाद",
            "M.N. Roy / एम.एन. रॉय"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 26,
        question: "The 'Rowlatt Act' was passed in the year:",
        questionHindi: "'रौलट एक्ट' किस वर्ष पारित किया गया था?",
        options: [
            "1917",
            "1919",
            "1921",
            "1923"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 27,
        question: "Who was known as 'Deshbandhu'?",
        questionHindi: "'देशबंधु' के नाम से किसे जाना जाता था?",
        options: [
            "C.R. Das (Chittaranjan Das) / सी.आर. दास (चित्तरंजन दास)",
            "Dadabhai Naoroji / दादाभाई नौरोजी",
            "Rabindranath Tagore / रवींद्रनाथ टैगोर",
            "Madan Mohan Malaviya / मदन मोहन मालवीय"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 28,
        question: "In which year did the 'Chauri Chaura' incident take place?",
        questionHindi: "'चौरी चौरा' की घटना किस वर्ष हुई थी?",
        options: [
            "1920",
            "1922",
            "1924",
            "1925"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 29,
        question: "Who was the first woman President of the Indian National Congress?",
        questionHindi: "भारतीय राष्ट्रीय कांग्रेस की प्रथम महिला अध्यक्ष कौन थीं?",
        options: [
            "Sarojini Naidu / सरोजिनी नायडू",
            "Annie Besant / एनी बेसेंट",
            "Indira Gandhi / इंदिरा गांधी",
            "Nellie Sengupta / नेली सेनगुप्ता"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 30,
        question: "The 'Home Rule League' movement was started by:",
        questionHindi: "'होम रूल लीग' आंदोलन किसके द्वारा शुरू किया गया था?",
        options: [
            "Annie Besant and Tilak / एनी बेसेंट और तिलक",
            "Gandhi and Nehru / गांधी और नेहरू",
            "Tilak and Gokhale / तिलक और गोखले",
            "Lala Lajpat Rai / लाला लाजपत राय"
        ],
        correct: 0,
        subject: "History"
    },

    // --- POLITY & MISC GK ---
    {
        id: 31,
        question: "Who administers the oath to the President of India?",
        questionHindi: "भारत के राष्ट्रपति को शपथ कौन दिलाता है?",
        options: [
            "Vice President / उपराष्ट्रपति",
            "Prime Minister / प्रधान मंत्री",
            "Chief Justice of India / भारत के मुख्य न्यायाधीश",
            "Speaker of Lok Sabha / लोकसभा अध्यक्ष"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 32,
        question: "Total number of Fundamental Duties in the Indian Constitution is:",
        questionHindi: "भारतीय संविधान में मौलिक कर्तव्यों की कुल संख्या है:",
        options: [
            "10",
            "11",
            "9",
            "12"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 33,
        question: "The 'Planning Commission' has been replaced by:",
        questionHindi: "'योजना आयोग' को किसके द्वारा प्रतिस्थापित किया गया है?",
        options: [
            "NITI Aayog / नीति आयोग",
            "Finance Commission / वित्त आयोग",
            "GST Council / जीएसटी परिषद",
            "National Development Council / राष्ट्रीय विकास परिषद"
        ],
        correct: 0,
        subject: "Economy"
    },
    {
        id: 34,
        question: "Which of the following states does NOT have a Legislative Council (Vidhan Parishad)?",
        questionHindi: "निम्नलिखित में से किस राज्य में विधान परिषद नहीं है?",
        options: [
            "Bihar / बिहार",
            "Uttar Pradesh / उत्तर प्रदेश",
            "Maharashtra / महाराष्ट्र",
            "West Bengal / पश्चिम बंगाल"
        ],
        correct: 3,
        subject: "Polity"
    },
    {
        id: 35,
        question: "The term 'Bully' is associated with which sport?",
        questionHindi: "'बुली' (Bully) शब्द किस खेल से संबंधित है?",
        options: [
            "Cricket / क्रिकेट",
            "Hockey / हॉकी",
            "Football / फुटबॉल",
            "Tennis / टेनिस"
        ],
        correct: 1,
        subject: "Sports"
    },
    {
        id: 36,
        question: "Who wrote the book 'Discovery of India'?",
        questionHindi: "'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
        options: [
            "Mahatma Gandhi / महात्मा गांधी",
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "Sardar Patel / सरदार पटेल",
            "Indira Gandhi / इंदिरा गांधी"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 37,
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
        id: 38,
        question: "Which gas is filled in balloons?",
        questionHindi: "गुब्बारों में कौन सी गैस भरी जाती है?",
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
        id: 39,
        question: "The first Indian satellite launched was:",
        questionHindi: "लॉन्च किया गया पहला भारतीय उपग्रह था:",
        options: [
            "Aryabhata / आर्यभट्ट",
            "Bhaskara / भास्कर",
            "Rohini / रोहिणी",
            "Apple / ऐप्पल"
        ],
        correct: 0,
        subject: "Science"
    },
    {
        id: 40,
        question: "Which city is known as the 'Pink City'?",
        questionHindi: "किस शहर को 'गुलाबी शहर' (Pink City) के रूप में जाना जाता है?",
        options: [
            "Jaipur / जयपुर",
            "Udaipur / उदयपुर",
            "Jodhpur / जोधपुर",
            "Nagpur / नागपुर"
        ],
        correct: 0,
        subject: "GK"
    },

    // --- MORE CURRENT AFFAIRS & MISC ---
    {
        id: 41,
        question: "Who is the current RBI Governor (as of 2024-25)?",
        questionHindi: "वर्तमान आरबीआई गवर्नर (2024-25 तक) कौन हैं?",
        options: [
            "Shaktikanta Das / शक्तिकांत दास",
            "Urjit Patel / उर्जित पटेल",
            "Raghuram Rajan / रघुराम राजन",
            "Viral Acharya / विरल आचार्य"
        ],
        correct: 0,
        subject: "Economy"
    },
    {
        id: 42,
        question: "The 'Hornbill Festival' is celebrated in:",
        questionHindi: "'हॉर्नबिल महोत्सव' कहाँ मनाया जाता है?",
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
        id: 43,
        question: "Which of the following is NOT a fundamental right?",
        questionHindi: "निम्नलिखित में से कौन एक मौलिक अधिकार नहीं है?",
        options: [
            "Right to Equality / समानता का अधिकार",
            "Right to Property / संपत्ति का अधिकार",
            "Right to Freedom / स्वतंत्रता का अधिकार",
            "Right against Exploitation / शोषण के खिलाफ अधिकार"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 44,
        question: "The 'Suez Canal' connects:",
        questionHindi: "'स्वेज नहर' जोड़ती है:",
        options: [
            "Mediterranean Sea and Red Sea / भूमध्य सागर और लाल सागर",
            "Pacific and Atlantic Ocean / प्रशांत और अटलांटिक महासागर",
            "Mediterranean and Black Sea / भूमध्य सागर और काला सागर",
            "Red Sea and Arabian Sea / लाल सागर और अरब सागर"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 45,
        question: "Who is the author of 'Wings of Fire'?",
        questionHindi: "'विंग्स ऑफ फायर' के लेखक कौन हैं?",
        options: [
            "A.P.J. Abdul Kalam / ए.पी.जे. अब्दुल कलाम",
            "Jawaharlal Nehru / जवाहरलाल नेहरू",
            "Indira Gandhi / इंदिरा गांधी",
            "Chetan Bhagat / चेतन भगत"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 46,
        question: "Which planet is known as the 'Morning Star'?",
        questionHindi: "किस ग्रह को 'भोर का तारा' (Morning Star) कहा जाता है?",
        options: [
            "Venus / शुक्र",
            "Mars / मंगल",
            "Jupiter / बृहस्पति",
            "Mercury / बुध"
        ],
        correct: 0,
        subject: "Geography"
    },
    {
        id: 47,
        question: "The instrument used to measure purity of milk is:",
        questionHindi: "दूध की शुद्धता मापने के लिए प्रयुक्त यंत्र है:",
        options: [
            "Lactometer / लैक्टोमीटर",
            "Hydrometer / हाइड्रोमीटर",
            "Barometer / बैरोमीटर",
            "Thermometer / थर्मामीटर"
        ],
        correct: 0,
        subject: "Science"
    },
    {
        id: 48,
        question: "Where is the headquarters of 'SAARC' located?",
        questionHindi: "'सार्क' (SAARC) का मुख्यालय कहाँ स्थित है?",
        options: [
            "Kathmandu / काठमांडू",
            "New Delhi / नई दिल्ली",
            "Dhaka / ढाका",
            "Colombo / कोलंबो"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 49,
        question: "Which vitamin helps in blood clotting?",
        questionHindi: "रक्त के थक्के जमने में कौन सा विटामिन मदद करता है?",
        options: [
            "Vitamin K / विटामिन के",
            "Vitamin A / विटामिन ए",
            "Vitamin C / विटामिन सी",
            "Vitamin D / विटामिन डी"
        ],
        correct: 0,
        subject: "Biology"
    },
    {
        id: 50,
        question: "The 'Dronacharya Award' is given to:",
        questionHindi: "'द्रोणाचार्य पुरस्कार' किसे दिया जाता है?",
        options: [
            "Sports Coaches / खेल प्रशिक्षक",
            "Players / खिलाड़ी",
            "Scientists / वैज्ञानिक",
            "Writers / लेखक"
        ],
        correct: 0,
        subject: "Sports"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}