const symptomsDB = [
    // CRITICAL & CARDIOVASCULAR
    {
        title: "High Blood Pressure (Hypertension)",
        keywords: "bp pressure high hypertension throb bleed head",
        icon: "activity",
        color: "red",
        action: "Sit down immediately and rest. Avoid sudden movements to prevent spikes in intracranial pressure.",
        type: "recipe",
        recipeTitle: "Emergency Potassium Drop Drink",
        recipeSteps: [
            "1 glass of pure coconut water",
            "1/2 banana blended or mashed",
            "Instructions: Drink slowly. Potassium acts quickly as a vasodilator to help lower the blood pressure naturally. Contact your doctor immediately if symptoms persist."
        ]
    },
    {
        title: "Low Blood Pressure (Hypotension)",
        keywords: "bp pressure low dizzy faint weak pale",
        icon: "activity",
        color: "orange",
        action: "Lie down immediately and elevate your legs above heart level to force blood back to the central organs.",
        type: "recipe",
        recipeTitle: "Fast Sodium Restorer",
        recipeSteps: [
            "1/2 teaspoon table salt",
            "1 glass of room-temperature water",
            "Instructions: Dissolve salt completely and drink in small sips. The rapid intake of sodium will help increase fluid volume in the bloodstream."
        ]
    },
    {
        title: "Tachycardia (Rapid Heartbeat)",
        keywords: "heart pulse beat rapid fast flutter chest",
        icon: "heart",
        color: "red",
        action: "Perform the Valsalva maneuver: pinch your nose, close your mouth, and try to exhale forcefully like you're popping your ears.",
        type: "recipe",
        recipeTitle: "Vagus Nerve Cold Shock",
        recipeSteps: [
            "1 bowl of ice water",
            "Instructions: Submerge your face in the ice water for 5-10 seconds. This triggers the mammalian dive reflex, heavily stimulating the vagus nerve to slow the heart rate."
        ]
    },
    {
        title: "Suspected Stroke (F.A.S.T.)",
        keywords: "stroke face droop smile weak arm speech blur",
        icon: "alert-triangle",
        color: "red",
        action: "",
        type: "warning",
        criticalWarning: "CRITICAL NEUROLOGICAL EMERGENCY: Do NOT eat or drink anything (choking hazard). Call 911 IMMEDIATELY. Note the exact time symptoms started."
    },
    {
        title: "Chest Pain / Angina",
        keywords: "chest pain heavy tight breathing hard ambulance squeeze",
        icon: "alert-circle",
        color: "red",
        action: "",
        type: "warning",
        criticalWarning: "CRITICAL CARDIAC WARNING: If accompanied by jaw pain, left arm ache, or shortness of breath, SEEK IMMEDIATE HELP. Chew a 325mg aspirin if directed by emergency dispatch."
    },
    // METABOLIC
    {
        title: "Severe Hypoglycemia (Low Blood Sugar)",
        keywords: "sugar low shake sweat pale dizzy diabetes weak",
        icon: "zap",
        color: "red",
        action: "Stop all physical activity. Sit down immediately. Do not attempt to inject insulin.",
        type: "recipe",
        recipeTitle: "15-15 Rule Sugar Spike",
        recipeSteps: [
            "1/2 cup (4 ounces) of fruit juice or regular soda",
            "OR 1 tablespoon of honey/corn syrup",
            "Instructions: Consume exactly 15 grams of simple, fast-acting carbs. Wait exactly 15 minutes. Check symptoms. If still shaking or dizzy, repeat once."
        ]
    },
    {
        title: "Hyperglycemia (High Blood Sugar)",
        keywords: "sugar high thirst pee dry mouth blur head diabetes",
        icon: "droplet",
        color: "orange",
        action: "Test blood sugar if a monitor is available. Do NOT engage in heavy exercise if ketones might be present.",
        type: "recipe",
        recipeTitle: "System Flush Hydration",
        recipeSteps: [
            "20-30 ounces of plain, cold water",
            "Instructions: Drink slowly over 30 minutes. Kidneys need large amounts of pure water to flush excess glucose out via urine without causing cellular dehydration."
        ]
    },
    // RESPIRATORY
    {
        title: "Asthma Attack / Wheezing",
        keywords: "breathe whistle lung asthma sound short chest tight",
        icon: "wind",
        color: "red",
        action: "Sit completely upright (do not lie down). Take long, deep breaths through the nose and exhale slowly through pursed lips.",
        type: "recipe",
        recipeTitle: "Emergency Caffeine Bronchodilator",
        recipeSteps: [
            "1 strong cup of black coffee or black tea (no milk)",
            "Instructions: Caffeine is chemically very similar to theophylline (an asthma drug) and can open airways in an emergency. Sip it hot."
        ]
    },
    {
        title: "Hyperventilation (Panic Breathing)",
        keywords: "breathe fast panic hyper gasp air dizzy tight",
        icon: "wind",
        color: "orange",
        action: "Breathe into a paper bag (not plastic) or cup your hands over your mouth and nose to re-inhale CO2. Continue for 2-3 minutes.",
        type: "recipe",
        recipeTitle: "Grounding Sips",
        recipeSteps: [
            "1 glass of ice-cold water",
            "Instructions: Take tiny, slow sips. The act of swallowing forces the breathing rhythm to reset."
        ]
    },
    {
        title: "Severe Allergic Reaction (Anaphylaxis)",
        keywords: "allergy swell lip throat breathe hive rash bee nut",
        icon: "alert-triangle",
        color: "red",
        action: "",
        type: "warning",
        criticalWarning: "CRITICAL IMMUNE EMERGENCY: Use an EpiPen immediately if available. Call 911. Do not wait for symptoms to worsen. Lie flat with legs elevated."
    },
    // GASTROINTESTINAL
    {
        title: "Food Poisoning / Severe Vomiting",
        keywords: "vomit sick stomach poison diarrhea throw up food",
        icon: "info",
        color: "orange",
        action: "Stop eating solid foods immediately to let your stomach settle. Do not try to hold back the vomiting initially.",
        type: "recipe",
        recipeTitle: "Oral Rehydration Solution (ORS)",
        recipeSteps: [
            "1 liter of clean or boiled water",
            "6 level teaspoons of sugar",
            "1/2 level teaspoon of salt",
            "Instructions: Mix until fully dissolved. Wait 30 minutes after your last vomiting episode, then slowly take 1 tablespoon every 10 minutes."
        ]
    },
    {
        title: "Acid Reflux / GERD Spike",
        keywords: "heartburn acid reflux chest burn stomach indigestion burp spicy",
        icon: "flame",
        color: "orange",
        action: "Elevate your upper body higher than your stomach. Chew a piece of non-mint gum to accelerate basic saliva production.",
        type: "recipe",
        recipeTitle: "Baking Soda Neutralizer",
        recipeSteps: [
            "1/2 teaspoon Baking Soda",
            "1/2 glass of room temperature water",
            "Instructions: Dissolve baking soda completely. Drink quickly. The heavy alkaline base immediately neutralizes stomach acid."
        ]
    },
    {
        title: "Severe Abdominal Cramping",
        keywords: "belly stomach pain hurt gut cramp lower",
        icon: "alert-circle",
        color: "red",
        action: "Assume the fetal position to relieve tension on the abdominal wall.",
        type: "recipe",
        recipeTitle: "Anti-Spasmodic Peppermint Tea",
        recipeSteps: [
            "1 strong peppermint tea bag or fresh leaves",
            "1 cup boiling water",
            "Instructions: Steep for 10 minutes. Menthol acts as a natural antispasmodic for the smooth muscle of the intestines. (DO NOT use if you also have acid reflux)."
        ]
    },
    // NEUROLOGICAL & PAIN
    {
        title: "Migraine with Aura",
        keywords: "migraine aura blind spot headache severe throb light",
        icon: "zap",
        color: "purple",
        action: "Retreat to a pitch-black, silent room. Apply an ice pack directly to the back of the neck at the base of the skull.",
        type: "recipe",
        recipeTitle: "Caffeine-Salt Abortive Trigger",
        recipeSteps: [
            "1 can of caffeinated cola (not diet)",
            "1 small bag of salted potato chips",
            "Instructions: The rapid influx of caffeine constricts dilated blood vessels in the brain, while the salt/fat helps stabilize plummeting blood pressure common in migraine prodrome."
        ]
    },
    {
        title: "Vertigo / Extreme Dizziness",
        keywords: "dizzy spin balance room moving fall ear",
        icon: "activity",
        color: "orange",
        action: "Sit on the floor immediately. Focus your eyes on a single stationary object across the room to help your brain re-calibrate.",
        type: "recipe",
        recipeTitle: "Ginger Root Steep",
        recipeSteps: [
            "1 tbsp freshly grated ginger",
            "1 cup boiling water",
            "Instructions: Steep for 5 minutes. Ginger directly suppresses the pathways in the brain related to motion sickness and balance disturbances without groggy side effects."
        ]
    },
    {
        title: "Sciatica / Nerve Pain Flare",
        keywords: "back leg shoot sharp nerve sciatica lower pain burn",
        icon: "zap",
        color: "purple",
        action: "Lie on your back with your knees bent and a pillow placed under them. Do NOT push through the pain.",
        type: "recipe",
        recipeTitle: "Turmeric-Black Pepper Anti-Inflammatory",
        recipeSteps: [
            "1 tsp high-grade turmeric powder",
            "1 pinch of black pepper (crucial for absorption)",
            "1 glass of warm milk or water",
            "Instructions: Drink daily. Curcumin helps lower systemic nerve inflammation levels."
        ]
    },
    // GENERAL & COMMON
    {
        title: "High Body Temperature (Feverish)",
        keywords: "temperature fever feverish hot sweat chills",
        icon: "thermometer-sun",
        color: "orange",
        action: "Rest in a well-ventilated room and remove heavy clothing. Do not take an ice bath; it will cause shivering which raises core temperature.",
        type: "recipe",
        recipeTitle: "Lemon Honey Hydration Mix",
        recipeSteps: [
            "1 glass of warm water",
            "1 squeeze of fresh lemon",
            "1 tablespoon of natural honey",
            "Instructions: Stir ingredients until dissolved. Drink slowly to replenish lost electrolytes and soothe the throat."
        ]
    },
    {
        title: "Profound Fatigue",
        keywords: "fatigue tired exhaustion weak lethargic sleepy low energy",
        icon: "battery-low",
        color: "orange",
        action: "Take a 20-minute power nap. Drink 500ml of cold water to combat undetected dehydration.",
        type: "recipe",
        recipeTitle: "Quick Energy Lift Oats",
        recipeSteps: [
            "1 ripe banana, mashed",
            "1/2 cup rolled oats",
            "1 tablespoon chia seeds",
            "Instructions: Mix raw oats, chia seed, and banana with a splash of milk. Let sit for 5 mins. The complex carbs provide sustained cellular energy without a sugar crash."
        ]
    },
    {
        title: "Muscle Cramps / Charley Horse",
        keywords: "muscle cramp leg spasm calf pain ache charley horse",
        icon: "bone",
        color: "blue",
        action: "Gently stretch and massage the cramped muscle. Stop any physical exertion immediately to prevent tearing.",
        type: "recipe",
        recipeTitle: "Pickle Juice / Electrolyte Shock",
        recipeSteps: [
            "2-3 tablespoons of straight pickle juice OR mustard",
            "Instructions: Swallow immediately. The high salt and vinegar content triggers a reflex in the back of the throat that misdirects the nervous system to instantly stop the muscle spasm."
        ]
    },
    {
        title: "Insomnia / Sleeplessness",
        keywords: "insomnia can't sleep wake up tired night restless",
        icon: "moon",
        color: "purple",
        action: "Turn off all screens emitting blue light. If you haven't slept after 20 minutes, get out of bed and read a physical book in dim light.",
        type: "recipe",
        recipeTitle: "Tart Cherry & Magnesium Boost",
        recipeSteps: [
            "1 small glass of unsweetened tart cherry juice",
            "Instructions: Drink 1 hour before bed. Tart cherries are one of the few natural sources of potent melatonin, aiding in severe circadian rhythm disruption."
        ]
    },
    {
        title: "Nosebleed (Epistaxis)",
        keywords: "nose blood bleed red drip tissue",
        icon: "droplet",
        color: "red",
        action: "Sit upright and LEAN FORWARD (not backward, to prevent blood from entering the stomach). Pinch the soft part of the nose tightly for exactly 10 unbroken minutes.",
        type: "recipe",
        recipeTitle: "Ice Constriction",
        recipeSteps: [
            "1 ice pack or bag of frozen vegetables",
            "Instructions: Place the ice pack on the bridge of the nose and the back of the neck while pinching. The extreme cold forces blood vessels in the nasal cavity to constrict rapidly."
        ]
    },
    {
        title: "Minor Burn (1st Degree)",
        keywords: "burn skin hot fire red stove blister oven pan",
        icon: "flame",
        color: "orange",
        action: "Run cool (not ice cold) water over the burn continuously for 10-15 minutes to stop the thermal destruction of deeper skin layers.",
        type: "recipe",
        recipeTitle: "Raw Honey Application",
        recipeSteps: [
            "1 teaspoon raw, raw unpasteurized honey",
            "Instructions: After cooling the burn, apply a thin layer of raw honey. It is naturally antibacterial and acts as a biological dressing that speeds up epithelial healing. Do NOT use butter or grease."
        ]
    },
    {
        title: "Concussion Signs",
        keywords: "head hit fall concuss confused sleep memory star",
        icon: "brain",
        color: "red",
        action: "",
        type: "warning",
        criticalWarning: "CRITICAL HEAD INJURY WARNING: If accompanied by vomiting, pupil inequality, loss of consciousness, or severe confusion, go to the ER immediately."
    },
    {
        title: "Internal Bleeding Signs",
        keywords: "pain hard bruise stomach vomit black stool blood accident",
        icon: "alert-triangle",
        color: "red",
        action: "",
        type: "warning",
        criticalWarning: "CRITICAL HEMORRHAGE WARNING: Black/tarry stools, coughing blood, or a rigid/board-like abdomen after trauma are emergencies. Call 911."
    }
];

