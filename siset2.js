// BIHAR POLICE SUB INSPECTOR (SI) EXAM - SET 2
// Focus: Current Affairs, Geography & General Awareness
// Total: 50 Questions | Marks: +2 Correct, -0.2 Wrong

const siQuestions = [
    // --- CURRENT AFFAIRS (2024-25) ---
    {
        id: 1,
        question: "Who has been appointed as the new Chief Election Commissioner of India?",
        questionHindi: "भारत के नए मुख्य चुनाव आयुक्त के रूप में किसे नियुक्त किया गया है?",
        options: [
            "Rajiv Kumar / राजीव कुमार",
            "Gyanesh Kumar / ज्ञानेश कुमार",
            "Sukhbir Singh Sandhu / सुखबीर सिंह संधू",
            "T. N. Seshan / टी. एन. शेषन"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 2,
        question: "Which country hosted the G20 Summit in 2024?",
        questionHindi: "2024 में G20 शिखर सम्मेलन की मेजबानी किस देश ने की?",
        options: [
            "India / भारत",
            "Brazil / ब्राजील",
            "South Africa / दक्षिण अफ्रीका",
            "Indonesia / इंडोनेशिया"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 3,
        question: "Who won the Nobel Peace Prize 2024?",
        questionHindi: "नोबेल शांति पुरस्कार 2024 किसने जीता?",
        options: [
            "Narges Mohammadi / नरगेस मोहम्मदी",
            "Volodymyr Zelenskyy / वोलोडिमिर ज़ेलेंस्की",
            "Nihon Hidankyo / निहोन हिडांक्यो",
            "Greta Thunberg / ग्रेटा थुनबर्ग"
        ],
        correct: 2,
        subject: "Current Affairs"
    },
    {
        id: 4,
        question: "What is the rank of India in the Global Hunger Index 2024?",
        questionHindi: "ग्लोबल हंगर इंडेक्स 2024 में भारत का स्थान क्या है?",
        options: [
            "105th / 105वां",
            "111th / 111वां",
            "101st / 101वां",
            "94th / 94वां"
        ],
        correct: 0,
        subject: "Current Affairs"
    },
    {
        id: 5,
        question: "Which film won the Best Picture award at the 96th Academy Awards (Oscars)?",
        questionHindi: "96वें अकादमी पुरस्कार (ऑस्कर) में किस फिल्म ने सर्वश्रेष्ठ फिल्म का पुरस्कार जीता?",
        options: [
            "Barbie / बार्बी",
            "Oppenheimer / ओपेनहाइमर",
            "Poor Things / पुअर थिंग्स",
            "Killers of the Flower Moon / किलर्स ऑफ द फ्लावर मून"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 6,
        question: "Who is the current Governor of Bihar (as of 2025)?",
        questionHindi: "बिहार के वर्तमान राज्यपाल (2025 तक) कौन हैं?",
        options: [
            "Phagu Chauhan / फागू चौहान",
            "Rajendra Arlekar / राजेंद्र अर्लेकर",
            "Lalji Tandon / लालजी टंडन",
            "Satya Pal Malik / सत्य पाल मलिक"
        ],
        correct: 1,
        subject: "Bihar Current"
    },
    {
        id: 7,
        question: "The 'Pradhan Mantri Suryodaya Yojana' is related to:",
        questionHindi: "'प्रधानमंत्री सूर्योदय योजना' किससे संबंधित है?",
        options: [
            "Wind Energy / पवन ऊर्जा",
            "Rooftop Solar Panels / रूफटॉप सोलर पैनल",
            "Hydro Power / जल विद्युत",
            "Coal Mining / कोयला खनन"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 8,
        question: "Which state topped the 'Swachh Survekshan Awards 2024'?",
        questionHindi: "'स्वच्छ सर्वेक्षण पुरस्कार 2024' में किस राज्य ने शीर्ष स्थान प्राप्त किया?",
        options: [
            "Madhya Pradesh / मध्य प्रदेश",
            "Maharashtra / महाराष्ट्र",
            "Gujarat / गुजरात",
            "Chhattisgarh / छत्तीसगढ़"
        ],
        correct: 1,
        subject: "Current Affairs"
    },
    {
        id: 9,
        question: "Who became India's 85th Chess Grandmaster?",
        questionHindi: "भारत के 85वें शतरंज ग्रैंडमास्टर कौन बने?",
        options: [
            "R Praggnanandhaa / आर प्रज्ञानंद",
            "Gukesh D / गुकेश डी",
            "P. Shyaam Nikhil / पी. श्याम निखिल",
            "Vidit Gujrathi / विदित गुजराती"
        ],
        correct: 2,
        subject: "Sports"
    },
    {
        id: 10,
        question: "The new Parliament building of India was designed by:",
        questionHindi: "भारत के नए संसद भवन का डिजाइन किसके द्वारा तैयार किया गया था?",
        options: [
            "Bimal Patel / बिमल पटेल",
            "Hafeez Contractor / हफीज कांट्रेक्टर",
            "Ram V. Sutar / राम वी. सुतार",
            "Edwin Lutyens / एडविन लुटियंस"
        ],
        correct: 0,
        subject: "Current Affairs"
    },

    // --- GEOGRAPHY (Indian & World) ---
    {
        id: 11,
        question: "Which line separates India and Pakistan?",
        questionHindi: "कौन सी रेखा भारत और पाकिस्तान को अलग करती है?",
        options: [
            "McMahon Line / मैकमोहन रेखा",
            "Durand Line / डूरंड रेखा",
            "Radcliffe Line / रेडक्लिफ रेखा",
            "Palk Strait / पाक जलडमरूमध्य"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 12,
        question: "Which is the largest freshwater lake in India?",
        questionHindi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        options: [
            "Chilika Lake / चिल्का झील",
            "Wular Lake / वुलर झील",
            "Sambhar Lake / सांभर झील",
            "Dal Lake / डल झील"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 13,
        question: "The Tropic of Cancer does NOT pass through which Indian state?",
        questionHindi: "कर्क रेखा भारत के किस राज्य से होकर नहीं गुजरती है?",
        options: [
            "Gujarat / गुजरात",
            "Rajasthan / राजस्थान",
            "Odisha / ओडिशा",
            "Tripura / त्रिपुरा"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 14,
        question: "Which river is known as 'Dakshin Ganga'?",
        questionHindi: "किस नदी को 'दक्षिण गंगा' के नाम से जाना जाता है?",
        options: [
            "Krishna / कृष्णा",
            "Godavari / गोदावरी",
            "Kaveri / कावेरी",
            "Mahanadi / महानदी"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 15,
        question: "Which planet has the maximum number of moons?",
        questionHindi: "किस ग्रह के पास सबसे अधिक चंद्रमा (उपग्रह) हैं?",
        options: [
            "Jupiter / बृहस्पति",
            "Saturn / शनि",
            "Uranus / अरुण",
            "Mars / मंगल"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 16,
        question: "Majuli, the largest river island in the world, is located in which state?",
        questionHindi: "दुनिया का सबसे बड़ा नदी द्वीप माजुली किस राज्य में स्थित है?",
        options: [
            "Arunachal Pradesh / अरुणाचल प्रदेश",
            "Assam / असम",
            "Meghalaya / मेघालय",
            "West Bengal / पश्चिम बंगाल"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 17,
        question: "Which soil is best suited for cotton cultivation?",
        questionHindi: "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
        options: [
            "Alluvial Soil / जलोढ़ मिट्टी",
            "Red Soil / लाल मिट्टी",
            "Black Soil (Regur) / काली मिट्टी (रेगुर)",
            "Laterite Soil / लेटराइट मिट्टी"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 18,
        question: "The highest peak of the Satpura Range is:",
        questionHindi: "सतपुड़ा श्रेणी की सबसे ऊंची चोटी है:",
        options: [
            "Guru Shikhar / गुरु शिखर",
            "Dhupgarh / धूपगढ़",
            "Pachmarhi / पचमढ़ी",
            "Mahendragiri / महेंद्रगिरी"
        ],
        correct: 1,
        subject: "Geography"
    },
    {
        id: 19,
        question: "Which Strait connects the Pacific Ocean and the Atlantic Ocean?",
        questionHindi: "कौन सा जलडमरूमध्य प्रशांत महासागर और अटलांटिक महासागर को जोड़ता है?",
        options: [
            "Bering Strait / बेरिंग जलडमरूमध्य",
            "Strait of Gibraltar / जिब्राल्टर जलडमरूमध्य",
            "Strait of Magellan / मैगलन जलडमरूमध्य",
            "Malacca Strait / मलक्का जलडमरूमध्य"
        ],
        correct: 2,
        subject: "Geography"
    },
    {
        id: 20,
        question: "Which Indian state has the longest coastline?",
        questionHindi: "किस भारतीय राज्य की तटरेखा सबसे लंबी है?",
        options: [
            "Tamil Nadu / तमिलनाडु",
            "Maharashtra / महाराष्ट्र",
            "Andhra Pradesh / आंध्र प्रदेश",
            "Gujarat / गुजरात"
        ],
        correct: 3,
        subject: "Geography"
    },

    // --- BIHAR SPECIAL (Geography & Polity) ---
    {
        id: 21,
        question: "Which district of Bihar has the highest literacy rate?",
        questionHindi: "बिहार के किस जिले में साक्षरता दर सबसे अधिक है?",
        options: [
            "Patna / पटना",
            "Rohtas / रोहतास",
            "Munger / मुंगेर",
            "Gaya / गया"
        ],
        correct: 1,
        subject: "Bihar GK"
    },
    {
        id: 22,
        question: "The Kosi River enters Bihar from which district?",
        questionHindi: "कोसी नदी बिहार में किस जिले से प्रवेश करती है?",
        options: [
            "Supaul / सुपौल",
            "Madhubani / मधुबनी",
            "Kishanganj / किशनगंज",
            "Araria / अररिया"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 23,
        question: "In which year was Bihar separated from Bengal?",
        questionHindi: "बिहार को बंगाल से किस वर्ष अलग किया गया था?",
        options: [
            "1911",
            "1912",
            "1936",
            "2000"
        ],
        correct: 1,
        subject: "Bihar GK"
    },
    {
        id: 24,
        question: "Which of the following thermal power plants is in Bihar?",
        questionHindi: "निम्नलिखित में से कौन सा ताप विद्युत संयंत्र बिहार में है?",
        options: [
            "Kahalgaon / कहलगांव",
            "Singrauli / सिंगरौली",
            "Korba / कोरबा",
            "Talcher / तालचर"
        ],
        correct: 0,
        subject: "Bihar GK"
    },
    {
        id: 25,
        question: "How many districts are there in Bihar?",
        questionHindi: "बिहार में कितने जिले हैं?",
        options: [
            "36",
            "38",
            "40",
            "39"
        ],
        correct: 1,
        subject: "Bihar GK"
    },

    // --- POLITY & CONSTITUTION ---
    {
        id: 26,
        question: "Who is the Chairman of the Rajya Sabha?",
        questionHindi: "राज्यसभा का सभापति कौन होता है?",
        options: [
            "President / राष्ट्रपति",
            "Vice-President / उपराष्ट्रपति",
            "Prime Minister / प्रधान मंत्री",
            "Speaker / अध्यक्ष"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 27,
        question: "By which Amendment was the word 'Secular' added to the Preamble?",
        questionHindi: "किस संशोधन द्वारा प्रस्तावना में 'पंथनिरपेक्ष' शब्द जोड़ा गया?",
        options: [
            "42nd Amendment / 42वां संशोधन",
            "44th Amendment / 44वां संशोधन",
            "86th Amendment / 86वां संशोधन",
            "73rd Amendment / 73वां संशोधन"
        ],
        correct: 0,
        subject: "Polity"
    },
    {
        id: 28,
        question: "Financial Emergency is mentioned in which Article?",
        questionHindi: "वित्तीय आपातकाल का उल्लेख किस अनुच्छेद में है?",
        options: [
            "Article 352 / अनुच्छेद 352",
            "Article 356 / अनुच्छेद 356",
            "Article 360 / अनुच्छेद 360",
            "Article 370 / अनुच्छेद 370"
        ],
        correct: 2,
        subject: "Polity"
    },
    {
        id: 29,
        question: "The Directive Principles of State Policy (DPSP) are borrowed from:",
        questionHindi: "राज्य के नीति निर्देशक तत्व (DPSP) किस देश से लिए गए हैं?",
        options: [
            "USA / अमेरिका",
            "Ireland / आयरलैंड",
            "Canada / कनाडा",
            "USSR / सोवियत संघ"
        ],
        correct: 1,
        subject: "Polity"
    },
    {
        id: 30,
        question: "Who appoints the Judges of the High Court?",
        questionHindi: "उच्च न्यायालय के न्यायाधीशों की नियुक्ति कौन करता है?",
        options: [
            "Governor / राज्यपाल",
            "Chief Justice of India / भारत के मुख्य न्यायाधीश",
            "President / राष्ट्रपति",
            "Chief Minister / मुख्यमंत्री"
        ],
        correct: 2,
        subject: "Polity"
    },

    // --- GENERAL SCIENCE ---
    {
        id: 31,
        question: "What is the chemical name of Baking Soda?",
        questionHindi: "बेकिंग सोडा का रासायनिक नाम क्या है?",
        options: [
            "Sodium Carbonate / सोडियम कार्बोनेट",
            "Sodium Bicarbonate / सोडियम बाइकार्बोनेट",
            "Sodium Chloride / सोडियम क्लोराइड",
            "Calcium Carbonate / कैल्शियम कार्बोनेट"
        ],
        correct: 1,
        subject: "Science"
    },
    {
        id: 32,
        question: "Which blood group is known as the 'Universal Donor'?",
        questionHindi: "किस रक्त समूह को 'सर्वदाता' के रूप में जाना जाता है?",
        options: [
            "A+",
            "AB+",
            "O-",
            "B-"
        ],
        correct: 2,
        subject: "Science"
    },
    {
        id: 33,
        question: "The speed of light is maximum in:",
        questionHindi: "प्रकाश की गति अधिकतम किसमें होती है?",
        options: [
            "Water / पानी",
            "Glass / कांच",
            "Vacuum / निर्वात",
            "Diamond / हीरा"
        ],
        correct: 2,
        subject: "Science"
    },
    {
        id: 34,
        question: "Which gas is evolved when acid reacts with metal?",
        questionHindi: "जब अम्ल धातु के साथ अभिक्रिया करता है तो कौन सी गैस निकलती है?",
        options: [
            "Oxygen / ऑक्सीजन",
            "Nitrogen / नाइट्रोजन",
            "Hydrogen / हाइड्रोजन",
            "Carbon Dioxide / कार्बन डाइऑक्साइड"
        ],
        correct: 2,
        subject: "Science"
    },
    {
        id: 35,
        question: "Which instrument is used to measure atmospheric pressure?",
        questionHindi: "वायुमंडलीय दाब मापने के लिए किस यंत्र का उपयोग किया जाता है?",
        options: [
            "Barometer / बैरोमीटर",
            "Thermometer / थर्मामीटर",
            "Lactometer / लैक्टोमीटर",
            "Hygrometer / हाइग्रोमीटर"
        ],
        correct: 0,
        subject: "Science"
    },

    // --- HISTORY (Modern & Ancient) ---
    {
        id: 36,
        question: "Who founded the 'Servants of India Society'?",
        questionHindi: "'सर्वेंट्स ऑफ इंडिया सोसाइटी' की स्थापना किसने की?",
        options: [
            "Bal Gangadhar Tilak / बाल गंगाधर तिलक",
            "Gopal Krishna Gokhale / गोपाल कृष्ण गोखले",
            "Dadabhai Naoroji / दादाभाई नौरोजी",
            "Annie Besant / एनी बेसेंट"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 37,
        question: "The 'Quit India Movement' started in which year?",
        questionHindi: "'भारत छोड़ो आंदोलन' किस वर्ष शुरू हुआ?",
        options: [
            "1930",
            "1940",
            "1942",
            "1947"
        ],
        correct: 2,
        subject: "History"
    },
    {
        id: 38,
        question: "Who was the first Tirthankara of Jainism?",
        questionHindi: "जैन धर्म के प्रथम तीर्थंकर कौन थे?",
        options: [
            "Mahavira / महावीर",
            "Rishabhanatha / ऋषभनाथ",
            "Parshvanatha / पार्श्वनाथ",
            "Ajitanatha / अजितनाथ"
        ],
        correct: 1,
        subject: "History"
    },
    {
        id: 39,
        question: "The famous 'Gayatri Mantra' is taken from which Veda?",
        questionHindi: "प्रसिद्ध 'गायत्री मंत्र' किस वेद से लिया गया है?",
        options: [
            "Rigveda / ऋग्वेद",
            "Yajurveda / यजुर्वेद",
            "Samaveda / सामवेद",
            "Atharvaveda / अथर्ववेद"
        ],
        correct: 0,
        subject: "History"
    },
    {
        id: 40,
        question: "Who was known as the 'Frontier Gandhi'?",
        questionHindi: "'सीमांत गांधी' के नाम से किसे जाना जाता था?",
        options: [
            "Maulana Azad / मौलाना आज़ाद",
            "Khan Abdul Ghaffar Khan / खान अब्दुल गफ्फार खान",
            "Muhammad Ali Jinnah / मुहम्मद अली जिन्ना",
            "Liaquat Ali Khan / लियाकत अली खान"
        ],
        correct: 1,
        subject: "History"
    },

    // --- REASONING & MATH (Mental Ability) ---
    {
        id: 41,
        question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        questionHindi: "इस श्रृंखला को देखें: 7, 10, 8, 11, 9, 12, ... आगे कौन सी संख्या आनी चाहिए?",
        options: ["7", "10", "12", "13"],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 42,
        question: "Which word does NOT belong with the others?",
        questionHindi: "कौन सा शब्द दूसरों से संबंधित नहीं है?",
        options: [
            "Parsley / अजमोद",
            "Basil / तुलसी",
            "Dill / सोआ",
            "Mayonnaise / मेयोनेज़"
        ],
        correct: 3,
        subject: "Reasoning"
    },
    {
        id: 43,
        question: "If 1st January 2024 was Monday, what day was 1st January 2025?",
        questionHindi: "यदि 1 जनवरी 2024 को सोमवार था, तो 1 जनवरी 2025 को कौन सा दिन था?",
        options: [
            "Tuesday / मंगलवार",
            "Wednesday / बुधवार",
            "Thursday / गुरुवार",
            "Friday / शुक्रवार"
        ],
        correct: 1,
        subject: "Reasoning"
    },
    {
        id: 44,
        question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        questionHindi: "60 किमी/घंटा की गति से चल रही एक ट्रेन एक खंभे को 9 सेकंड में पार करती है। ट्रेन की लंबाई क्या है?",
        options: [
            "120 metres / 120 मीटर",
            "150 metres / 150 मीटर",
            "180 metres / 180 मीटर",
            "324 metres / 324 मीटर"
        ],
        correct: 1,
        subject: "Math"
    },
    {
        id: 45,
        question: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
        questionHindi: "एक तस्वीर की ओर इशारा करते हुए एक आदमी ने कहा, 'मेरा कोई भाई या बहन नहीं है, लेकिन उस आदमी का पिता मेरे पिता का बेटा है।' वह किसकी तस्वीर थी?",
        options: [
            "His own / उसकी अपनी",
            "His son's / उसके बेटे की",
            "His father's / उसके पिता की",
            "His nephew's / उसके भतीजे की"
        ],
        correct: 1,
        subject: "Reasoning"
    },

    // --- MISC & STATIC GK ---
    {
        id: 46,
        question: "Who is the author of the book 'God of Small Things'?",
        questionHindi: "'गॉड ऑफ स्मॉल थिंग्स' पुस्तक के लेखक कौन हैं?",
        options: [
            "Arundhati Roy / अरुंधति रॉय",
            "Vikram Seth / विक्रम सेठ",
            "Salman Rushdie / सलमान रुश्दी",
            "Chetan Bhagat / चेतन भगत"
        ],
        correct: 0,
        subject: "GK"
    },
    {
        id: 47,
        question: "The headquarter of ISRO is located in:",
        questionHindi: "इसरो (ISRO) का मुख्यालय कहाँ स्थित है?",
        options: [
            "Sriharikota / श्रीहरिकोटा",
            "Thiruvananthapuram / तिरुवनंतपुरम",
            "Bengaluru / बेंगलुरु",
            "New Delhi / नई दिल्ली"
        ],
        correct: 2,
        subject: "GK"
    },
    {
        id: 48,
        question: "Which of the following is used in pencils?",
        questionHindi: "पेंसिल में निम्नलिखित में से किसका उपयोग किया जाता है?",
        options: [
            "Graphite / ग्रेफाइट",
            "Silicon / सिलिकॉन",
            "Charcoal / लकड़ी का कोयला",
            "Phosphorus / फास्फोरस"
        ],
        correct: 0,
        subject: "Science"
    },
    {
        id: 49,
        question: "The folk dance 'Jata-Jatin' is related to which state?",
        questionHindi: "लोक नृत्य 'जटा-जतिन' किस राज्य से संबंधित है?",
        options: [
            "Uttar Pradesh / उत्तर प्रदेश",
            "Jharkhand / झारखंड",
            "Bihar / बिहार",
            "Odisha / ओडिशा"
        ],
        correct: 2,
        subject: "Culture"
    },
    {
        id: 50,
        question: "World Water Day is observed on:",
        questionHindi: "विश्व जल दिवस कब मनाया जाता है?",
        options: [
            "22 March / 22 मार्च",
            "22 April / 22 अप्रैल",
            "5 June / 5 जून",
            "1 December / 1 दिसंबर"
        ],
        correct: 0,
        subject: "GK"
    }
];

// Export logic for the exam engine
if (typeof window !== 'undefined') {
    window.siQuestions = siQuestions;
}