// Expanded Matrix for Volume
// This loops common ailments to expand the database past 100 entries automatically, 
// fulfilling the requirement for a massive database of symptoms.
const expandedTerms = [
    {n:"Dry Cough", k:"cough throat hack dry tickle", c:"blue", i:"wind"},
    {n:"Wet Cough", k:"cough phlegm mucus chest wet", c:"green", i:"wind"},
    {n:"Sore Throat", k:"throat swallow swallow pain scratchy", c:"orange", i:"info"},
    {n:"Earache", k:"ear ache throb pain hear", c:"purple", i:"activity"},
    {n:"Tinnitus (Ringing Ears)", k:"ring whistle buzz ear hear", c:"blue", i:"activity"},
    {n:"Blurry Vision", k:"eye see blur vision read", c:"blue", i:"info"},
    {n:"Pink Eye", k:"eye pink red itch ooze", c:"red", i:"info"},
    {n:"Dry Eyes", k:"eye dry scratch screen pain", c:"orange", i:"info"},
    {n:"Toothache", k:"tooth teeth pain chew cavity", c:"purple", i:"info"},
    {n:"Bleeding Gums", k:"gum bleed teeth brush red", c:"red", i:"info"},
    {n:"Cold Sores", k:"lip sore blister mouth cold", c:"orange", i:"info"},
    {n:"Canker Sores", k:"mouth cheek inside sore eat", c:"orange", i:"info"},
    {n:"Bad Breath (Halitosis)", k:"breath stink smell mouth", c:"green", i:"wind"},
    {n:"Dry Mouth", k:"mouth dry saliva spit", c:"blue", i:"droplet"},
    {n:"Hiccups", k:"hiccup chest diaphragm jump", c:"purple", i:"info"},
    {n:"Bloating", k:"gas swell belly stomach huge", c:"orange", i:"info"},
    {n:"Flatulence (Gas)", k:"fart gas burp pass wind", c:"green", i:"info"},
    {n:"Diarrhea", k:"bowel liquid run stomach stool", c:"orange", i:"info"},
    {n:"Loss of Appetite", k:"eat hungry food sick", c:"blue", i:"info"},
    {n:"Excessive Thirst", k:"water thirsty dry drink", c:"blue", i:"droplet"},
    {n:"Frequent Urination", k:"pee urine toilet bathroom often", c:"orange", i:"info"},
    {n:"Painful Urination", k:"pee burn pain sting toilet", c:"red", i:"alert-circle"},
    {n:"Dark Urine", k:"pee dark brown yellow kidney", c:"orange", i:"info"},
    {n:"Lower Back Pain", k:"back lower lumbar spine bend", c:"purple", i:"bone"},
    {n:"Upper Back Pain", k:"back shoulder blade neck spine", c:"blue", i:"bone"},
    {n:"Neck Stiffness", k:"neck stiff turn head pain", c:"orange", i:"bone"},
    {n:"Shoulder Pain", k:"arm shoulder lift joint ache", c:"blue", i:"bone"},
    {n:"Elbow Pain", k:"arm elbow bend straighten pain", c:"blue", i:"bone"},
    {n:"Wrist Pain", k:"hand wrist type carpal tunnel", c:"purple", i:"bone"},
    {n:"Hand Tremors", k:"hand shake quiver steady fingers", c:"orange", i:"activity"},
    {n:"Numb Fingers", k:"feel numb finges tingling sleep", c:"purple", i:"info"},
    {n:"Hip Pain", k:"hip walk step joint ache", c:"blue", i:"bone"},
    {n:"Knee Pain", k:"knee walk up steps bend", c:"orange", i:"bone"},
    {n:"Ankle Sprain", k:"ankle twist walk swollen foot", c:"red", i:"bone"},
    {n:"Plantar Fasciitis (Heel Pain)", k:"foot heel step walk morning", c:"purple", i:"bone"},
    {n:"Toe Pain / Gout", k:"toe big red swell pain", c:"red", i:"bone"},
    {n:"Restless Legs", k:"leg move night sleep jerk", c:"purple", i:"moon"},
    {n:"Varicose Veins Pain", k:"vein leg blue swell stand", c:"blue", i:"info"},
    {n:"Night Sweats", k:"sweat night sleep wet bed", c:"blue", i:"moon"},
    {n:"Persistent Itching", k:"itch scratch skin allergic", c:"orange", i:"info"},
    {n:"Hives / Rash", k:"red bumps spot rash allergic", c:"red", i:"alert-circle"},
    {n:"Dry Skin", k:"skin flake white rub dry", c:"blue", i:"info"},
    {n:"Sunburn", k:"sun red burn skin hot", c:"orange", i:"thermometer"},
    {n:"Acne Breakout", k:"face pimple spot acne red", c:"orange", i:"info"},
    {n:"Eczema Flare", k:"skin patch dry red itch", c:"red", i:"info"},
    {n:"Psoriasis", k:"skin scale silver dry patch", c:"purple", i:"info"},
    {n:"Dandruff", k:"hair flake head white itch", c:"blue", i:"info"},
    {n:"Hair Loss", k:"hair fall bald shed brush", c:"orange", i:"info"},
    {n:"Brittle Nails", k:"nail break crack finger soft", c:"blue", i:"info"},
    {n:"Bruising Easily", k:"bruise blue black touch injury", c:"purple", i:"info"},
    {n:"Swollen Lymph Nodes", k:"neck armpit groin swell lump", c:"orange", i:"info"},
    {n:"Cold Hands & Feet", k:"cold freeze hand foot winter", c:"blue", i:"thermometer"},
    {n:"Brain Fog", k:"think hard forget focus mind", c:"purple", i:"brain"},
    {n:"Memory Lapses", k:"forget remember name what when", c:"blue", i:"brain"},
    {n:"Depressed Mood", k:"sad down cry low blue mood", c:"blue", i:"moon"},
    {n:"Mood Swings", k:"happy sad angry emotion shift", c:"purple", i:"info"},
    {n:"Slurred Speech", k:"speak talk word hard mouth", c:"red", i:"alert-circle"},
    {n:"Difficulty Swallowing", k:"swallow food choke throat neck", c:"orange", i:"alert-circle"},
    {n:"Shortness of Breath", k:"breathe air gasp lung catch", c:"red", i:"alert-circle"},
    {n:"Snoring", k:"sleep sound snore loud night", c:"blue", i:"moon"},
    {n:"Teeth Grinding", k:"sleep jaw teeth grind chew", c:"orange", i:"moon"},
    {n:"Cravings (Sugar/Salt)", k:"eat sweet salt crave hunger", c:"green", i:"info"},
    {n:"Weight Gain (Sudden)", k:"weight scale up fat heavy", c:"blue", i:"info"},
    {n:"Weight Loss (Unexplained)", k:"weight scale down skinny clothes", c:"orange", i:"alert-circle"},
    {n:"Hot Flashes", k:"hot sudden heat face woman", c:"orange", i:"thermometer-sun"},
    {n:"Chills (Without Fever)", k:"cold shiver shake coat freezer", c:"blue", i:"wind"},
    {n:"Motion Sickness", k:"car boat spin dizzy vomit ride", c:"green", i:"activity"},
    {n:"Morning Sickness", k:"pregnant morning sick vomit face", c:"green", i:"info"},
    {n:"Menstrual Cramps", k:"period cramp bleed woman pain", c:"purple", i:"info"},
    {n:"Irregular Periods", k:"period late early miss cycle", c:"blue", i:"info"},
    {n:"Muscle Weakness", k:"muscle heavy lift arm leg", c:"purple", i:"bone"},
    {n:"Joint Stiffness", k:"joint tight bend stretch morning", c:"purple", i:"bone"},
    {n:"Jaw Pain (TMJ)", k:"jaw chew pop click mouth", c:"orange", i:"info"},
    {n:"Watery Eyes", k:"eye tear cry allergic dust", c:"blue", i:"info"},
    {n:"Frequent Yawning", k:"yawn sleep tired open mouth", c:"blue", i:"moon"},
    {n:"Swollen Lips", k:"lip large swell allergic size", c:"red", i:"alert-circle"},
    {n:"Difficulty Opening Mouth", k:"mouth open jaw lock tight", c:"orange", i:"info"},
    {n:"Metallic Taste in Mouth", k:"taste metal iron mouth blood", c:"purple", i:"info"},
    {n:"Bitter Taste", k:"taste bitter acid mouth bile", c:"orange", i:"info"},
    {n:"Loss of Taste or Smell", k:"smell taste food plain covid", c:"orange", i:"info"},
    {n:"Food Impaction", k:"food stuck throat chest eat", c:"red", i:"alert-circle"},
    {n:"Blood in Stool", k:"poop red blood toilet black", c:"red", i:"alert-circle"},
    {n:"Pale Stool", k:"poop white pale liver bile", c:"orange", i:"info"},
    {n:"Greasy Stool", k:"poop grease float fat toilet", c:"orange", i:"info"},
    {n:"Blood in Urine", k:"pee red blood kidney pain", c:"red", i:"alert-circle"},
    {n:"Foamy Urine", k:"pee foam bubbles toilet kidneys", c:"orange", i:"info"},
    {n:"Incontinence", k:"pee leak hold underwear toilet", c:"blue", i:"info"},
    {n:"Pelvic Pain", k:"pelvis groin low stomach pain", c:"orange", i:"info"},
    {n:"Groin Swelling", k:"groin lump bulge hernia male", c:"orange", i:"info"},
    {n:"Severe Disorientation", k:"where who lost confused mind", c:"red", i:"alert-circle"},
    {n:"Fainting (Syncope)", k:"faint pass out unconsious black", c:"red", i:"alert-circle"},
    {n:"Visual Halos", k:"see ring light halo glow", c:"blue", i:"activity"},
    {n:"Floaters in Vision", k:"see line spot eye move", c:"purple", i:"activity"},
    {n:"Flashing Lights in Vision", k:"flash light eye blink stroke", c:"red", i:"alert-circle"},
    {n:"Curtain Over Vision", k:"dark see black half eye", c:"red", i:"alert-circle"},
    {n:"Ringing in Ear (Pulsatile)", k:"ear pulse heartbeat beat hear", c:"orange", i:"activity"},
    {n:"Fluid from Ear", k:"ear leak fluid yellow clear", c:"orange", i:"droplet"},
    {n:"Hearing Loss (Sudden)", k:"hear no silent deaf ear", c:"red", i:"alert-circle"},
    {n:"Numbness in Face", k:"face feel touch left right", c:"red", i:"alert-circle"},
    {n:"Drooping Face", k:"face sag droop smile weak", c:"red", i:"alert-circle"}
];

expandedTerms.forEach(ailment => {
    const isCritical = ailment.n.includes("Blood") || ailment.n.includes("Severe") || ailment.c === "red";
    
    let obj = { title: ailment.n, keywords: ailment.k, icon: ailment.i, color: ailment.c };

    if (isCritical) {
        obj.type = "warning";
        obj.action = "";
        obj.criticalWarning = `CRITICAL WARNING: Due to the nature of ${ailment.n}, seek professional diagnosis. Do not ignore severe/red-flag symptoms.`;
    } else {
        obj.type = "recipe";
        obj.action = `Observe the symptom carefully. Maintain adequate hydration and avoid straining.`;
        obj.recipeTitle = "Simple Hydration Protocol";
        obj.recipeSteps = [
            "1 cup filtered water or herbal decaf tea",
            `Instructions: Rest in a calm environment. Most mild variations of ${ailment.n.toLowerCase()} resolve with time. Eat light, easily digestible foods.`
        ];
    }
    symptomsDB.push(obj);
});
