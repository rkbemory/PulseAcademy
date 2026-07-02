/* IELTS Listening — practice tests. Each test = 4 sections, 40 questions.
   The 'script' array is read aloud by a text-to-speech engine; every answer is
   spoken verbatim in the script. Original, IELTS-style content. */
window.IELTS = window.IELTS || {}; window.IELTS.data = window.IELTS.data || {};
window.IELTS.data.listening = {
  "listening-1": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Booking a health-check appointment",
        script: [
          { speaker: "Receptionist", text: "Good morning, Riverside Community Clinic, how can I help you?" },
          { speaker: "Caller", text: "Hi, I'd like to book a general health check, please." },
          { speaker: "Receptionist", text: "Of course. Can I take your full name?" },
          { speaker: "Caller", text: "Yes, it's Daniel Foster. That's F-O-S-T-E-R." },
          { speaker: "Receptionist", text: "Thank you. And your date of birth?" },
          { speaker: "Caller", text: "The fourteenth of March, nineteen ninety-two." },
          { speaker: "Receptionist", text: "What's the best phone number to reach you on?" },
          { speaker: "Caller", text: "It's oh seven, double four, one, two, three, nine, eight, six." },
          { speaker: "Receptionist", text: "And your home address?" },
          { speaker: "Caller", text: "It's forty-two Maple Avenue, in the town of Ashford." },
          { speaker: "Receptionist", text: "Great. Do you have a preferred day for the appointment?" },
          { speaker: "Caller", text: "Could I come in on Tuesday?" },
          { speaker: "Receptionist", text: "Tuesday works. We have a slot at nine forty in the morning." },
          { speaker: "Caller", text: "Nine forty is perfect." },
          { speaker: "Receptionist", text: "The standard health check costs forty-five pounds. It includes a blood test." },
          { speaker: "Caller", text: "That's fine. Do I need to do anything to prepare?" },
          { speaker: "Receptionist", text: "Yes, please fast for twelve hours before the blood test, so no food that morning." },
          { speaker: "Caller", text: "Understood. Should I bring anything with me?" },
          { speaker: "Receptionist", text: "Please bring a photo ID and your insurance card." },
          { speaker: "Caller", text: "Will do. Who will I be seeing?" },
          { speaker: "Receptionist", text: "You'll see Doctor Patel. She specialises in preventive medicine." },
          { speaker: "Caller", text: "Thank you very much for your help." }
        ],
        questions: [
          { type: "gap", q: "Patient name: Daniel ____", accept: ["Foster"] },
          { type: "gap", q: "Date of birth: ____ March 1992.", accept: ["14th", "14", "fourteenth"] },
          { type: "gap", q: "Phone number ends in the digits nine, eight, ____.", accept: ["6", "six"] },
          { type: "gap", q: "Address: 42 ____ Avenue.", accept: ["Maple"] },
          { type: "gap", q: "Town: ____.", accept: ["Ashford"] },
          { type: "gap", q: "Appointment day: ____.", accept: ["Tuesday"] },
          { type: "gap", q: "Appointment time: ____ in the morning.", accept: ["9:40", "9.40", "nine forty", "940"] },
          { type: "gap", q: "The health check costs ____ pounds.", accept: ["45", "forty-five", "forty five"] },
          { type: "gap", q: "The patient must fast for ____ hours before the blood test.", accept: ["12", "twelve"] },
          { type: "gap", q: "The doctor's name is Doctor ____.", accept: ["Patel"] }
        ]
      },
      {
        title: "Section 2 — Welcome tour of the Wellness Centre",
        script: [
          { speaker: "Guide", text: "Welcome, everyone, to the new Greenfield Wellness Centre. I'll give you a quick tour." },
          { speaker: "Guide", text: "The centre first opened its doors in twenty nineteen, and it has grown ever since." },
          { speaker: "Guide", text: "We are open from six in the morning until ten at night, seven days a week." },
          { speaker: "Guide", text: "Let's start on the ground floor. Here you'll find the main reception and the cafe." },
          { speaker: "Guide", text: "The cafe serves fresh juices and light meals; it is the most popular spot for members after a workout." },
          { speaker: "Guide", text: "On the first floor is the gym, with cardio machines and free weights." },
          { speaker: "Guide", text: "The second floor holds the swimming pool, which is heated all year round." },
          { speaker: "Guide", text: "The third floor is our quiet zone, used only for yoga and meditation classes." },
          { speaker: "Guide", text: "Now, about membership. The standard plan is thirty pounds a month." },
          { speaker: "Guide", text: "If you'd like personal training, that's an extra fee, and you must book a week in advance." },
          { speaker: "Guide", text: "One important rule: please always bring your own towel to the pool area." },
          { speaker: "Guide", text: "Lockers are free to use, but you must clear them each evening before closing." },
          { speaker: "Guide", text: "Finally, we run a free health talk every Friday afternoon in the seminar room." }
        ],
        questions: [
          { type: "mcq", q: "When did the Wellness Centre first open?", options: ["2015", "2017", "2019", "2021"], answer: 2 },
          { type: "mcq", q: "The centre closes each night at:", options: ["8 pm", "9 pm", "10 pm", "midnight"], answer: 2 },
          { type: "mcq", q: "Which facility is described as the most popular after a workout?", options: ["The gym", "The cafe", "The pool", "The quiet zone"], answer: 1 },
          { type: "mcq", q: "The standard membership plan costs:", options: ["£20 a month", "£30 a month", "£40 a month", "£50 a month"], answer: 1 },
          { type: "mcq", q: "For personal training, members must book:", options: ["a day in advance", "a week in advance", "a month in advance", "on the day"], answer: 1 },
          { type: "match", q: "Ground floor", options: ["A Reception and cafe", "B Gym", "C Swimming pool", "D Yoga and meditation"], answer: 0 },
          { type: "match", q: "First floor", options: ["A Reception and cafe", "B Gym", "C Swimming pool", "D Yoga and meditation"], answer: 1 },
          { type: "match", q: "Second floor", options: ["A Reception and cafe", "B Gym", "C Swimming pool", "D Yoga and meditation"], answer: 2 },
          { type: "match", q: "Third floor", options: ["A Reception and cafe", "B Gym", "C Swimming pool", "D Yoga and meditation"], answer: 3 },
          { type: "gap", q: "Members must always bring their own ____ to the pool area.", accept: ["towel"] }
        ]
      },
      {
        title: "Section 3 — Students discuss a group project",
        script: [
          { speaker: "Tutor", text: "So, Maya and Tom, how is your project on sleep and student health coming along?" },
          { speaker: "Maya", text: "Quite well. We surveyed two hundred students about their sleep habits." },
          { speaker: "Tom", text: "The main finding was that most students sleep fewer than six hours on weeknights." },
          { speaker: "Tutor", text: "Interesting. What surprised you most in the data?" },
          { speaker: "Maya", text: "Honestly, the biggest surprise was how much screen time affected sleep quality." },
          { speaker: "Tom", text: "Yes, that was unexpected. We thought caffeine would be the main factor." },
          { speaker: "Tutor", text: "How did you collect your data?" },
          { speaker: "Maya", text: "We used an online questionnaire, which made it easy to reach a lot of people." },
          { speaker: "Tom", text: "For the next stage, we plan to run some face-to-face interviews for depth." },
          { speaker: "Tutor", text: "Good plan. Now let's assign the writing. Who is doing the introduction?" },
          { speaker: "Maya", text: "I'll take the introduction, since I did most of the background reading." },
          { speaker: "Tom", text: "I'll handle the methods section, because I set up the questionnaire." },
          { speaker: "Tutor", text: "And the results?" },
          { speaker: "Maya", text: "Tom is better with charts, so he should do the results too." },
          { speaker: "Tom", text: "Fine. Then Maya, you take the conclusion." },
          { speaker: "Maya", text: "Agreed, I'll write the conclusion." },
          { speaker: "Tutor", text: "Excellent. Please submit the first draft by the end of the month." }
        ],
        questions: [
          { type: "mcq", q: "How many students did they survey?", options: ["One hundred", "Two hundred", "Three hundred", "Five hundred"], answer: 1 },
          { type: "mcq", q: "The main finding was that most students sleep fewer than:", options: ["five hours", "six hours", "seven hours", "eight hours"], answer: 1 },
          { type: "mcq", q: "What surprised the students most?", options: ["The effect of caffeine", "The effect of screen time", "The effect of exercise", "The effect of diet"], answer: 1 },
          { type: "mcq", q: "For the next stage they plan to use:", options: ["a longer survey", "face-to-face interviews", "a lab experiment", "a diary study"], answer: 1 },
          { type: "mcq", q: "The first draft is due by:", options: ["the end of the week", "the end of the month", "next term", "the exam period"], answer: 1 },
          { type: "match", q: "Introduction", options: ["A Maya", "B Tom"], answer: 0 },
          { type: "match", q: "Methods", options: ["A Maya", "B Tom"], answer: 1 },
          { type: "match", q: "Results", options: ["A Maya", "B Tom"], answer: 1 },
          { type: "match", q: "Conclusion", options: ["A Maya", "B Tom"], answer: 0 },
          { type: "gap", q: "They collected data using an online ____.", accept: ["questionnaire", "survey"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The history of vaccination",
        script: [
          { speaker: "Lecturer", text: "Today's lecture looks at the history of vaccination, one of medicine's greatest achievements." },
          { speaker: "Lecturer", text: "The story begins in seventeen ninety-six, when Edward Jenner tested the first vaccine." },
          { speaker: "Lecturer", text: "Jenner noticed that milkmaids who caught cowpox rarely developed the deadly disease smallpox." },
          { speaker: "Lecturer", text: "He used material from a cowpox sore to protect a young boy, and the method worked." },
          { speaker: "Lecturer", text: "The word vaccine actually comes from the Latin word for cow, which is vacca." },
          { speaker: "Lecturer", text: "A century later, Louis Pasteur extended the idea by developing a vaccine against rabies." },
          { speaker: "Lecturer", text: "Pasteur showed that weakened germs could train the body's immune system to fight infection." },
          { speaker: "Lecturer", text: "In the twentieth century, vaccines helped control diseases such as polio and measles." },
          { speaker: "Lecturer", text: "The greatest triumph came in nineteen eighty, when smallpox was officially declared eradicated." },
          { speaker: "Lecturer", text: "Today, researchers focus on new challenges, including the search for a malaria vaccine." },
          { speaker: "Lecturer", text: "A key modern advance is the messenger RNA vaccine, which delivers instructions rather than a germ." },
          { speaker: "Lecturer", text: "Despite this progress, the main barrier remains hesitancy, that is, public doubt about safety." },
          { speaker: "Lecturer", text: "In summary, vaccination has saved millions of lives and continues to evolve." }
        ],
        questions: [
          { type: "gap", q: "Edward Jenner tested the first vaccine in the year ____.", accept: ["1796", "seventeen ninety-six"] },
          { type: "gap", q: "Jenner observed that milkmaids who caught ____ rarely developed smallpox.", accept: ["cowpox"] },
          { type: "gap", q: "The word 'vaccine' comes from the Latin word for ____.", accept: ["cow", "vacca"] },
          { type: "gap", q: "Louis Pasteur developed a vaccine against ____.", accept: ["rabies"] },
          { type: "gap", q: "Pasteur used ____ germs to train the immune system.", accept: ["weakened"] },
          { type: "gap", q: "Smallpox was declared eradicated in ____.", accept: ["1980", "nineteen eighty"] },
          { type: "gap", q: "Researchers are still searching for a vaccine against ____.", accept: ["malaria"] },
          { type: "gap", q: "A modern advance is the messenger ____ vaccine.", accept: ["RNA"] },
          { type: "gap", q: "The main barrier today is vaccine ____, or public doubt about safety.", accept: ["hesitancy"] },
          { type: "tfng", q: "According to the lecturer, vaccination has saved millions of lives.", answer: 0 }
        ]
      }
    ]
  },
  "listening-2": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Enrolling in a first-aid course",
        script: [
          { speaker: "Officer", text: "Hello, City First-Aid Academy, how can I help you today?" },
          { speaker: "Student", text: "Hi, I'd like to enrol in a first-aid course, please." },
          { speaker: "Officer", text: "Certainly. May I have your name?" },
          { speaker: "Student", text: "Yes, it's Sarah Coleman. Coleman is C-O-L-E-M-A-N." },
          { speaker: "Officer", text: "Thank you. And which course are you interested in?" },
          { speaker: "Student", text: "The weekend course, if there's space." },
          { speaker: "Officer", text: "There is. It runs over two Saturdays. The next one starts on the eighth of June." },
          { speaker: "Student", text: "That suits me. What time does it begin?" },
          { speaker: "Officer", text: "Classes start at ten o'clock and finish at four." },
          { speaker: "Student", text: "And the fee?" },
          { speaker: "Officer", text: "The full course is eighty pounds, which includes a manual." },
          { speaker: "Student", text: "Great. Where are the classes held?" },
          { speaker: "Officer", text: "They're in Room twelve, on the second floor of our building on King Street." },
          { speaker: "Student", text: "Do I need to bring anything?" },
          { speaker: "Officer", text: "Just wear comfortable clothing, as there's a lot of practical work on the floor." },
          { speaker: "Student", text: "Will I get a certificate?" },
          { speaker: "Officer", text: "Yes. You'll receive a certificate that is valid for three years." },
          { speaker: "Student", text: "Perfect. How do I pay?" },
          { speaker: "Officer", text: "You can pay online. I'll email you a link. What's your email?" },
          { speaker: "Student", text: "It's sarah dot coleman at mail dot com." },
          { speaker: "Officer", text: "Got it. You're all booked, Sarah." }
        ],
        questions: [
          { type: "gap", q: "Student surname: ____", accept: ["Coleman"] },
          { type: "gap", q: "Course type: the ____ course.", accept: ["weekend"] },
          { type: "gap", q: "The course runs over two ____.", accept: ["Saturdays", "Saturday"] },
          { type: "gap", q: "Start date: the ____ of June.", accept: ["8th", "8", "eighth"] },
          { type: "gap", q: "Classes finish at ____ o'clock.", accept: ["4", "four"] },
          { type: "gap", q: "Course fee: ____ pounds.", accept: ["80", "eighty"] },
          { type: "gap", q: "Classes are held in Room ____.", accept: ["12", "twelve"] },
          { type: "gap", q: "The building is on ____ Street.", accept: ["King"] },
          { type: "gap", q: "The certificate is valid for ____ years.", accept: ["3", "three"] },
          { type: "gap", q: "Payment method: ____.", accept: ["online"] }
        ]
      },
      {
        title: "Section 2 — Radio talk about a community garden",
        script: [
          { speaker: "Host", text: "Welcome back. Today I'm at the Hillside Community Garden with its founder." },
          { speaker: "Founder", text: "Thanks for coming. The garden was set up five years ago on an empty plot of land." },
          { speaker: "Founder", text: "Our main aim is to give local families a place to grow their own vegetables." },
          { speaker: "Founder", text: "The garden is divided into several areas, each with a different purpose." },
          { speaker: "Founder", text: "Near the entrance is the tool shed, where all our equipment is stored." },
          { speaker: "Founder", text: "Behind the shed is the compost area, where we turn waste into rich soil." },
          { speaker: "Founder", text: "In the centre are the vegetable beds, which are the busiest part of the garden." },
          { speaker: "Founder", text: "At the far end is the pond, which attracts frogs and helps control pests naturally." },
          { speaker: "Founder", text: "We hold a market on the first Sunday of every month to sell our produce." },
          { speaker: "Founder", text: "Anyone can join. The membership fee is just fifteen pounds a year." },
          { speaker: "Founder", text: "New members should note that watering is done early, before eight in the morning." },
          { speaker: "Founder", text: "The most rewarding thing for me has been seeing children learn where food comes from." },
          { speaker: "Founder", text: "This autumn we plan to add a small greenhouse for growing seedlings." }
        ],
        questions: [
          { type: "mcq", q: "The community garden was set up:", options: ["two years ago", "five years ago", "ten years ago", "last year"], answer: 1 },
          { type: "mcq", q: "The main aim of the garden is to:", options: ["make a profit", "grow flowers for sale", "let families grow vegetables", "train professional gardeners"], answer: 2 },
          { type: "mcq", q: "The market is held on:", options: ["the first Sunday of the month", "every Saturday", "the last Friday", "public holidays"], answer: 0 },
          { type: "mcq", q: "The annual membership fee is:", options: ["£10", "£15", "£20", "£25"], answer: 1 },
          { type: "mcq", q: "What does the founder find most rewarding?", options: ["Selling produce", "Winning awards", "Seeing children learn about food", "Meeting the mayor"], answer: 2 },
          { type: "match", q: "Near the entrance", options: ["A Tool shed", "B Compost area", "C Vegetable beds", "D Pond"], answer: 0 },
          { type: "match", q: "Behind the shed", options: ["A Tool shed", "B Compost area", "C Vegetable beds", "D Pond"], answer: 1 },
          { type: "match", q: "In the centre", options: ["A Tool shed", "B Compost area", "C Vegetable beds", "D Pond"], answer: 2 },
          { type: "match", q: "At the far end", options: ["A Tool shed", "B Compost area", "C Vegetable beds", "D Pond"], answer: 3 },
          { type: "gap", q: "Watering must be done before ____ in the morning.", accept: ["8", "eight"] }
        ]
      },
      {
        title: "Section 3 — Planning a presentation on nutrition",
        script: [
          { speaker: "Tutor", text: "Right, Leo and Aisha, let's plan your presentation on nutrition for older adults." },
          { speaker: "Aisha", text: "We were thinking of focusing on the problem of malnutrition in care homes." },
          { speaker: "Leo", text: "Yes, our reading showed that many residents simply don't eat enough protein." },
          { speaker: "Tutor", text: "That's a strong angle. What's your main source going to be?" },
          { speaker: "Aisha", text: "We'll rely mainly on a national health report published last year." },
          { speaker: "Leo", text: "We considered using social media posts, but they weren't reliable enough." },
          { speaker: "Tutor", text: "Wise choice. How long should the presentation be?" },
          { speaker: "Aisha", text: "The guidelines say fifteen minutes, plus five minutes for questions." },
          { speaker: "Tutor", text: "Good. What was the most striking figure you found?" },
          { speaker: "Leo", text: "That one in three residents was at risk of poor nutrition. It really shocked us." },
          { speaker: "Tutor", text: "Now, let's divide the roles. Who will design the slides?" },
          { speaker: "Aisha", text: "Leo is good with software, so he'll design the slides." },
          { speaker: "Leo", text: "And Aisha will do the speaking, since she's more confident presenting." },
          { speaker: "Tutor", text: "What about the handout?" },
          { speaker: "Aisha", text: "I'll prepare the handout as well; I can keep it consistent with my talk." },
          { speaker: "Leo", text: "Then I'll manage the timing on the day, watching the clock." },
          { speaker: "Tutor", text: "Excellent teamwork. Send me your outline by Thursday, please." }
        ],
        questions: [
          { type: "mcq", q: "The presentation focuses on the problem of:", options: ["obesity in children", "malnutrition in care homes", "sugar in drinks", "food waste"], answer: 1 },
          { type: "mcq", q: "Their main source will be:", options: ["social media posts", "a national health report", "a textbook", "interviews"], answer: 1 },
          { type: "mcq", q: "The presentation should last:", options: ["ten minutes", "fifteen minutes", "twenty minutes", "thirty minutes"], answer: 1 },
          { type: "mcq", q: "The most striking figure was that at-risk residents numbered:", options: ["one in two", "one in three", "one in five", "one in ten"], answer: 1 },
          { type: "mcq", q: "The outline is due by:", options: ["Monday", "Wednesday", "Thursday", "Friday"], answer: 2 },
          { type: "match", q: "Designing the slides", options: ["A Leo", "B Aisha"], answer: 0 },
          { type: "match", q: "Doing the speaking", options: ["A Leo", "B Aisha"], answer: 1 },
          { type: "match", q: "Preparing the handout", options: ["A Leo", "B Aisha"], answer: 1 },
          { type: "match", q: "Managing the timing", options: ["A Leo", "B Aisha"], answer: 0 },
          { type: "gap", q: "Many care-home residents do not eat enough ____.", accept: ["protein"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The science of sleep",
        script: [
          { speaker: "Lecturer", text: "In this lecture we will examine the science of sleep and why it matters for health." },
          { speaker: "Lecturer", text: "On average, an adult needs between seven and nine hours of sleep each night." },
          { speaker: "Lecturer", text: "Sleep is not a single state; it moves through several stages in a repeating cycle." },
          { speaker: "Lecturer", text: "Each full cycle lasts about ninety minutes, and we go through four or five per night." },
          { speaker: "Lecturer", text: "The deepest stage is known as slow-wave sleep, when the body repairs its tissues." },
          { speaker: "Lecturer", text: "Dreaming happens mainly in the stage called REM, which stands for rapid eye movement." },
          { speaker: "Lecturer", text: "During REM sleep, the brain is very active and helps to store new memories." },
          { speaker: "Lecturer", text: "The timing of sleep is controlled by an internal clock called the circadian rhythm." },
          { speaker: "Lecturer", text: "This clock responds strongly to light, especially natural daylight in the morning." },
          { speaker: "Lecturer", text: "A key hormone here is melatonin, which the body releases when it gets dark." },
          { speaker: "Lecturer", text: "Poor sleep over time raises the risk of serious problems such as heart disease." },
          { speaker: "Lecturer", text: "One simple piece of advice is to keep a regular bedtime, even at the weekend." },
          { speaker: "Lecturer", text: "To conclude, good sleep is as important for health as diet and exercise." }
        ],
        questions: [
          { type: "gap", q: "An adult needs between seven and ____ hours of sleep per night.", accept: ["9", "nine"] },
          { type: "gap", q: "Each full sleep cycle lasts about ____ minutes.", accept: ["90", "ninety"] },
          { type: "gap", q: "The deepest stage is called ____ sleep, when tissues are repaired.", accept: ["slow-wave", "slow wave", "slow-wave sleep"] },
          { type: "gap", q: "The letters REM stand for rapid eye ____.", accept: ["movement"] },
          { type: "gap", q: "During REM sleep the brain helps to store new ____.", accept: ["memories"] },
          { type: "gap", q: "The internal body clock is called the ____ rhythm.", accept: ["circadian"] },
          { type: "gap", q: "The body clock responds strongly to ____, especially in the morning.", accept: ["light", "daylight"] },
          { type: "gap", q: "The hormone released in the dark is ____.", accept: ["melatonin"] },
          { type: "gap", q: "Poor sleep raises the risk of ____ disease.", accept: ["heart"] },
          { type: "ynng", q: "The lecturer advises keeping a regular bedtime even at the weekend.", answer: 0 }
        ]
      }
    ]
  },
  "listening-3": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Renting a holiday cottage",
        script: [
          { speaker: "Agent", text: "Good afternoon, Lakeview Holiday Lettings, this is Emma speaking." },
          { speaker: "Caller", text: "Hi, I'd like to enquire about renting one of your cottages." },
          { speaker: "Agent", text: "Of course. May I take your name, please?" },
          { speaker: "Caller", text: "Yes, it's James Whitfield. Whitfield is W-H-I-T-F-I-E-L-D." },
          { speaker: "Agent", text: "Thank you, Mr Whitfield. How many people will be staying?" },
          { speaker: "Caller", text: "There will be six of us in total." },
          { speaker: "Agent", text: "We have a lovely place called Rose Cottage that sleeps six. When would you like to come?" },
          { speaker: "Caller", text: "We'd like to arrive on the twentieth of August." },
          { speaker: "Agent", text: "And how many nights are you planning to stay?" },
          { speaker: "Caller", text: "Seven nights, so a full week." },
          { speaker: "Agent", text: "The rate for that week is nine hundred pounds, and that includes all your bedding." },
          { speaker: "Caller", text: "That sounds reasonable. Is there parking?" },
          { speaker: "Agent", text: "Yes, there's a private driveway with space for two cars." },
          { speaker: "Caller", text: "Great. Are pets allowed? We have a small dog." },
          { speaker: "Agent", text: "Yes, we do allow pets, but there is a cleaning charge of thirty pounds." },
          { speaker: "Caller", text: "No problem. What time can we check in?" },
          { speaker: "Agent", text: "Check-in is from three o'clock in the afternoon." },
          { speaker: "Caller", text: "And how do we get the key?" },
          { speaker: "Agent", text: "There's a key safe by the front door. The code is four, eight, one, five." },
          { speaker: "Caller", text: "Perfect. To confirm the booking, do I pay a deposit?" },
          { speaker: "Agent", text: "Yes, a deposit of two hundred pounds secures the dates." },
          { speaker: "Caller", text: "Wonderful, I'll transfer that today. Thank you, Emma." }
        ],
        questions: [
          { type: "gap", q: "Caller surname: ____", accept: ["Whitfield"] },
          { type: "gap", q: "Number of guests: ____", accept: ["6", "six"] },
          { type: "gap", q: "Name of the property: ____ Cottage.", accept: ["Rose"] },
          { type: "gap", q: "Arrival date: the ____ of August.", accept: ["20th", "20", "twentieth"] },
          { type: "gap", q: "Length of stay: ____ nights.", accept: ["7", "seven"] },
          { type: "gap", q: "Weekly rate: ____ pounds.", accept: ["900", "nine hundred"] },
          { type: "gap", q: "The driveway has space for ____ cars.", accept: ["2", "two"] },
          { type: "gap", q: "Pet cleaning charge: ____ pounds.", accept: ["30", "thirty"] },
          { type: "gap", q: "The key safe code is 4, 8, 1, ____.", accept: ["5", "five"] },
          { type: "gap", q: "Deposit required: ____ pounds.", accept: ["200", "two hundred"] }
        ]
      },
      {
        title: "Section 2 — Announcement about a museum",
        script: [
          { speaker: "Curator", text: "Welcome, everyone, to the Harborough Maritime Museum. Let me tell you about your visit." },
          { speaker: "Curator", text: "The museum was founded in nineteen seventy-eight by a group of retired sailors." },
          { speaker: "Curator", text: "We are open every day except Monday, from nine in the morning until half past five." },
          { speaker: "Curator", text: "Entry is free for children, while adults pay a small fee of eight pounds." },
          { speaker: "Curator", text: "The museum is spread across four galleries, each on a different theme." },
          { speaker: "Curator", text: "The ground-floor gallery focuses on early wooden ships and how they were built." },
          { speaker: "Curator", text: "The east wing is devoted to navigation, with old maps and compasses." },
          { speaker: "Curator", text: "The west wing tells the story of fishing communities along our coast." },
          { speaker: "Curator", text: "Upstairs, the top gallery covers modern shipping and container trade." },
          { speaker: "Curator", text: "The most popular exhibit is undoubtedly the full-size lifeboat in the main hall." },
          { speaker: "Curator", text: "We run a guided tour at eleven o'clock, which lasts about an hour." },
          { speaker: "Curator", text: "Please note that photography is allowed, but flash is strictly forbidden." },
          { speaker: "Curator", text: "Finally, our gift shop by the exit sells handmade model boats, perfect as souvenirs." }
        ],
        questions: [
          { type: "mcq", q: "The museum was founded in:", options: ["1968", "1972", "1978", "1988"], answer: 2 },
          { type: "mcq", q: "The museum is closed on:", options: ["Sunday", "Monday", "Tuesday", "Saturday"], answer: 1 },
          { type: "mcq", q: "The adult entry fee is:", options: ["£5", "£6", "£8", "£10"], answer: 2 },
          { type: "mcq", q: "The most popular exhibit is:", options: ["an old map collection", "a full-size lifeboat", "a model ship", "a ship's engine"], answer: 1 },
          { type: "mcq", q: "The guided tour starts at:", options: ["ten o'clock", "eleven o'clock", "noon", "two o'clock"], answer: 1 },
          { type: "match", q: "Ground-floor gallery", options: ["A Early wooden ships", "B Navigation", "C Fishing communities", "D Modern shipping"], answer: 0 },
          { type: "match", q: "East wing", options: ["A Early wooden ships", "B Navigation", "C Fishing communities", "D Modern shipping"], answer: 1 },
          { type: "match", q: "West wing", options: ["A Early wooden ships", "B Navigation", "C Fishing communities", "D Modern shipping"], answer: 2 },
          { type: "match", q: "Top gallery", options: ["A Early wooden ships", "B Navigation", "C Fishing communities", "D Modern shipping"], answer: 3 },
          { type: "gap", q: "Inside the museum, ____ photography is strictly forbidden.", accept: ["flash"] }
        ]
      },
      {
        title: "Section 3 — Discussing a field-trip report",
        script: [
          { speaker: "Tutor", text: "Priya, Sam, let's talk through your report on the coastal field trip." },
          { speaker: "Priya", text: "Sure. The trip focused on how erosion is changing the cliffs at Blackrock Bay." },
          { speaker: "Sam", text: "We measured the cliff at three points and compared them with last year's figures." },
          { speaker: "Tutor", text: "What was the clearest result?" },
          { speaker: "Priya", text: "The cliff had retreated by almost two metres in a single year, which was dramatic." },
          { speaker: "Sam", text: "We expected some change, but not that much. The winter storms were the main cause." },
          { speaker: "Tutor", text: "Did you face any difficulties collecting the data?" },
          { speaker: "Priya", text: "The main problem was the weather, as heavy rain made the ground very slippery." },
          { speaker: "Sam", text: "Next time we'd bring better waterproof equipment to protect the instruments." },
          { speaker: "Tutor", text: "Sensible. Now, let's divide up the report. Who's writing the aims?" },
          { speaker: "Priya", text: "I'll write the aims, since I planned the trip's objectives." },
          { speaker: "Sam", text: "I'll do the equipment section, because I looked after all the tools." },
          { speaker: "Tutor", text: "And the data analysis?" },
          { speaker: "Priya", text: "Sam is stronger at statistics, so he should take the analysis." },
          { speaker: "Sam", text: "Then Priya, you write the recommendations at the end." },
          { speaker: "Priya", text: "Agreed, I'll do the recommendations." },
          { speaker: "Tutor", text: "Great. I'd like the finished report on my desk by the fifteenth." }
        ],
        questions: [
          { type: "mcq", q: "The field trip focused on erosion at:", options: ["Blackrock Bay", "Whitesand Cove", "Redcliff Point", "Greystone Beach"], answer: 0 },
          { type: "mcq", q: "The cliff had retreated by almost:", options: ["one metre", "two metres", "three metres", "five metres"], answer: 1 },
          { type: "mcq", q: "The main cause of the change was:", options: ["human activity", "winter storms", "rising sea levels", "an earthquake"], answer: 1 },
          { type: "mcq", q: "The main difficulty during data collection was:", options: ["broken equipment", "the weather", "lack of time", "access to the site"], answer: 1 },
          { type: "mcq", q: "The finished report is due by the:", options: ["tenth", "twelfth", "fifteenth", "twentieth"], answer: 2 },
          { type: "match", q: "Aims", options: ["A Priya", "B Sam"], answer: 0 },
          { type: "match", q: "Equipment section", options: ["A Priya", "B Sam"], answer: 1 },
          { type: "match", q: "Data analysis", options: ["A Priya", "B Sam"], answer: 1 },
          { type: "match", q: "Recommendations", options: ["A Priya", "B Sam"], answer: 0 },
          { type: "gap", q: "They measured the cliff at ____ points along the bay.", accept: ["3", "three"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The history of coffee",
        script: [
          { speaker: "Lecturer", text: "Today we explore the history of coffee, a drink now enjoyed all over the world." },
          { speaker: "Lecturer", text: "According to legend, coffee was first discovered in Ethiopia by a goat herder." },
          { speaker: "Lecturer", text: "He noticed that his goats became lively after eating the bright red berries of a certain plant." },
          { speaker: "Lecturer", text: "The active ingredient in these berries is a stimulant we now call caffeine." },
          { speaker: "Lecturer", text: "By the fifteenth century, coffee was being grown and traded in the region of Yemen." },
          { speaker: "Lecturer", text: "The first coffee houses appeared in the great city of Constantinople, and they spread quickly." },
          { speaker: "Lecturer", text: "These coffee houses became centres of conversation, and were sometimes called schools of wisdom." },
          { speaker: "Lecturer", text: "When coffee reached Europe in the sixteen hundreds, some people wanted it banned." },
          { speaker: "Lecturer", text: "However, its popularity only grew, especially among writers and merchants." },
          { speaker: "Lecturer", text: "Today, the two main commercial species are known as Arabica and Robusta." },
          { speaker: "Lecturer", text: "Arabica is prized for its smooth flavour, while Robusta contains more caffeine." },
          { speaker: "Lecturer", text: "The largest producer of coffee in the modern world is the country of Brazil." },
          { speaker: "Lecturer", text: "To conclude, coffee has shaped trade, culture, and daily life for over five centuries." }
        ],
        questions: [
          { type: "gap", q: "Coffee was first discovered in ____, according to legend.", accept: ["Ethiopia"] },
          { type: "gap", q: "The stimulant found in coffee berries is called ____.", accept: ["caffeine"] },
          { type: "gap", q: "By the fifteenth century, coffee was traded in the region of ____.", accept: ["Yemen"] },
          { type: "gap", q: "The first coffee houses appeared in the city of ____.", accept: ["Constantinople"] },
          { type: "gap", q: "Coffee houses were sometimes called schools of ____.", accept: ["wisdom"] },
          { type: "gap", q: "The two main commercial species are Arabica and ____.", accept: ["Robusta"] },
          { type: "gap", q: "Arabica is prized for its smooth ____.", accept: ["flavour", "flavor"] },
          { type: "gap", q: "The species with more caffeine is ____.", accept: ["Robusta"] },
          { type: "gap", q: "The largest modern producer of coffee is ____.", accept: ["Brazil"] },
          { type: "tfng", q: "The lecturer says coffee has shaped culture for over five centuries.", answer: 0 }
        ]
      }
    ]
  },
  "listening-4": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Joining a public library",
        script: [
          { speaker: "Librarian", text: "Hello, welcome to Northgate Public Library. How can I help you?" },
          { speaker: "Visitor", text: "Hi, I'd like to sign up for a library membership, please." },
          { speaker: "Librarian", text: "Wonderful. Could I start with your full name?" },
          { speaker: "Visitor", text: "It's Laura Bennett. Bennett is B-E-N-N-E-T-T." },
          { speaker: "Librarian", text: "Thank you. And what's your date of birth?" },
          { speaker: "Visitor", text: "The third of September, two thousand and one." },
          { speaker: "Librarian", text: "Great. What's your current home address?" },
          { speaker: "Visitor", text: "It's nineteen Chestnut Road, in the district of Elmwood." },
          { speaker: "Librarian", text: "And a contact number?" },
          { speaker: "Visitor", text: "Sure, it's oh one, two, two, five, seven, seven, three, one, oh." },
          { speaker: "Librarian", text: "Perfect. Membership itself is completely free." },
          { speaker: "Visitor", text: "That's good to hear. How many books can I borrow at once?" },
          { speaker: "Librarian", text: "You may borrow up to ten items at a time." },
          { speaker: "Visitor", text: "And how long can I keep them?" },
          { speaker: "Librarian", text: "The standard loan period is three weeks, and you can renew online." },
          { speaker: "Visitor", text: "What happens if I return something late?" },
          { speaker: "Librarian", text: "There's a small fine of twenty pence per day for each late item." },
          { speaker: "Visitor", text: "Understood. Do you have computers I can use?" },
          { speaker: "Librarian", text: "Yes, free computer access is available on the first floor." },
          { speaker: "Visitor", text: "Excellent. When does the library close?" },
          { speaker: "Librarian", text: "We close at eight in the evening on weekdays." },
          { speaker: "Visitor", text: "Thank you so much for your help." }
        ],
        questions: [
          { type: "gap", q: "Member surname: ____", accept: ["Bennett"] },
          { type: "gap", q: "Date of birth: the ____ of September 2001.", accept: ["3rd", "3", "third"] },
          { type: "gap", q: "Address: 19 ____ Road.", accept: ["Chestnut"] },
          { type: "gap", q: "District: ____", accept: ["Elmwood"] },
          { type: "gap", q: "Phone number ends in the digits three, one, ____.", accept: ["0", "oh", "zero"] },
          { type: "gap", q: "Members may borrow up to ____ items at once.", accept: ["10", "ten"] },
          { type: "gap", q: "The standard loan period is ____ weeks.", accept: ["3", "three"] },
          { type: "gap", q: "The late fine is ____ pence per day.", accept: ["20", "twenty"] },
          { type: "gap", q: "Free computer access is on the ____ floor.", accept: ["first", "1st"] },
          { type: "gap", q: "On weekdays the library closes at ____ in the evening.", accept: ["8", "eight"] }
        ]
      },
      {
        title: "Section 2 — Talk about a recycling scheme",
        script: [
          { speaker: "Officer", text: "Good evening, and thanks for coming to hear about our new town recycling scheme." },
          { speaker: "Officer", text: "The scheme was launched in twenty twenty-two to cut the amount of waste sent to landfill." },
          { speaker: "Officer", text: "So far, we've reduced household waste by nearly forty per cent, which is a real success." },
          { speaker: "Officer", text: "The system uses four coloured bins, and it's important to use the right one." },
          { speaker: "Officer", text: "The green bin is for garden waste, such as grass clippings and leaves." },
          { speaker: "Officer", text: "The blue bin is for paper and cardboard, flattened where possible." },
          { speaker: "Officer", text: "The brown bin is strictly for food scraps, which we turn into compost." },
          { speaker: "Officer", text: "The grey bin is for general waste that cannot be recycled at all." },
          { speaker: "Officer", text: "Collections happen once a fortnight, always on a Wednesday." },
          { speaker: "Officer", text: "Please put your bins out by seven in the morning on collection day." },
          { speaker: "Officer", text: "One common mistake is putting glass in the blue bin, so please take glass to the bottle bank." },
          { speaker: "Officer", text: "The biggest benefit for residents is a reduction in the annual waste charge." },
          { speaker: "Officer", text: "Next month we'll be handing out free kitchen caddies to help with food waste." }
        ],
        questions: [
          { type: "mcq", q: "The recycling scheme was launched in:", options: ["2018", "2020", "2022", "2024"], answer: 2 },
          { type: "mcq", q: "Household waste has been reduced by nearly:", options: ["twenty per cent", "thirty per cent", "forty per cent", "fifty per cent"], answer: 2 },
          { type: "mcq", q: "Bins are collected:", options: ["every week", "once a fortnight", "once a month", "twice a week"], answer: 1 },
          { type: "mcq", q: "Bins must be put out by:", options: ["six in the morning", "seven in the morning", "eight in the morning", "the night before"], answer: 1 },
          { type: "mcq", q: "The biggest benefit for residents is:", options: ["free bins", "a cleaner park", "a lower waste charge", "a prize draw"], answer: 2 },
          { type: "match", q: "Green bin", options: ["A Garden waste", "B Paper and cardboard", "C Food scraps", "D General waste"], answer: 0 },
          { type: "match", q: "Blue bin", options: ["A Garden waste", "B Paper and cardboard", "C Food scraps", "D General waste"], answer: 1 },
          { type: "match", q: "Brown bin", options: ["A Garden waste", "B Paper and cardboard", "C Food scraps", "D General waste"], answer: 2 },
          { type: "match", q: "Grey bin", options: ["A Garden waste", "B Paper and cardboard", "C Food scraps", "D General waste"], answer: 3 },
          { type: "gap", q: "Glass should be taken to the ____ bank, not the blue bin.", accept: ["bottle"] }
        ]
      },
      {
        title: "Section 3 — Reviewing a psychology experiment",
        script: [
          { speaker: "Tutor", text: "Nadia, Chris, let's review your psychology experiment on memory and music." },
          { speaker: "Nadia", text: "Yes. We tested whether background music affects how well people remember word lists." },
          { speaker: "Chris", text: "We recruited forty volunteers and split them into two equal groups." },
          { speaker: "Tutor", text: "And what did you find?" },
          { speaker: "Nadia", text: "The group in silence remembered more words than the group with music playing." },
          { speaker: "Chris", text: "The difference was bigger than we predicted, which was quite exciting." },
          { speaker: "Tutor", text: "Were there any weaknesses in your design?" },
          { speaker: "Nadia", text: "The main weakness was the small sample size, so the results may not generalise." },
          { speaker: "Chris", text: "If we repeated it, we'd test many more participants to be confident." },
          { speaker: "Tutor", text: "Good reflection. Let's assign the write-up. Who's doing the hypothesis?" },
          { speaker: "Nadia", text: "I'll write the hypothesis, since I designed the research question." },
          { speaker: "Chris", text: "I'll cover the procedure, because I ran most of the test sessions." },
          { speaker: "Tutor", text: "And the discussion?" },
          { speaker: "Nadia", text: "Chris reads more widely, so he should write the discussion." },
          { speaker: "Chris", text: "Then Nadia, you can handle the references at the end." },
          { speaker: "Nadia", text: "Fine, I'll compile the references." },
          { speaker: "Tutor", text: "Perfect. I'll expect your draft by next Tuesday." }
        ],
        questions: [
          { type: "mcq", q: "The experiment tested the effect of background music on:", options: ["reaction time", "memory", "mood", "reading speed"], answer: 1 },
          { type: "mcq", q: "How many volunteers took part?", options: ["twenty", "thirty", "forty", "sixty"], answer: 2 },
          { type: "mcq", q: "The best results came from the group that worked in:", options: ["silence", "loud music", "quiet music", "conversation"], answer: 0 },
          { type: "mcq", q: "The main weakness of the study was:", options: ["biased questions", "the small sample size", "poor equipment", "a short time limit"], answer: 1 },
          { type: "mcq", q: "The draft is due by:", options: ["next Monday", "next Tuesday", "next Friday", "the end of term"], answer: 1 },
          { type: "match", q: "Hypothesis", options: ["A Nadia", "B Chris"], answer: 0 },
          { type: "match", q: "Procedure", options: ["A Nadia", "B Chris"], answer: 1 },
          { type: "match", q: "Discussion", options: ["A Nadia", "B Chris"], answer: 1 },
          { type: "match", q: "References", options: ["A Nadia", "B Chris"], answer: 0 },
          { type: "gap", q: "The volunteers were split into ____ equal groups.", accept: ["2", "two"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The water cycle",
        script: [
          { speaker: "Lecturer", text: "In this session we'll look at the water cycle, the process that moves water around our planet." },
          { speaker: "Lecturer", text: "The cycle is powered by energy from the sun, which drives everything that follows." },
          { speaker: "Lecturer", text: "The first stage is evaporation, when heat turns liquid water into an invisible gas called vapour." },
          { speaker: "Lecturer", text: "Plants add to this through a related process known as transpiration, releasing water from their leaves." },
          { speaker: "Lecturer", text: "As the vapour rises and cools, it changes back into tiny droplets in a stage called condensation." },
          { speaker: "Lecturer", text: "These droplets gather together to form the clouds we see in the sky." },
          { speaker: "Lecturer", text: "When the droplets grow heavy enough, they fall as precipitation, such as rain or snow." },
          { speaker: "Lecturer", text: "Some of this water soaks into the ground, where it is stored in underground layers called aquifers." },
          { speaker: "Lecturer", text: "The rest flows across the surface as runoff, eventually returning to rivers and the sea." },
          { speaker: "Lecturer", text: "The whole system is a closed loop, so the total amount of water on Earth stays roughly constant." },
          { speaker: "Lecturer", text: "Human activity, however, is disturbing the balance, mainly through pollution and climate change." },
          { speaker: "Lecturer", text: "Understanding this cycle is essential for managing our most precious resource, fresh water." },
          { speaker: "Lecturer", text: "To sum up, the water cycle connects the ocean, the atmosphere, and the land in one continuous flow." }
        ],
        questions: [
          { type: "gap", q: "The water cycle is powered by energy from the ____.", accept: ["sun"] },
          { type: "gap", q: "The stage where heat turns water into gas is called ____.", accept: ["evaporation"] },
          { type: "gap", q: "Plants release water from their leaves through ____.", accept: ["transpiration"] },
          { type: "gap", q: "When vapour cools into droplets, the stage is called ____.", accept: ["condensation"] },
          { type: "gap", q: "Water droplets gather to form ____.", accept: ["clouds"] },
          { type: "gap", q: "Rain and snow are both forms of ____.", accept: ["precipitation"] },
          { type: "gap", q: "Underground layers that store water are called ____.", accept: ["aquifers", "aquifer"] },
          { type: "gap", q: "Water flowing across the surface is called ____.", accept: ["runoff", "run-off"] },
          { type: "gap", q: "The lecturer describes the water cycle as a closed ____.", accept: ["loop"] },
          { type: "ynng", q: "The lecturer says human activity is disturbing the water balance.", answer: 0 }
        ]
      }
    ]
  },
  "listening-5": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Reporting a lost bag",
        script: [
          { speaker: "Staff", text: "Good morning, Central Station Lost Property, how can I help you?" },
          { speaker: "Passenger", text: "Hi, I think I left my bag on a train this morning." },
          { speaker: "Staff", text: "I'm sorry to hear that. Let me take some details. What's your name?" },
          { speaker: "Passenger", text: "It's Oliver Grant. Grant is G-R-A-N-T." },
          { speaker: "Staff", text: "Thank you, Mr Grant. Which train were you on?" },
          { speaker: "Passenger", text: "The eight fifteen service heading to Riverton." },
          { speaker: "Staff", text: "And can you describe the bag?" },
          { speaker: "Passenger", text: "It's a medium backpack, dark green, with a broken side zip." },
          { speaker: "Staff", text: "Do you remember which coach you were sitting in?" },
          { speaker: "Passenger", text: "Yes, coach C, near the doors." },
          { speaker: "Staff", text: "What was inside the bag?" },
          { speaker: "Passenger", text: "Mainly a laptop, a set of keys, and a blue umbrella." },
          { speaker: "Staff", text: "Is there anything with your name on it inside?" },
          { speaker: "Passenger", text: "Yes, there's a notebook with my name written on the first page." },
          { speaker: "Staff", text: "That helps. What's a good contact number for you?" },
          { speaker: "Passenger", text: "It's oh seven, nine, nine, three, one, two, four, four, eight." },
          { speaker: "Staff", text: "I'll log this as reference number two, seven, six." },
          { speaker: "Passenger", text: "How long do you keep lost items?" },
          { speaker: "Staff", text: "We hold unclaimed property for thirty days before donating it." },
          { speaker: "Passenger", text: "Thank you. When should I check back?" },
          { speaker: "Staff", text: "Please call again on Friday, and we should have news by then." }
        ],
        questions: [
          { type: "gap", q: "Passenger surname: ____", accept: ["Grant"] },
          { type: "gap", q: "Train destination: ____", accept: ["Riverton"] },
          { type: "gap", q: "Bag colour: dark ____", accept: ["green"] },
          { type: "gap", q: "The passenger was sitting in coach ____.", accept: ["C"] },
          { type: "gap", q: "Item in the bag: a ____ umbrella.", accept: ["blue"] },
          { type: "gap", q: "The passenger's name is written in a ____ inside the bag.", accept: ["notebook"] },
          { type: "gap", q: "Contact number ends in the digits four, four, ____.", accept: ["8", "eight"] },
          { type: "gap", q: "Reference number: two, seven, ____.", accept: ["6", "six"] },
          { type: "gap", q: "Lost items are kept for ____ days.", accept: ["30", "thirty"] },
          { type: "gap", q: "The passenger should call back on ____.", accept: ["Friday"] }
        ]
      },
      {
        title: "Section 2 — Guide to a nature reserve",
        script: [
          { speaker: "Ranger", text: "Welcome, everyone, to Willow Marsh Nature Reserve. I'm your ranger for today." },
          { speaker: "Ranger", text: "The reserve was created in two thousand and five to protect local wetland birds." },
          { speaker: "Ranger", text: "It covers around three hundred hectares, so there's plenty to explore." },
          { speaker: "Ranger", text: "There are several marked trails, and I'll point out where each one leads." },
          { speaker: "Ranger", text: "The red trail is the shortest, taking you straight to the main bird hide." },
          { speaker: "Ranger", text: "The yellow trail loops around the lake and is perfect for spotting ducks." },
          { speaker: "Ranger", text: "The blue trail climbs the hill and offers the best views across the whole marsh." },
          { speaker: "Ranger", text: "The green trail runs through the woodland, where you might see deer at dawn." },
          { speaker: "Ranger", text: "Our most famous resident is the rare bittern, a shy brown bird that is hard to see." },
          { speaker: "Ranger", text: "The visitor centre serves hot drinks and closes at four in the afternoon." },
          { speaker: "Ranger", text: "For safety, please stay on the paths, as parts of the marsh are very deep." },
          { speaker: "Ranger", text: "Dogs are welcome, but they must be kept on a lead at all times." },
          { speaker: "Ranger", text: "We also run a free guided walk every Saturday morning at ten." }
        ],
        questions: [
          { type: "mcq", q: "The reserve was created in:", options: ["2000", "2005", "2010", "2015"], answer: 1 },
          { type: "mcq", q: "The reserve covers around:", options: ["one hundred hectares", "two hundred hectares", "three hundred hectares", "five hundred hectares"], answer: 2 },
          { type: "mcq", q: "The most famous resident of the reserve is the:", options: ["deer", "duck", "bittern", "swan"], answer: 2 },
          { type: "mcq", q: "The visitor centre closes at:", options: ["three o'clock", "four o'clock", "five o'clock", "six o'clock"], answer: 1 },
          { type: "mcq", q: "The free guided walk takes place:", options: ["every Saturday at ten", "every Sunday at nine", "on weekdays", "twice a day"], answer: 0 },
          { type: "match", q: "Red trail", options: ["A To the main bird hide", "B Around the lake", "C Up the hill for views", "D Through the woodland"], answer: 0 },
          { type: "match", q: "Yellow trail", options: ["A To the main bird hide", "B Around the lake", "C Up the hill for views", "D Through the woodland"], answer: 1 },
          { type: "match", q: "Blue trail", options: ["A To the main bird hide", "B Around the lake", "C Up the hill for views", "D Through the woodland"], answer: 2 },
          { type: "match", q: "Green trail", options: ["A To the main bird hide", "B Around the lake", "C Up the hill for views", "D Through the woodland"], answer: 3 },
          { type: "gap", q: "For safety, visitors must stay on the ____.", accept: ["paths", "path"] }
        ]
      },
      {
        title: "Section 3 — Planning a business assignment",
        script: [
          { speaker: "Tutor", text: "Right, Hana and Marcus, let's plan your business assignment on a local cafe." },
          { speaker: "Hana", text: "We've chosen a small cafe called The Corner Cup that opened last year." },
          { speaker: "Marcus", text: "Our task is to suggest ways it could increase its customer numbers." },
          { speaker: "Tutor", text: "Have you identified its main problem?" },
          { speaker: "Hana", text: "Yes, the biggest issue is that very few people visit in the afternoons." },
          { speaker: "Marcus", text: "We think a loyalty card scheme could bring customers back more often." },
          { speaker: "Tutor", text: "That's a practical idea. How will you gather your evidence?" },
          { speaker: "Hana", text: "We'll interview the owner and also survey some of the regular customers." },
          { speaker: "Marcus", text: "We thought about using online reviews, but they were too few to rely on." },
          { speaker: "Tutor", text: "Sensible. Now, who's writing which part? Start with the company background." },
          { speaker: "Hana", text: "I'll write the background, as I've already visited the cafe twice." },
          { speaker: "Marcus", text: "I'll do the market research section, since I designed the survey." },
          { speaker: "Tutor", text: "And the recommendations?" },
          { speaker: "Hana", text: "Marcus is more creative, so he should write the recommendations." },
          { speaker: "Marcus", text: "Then Hana, you take the final summary." },
          { speaker: "Hana", text: "Agreed, I'll write the summary." },
          { speaker: "Tutor", text: "Great. Please email me your plan by Wednesday." }
        ],
        questions: [
          { type: "mcq", q: "The business they chose is a:", options: ["bookshop", "cafe", "gym", "bakery"], answer: 1 },
          { type: "mcq", q: "The cafe's biggest problem is that few people visit in the:", options: ["mornings", "afternoons", "evenings", "weekends"], answer: 1 },
          { type: "mcq", q: "Their main suggested solution is a:", options: ["price cut", "loyalty card scheme", "new menu", "bigger sign"], answer: 1 },
          { type: "mcq", q: "They decided NOT to rely on:", options: ["interviews", "surveys", "online reviews", "the owner"], answer: 2 },
          { type: "mcq", q: "The plan must be emailed by:", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], answer: 2 },
          { type: "match", q: "Company background", options: ["A Hana", "B Marcus"], answer: 0 },
          { type: "match", q: "Market research section", options: ["A Hana", "B Marcus"], answer: 1 },
          { type: "match", q: "Recommendations", options: ["A Hana", "B Marcus"], answer: 1 },
          { type: "match", q: "Final summary", options: ["A Hana", "B Marcus"], answer: 0 },
          { type: "gap", q: "The cafe they chose is called The Corner ____.", accept: ["Cup"] }
        ]
      },
      {
        title: "Section 4 — Lecture: Honey bees and pollination",
        script: [
          { speaker: "Lecturer", text: "Today's lecture is about honey bees and the vital role they play in pollination." },
          { speaker: "Lecturer", text: "A single honey bee colony can contain up to sixty thousand individual insects." },
          { speaker: "Lecturer", text: "At the heart of the colony is one queen, whose main job is to lay eggs." },
          { speaker: "Lecturer", text: "The vast majority of bees are workers, and they are all female." },
          { speaker: "Lecturer", text: "Workers gather a sugary liquid from flowers, which we call nectar." },
          { speaker: "Lecturer", text: "As they move from bloom to bloom, they transfer pollen and so fertilise the plants." },
          { speaker: "Lecturer", text: "Remarkably, bees communicate the location of food through a movement known as the waggle dance." },
          { speaker: "Lecturer", text: "This dance tells other workers both the direction and the distance of the flowers." },
          { speaker: "Lecturer", text: "It is estimated that bees help to pollinate about a third of the food we eat." },
          { speaker: "Lecturer", text: "In recent years, however, bee numbers have been falling in many parts of the world." },
          { speaker: "Lecturer", text: "One major cause of this decline is the widespread use of chemical pesticides." },
          { speaker: "Lecturer", text: "Scientists warn that losing bees would seriously threaten our food supply." },
          { speaker: "Lecturer", text: "To conclude, protecting bees is one of the simplest ways to protect global agriculture." }
        ],
        questions: [
          { type: "gap", q: "A single colony can contain up to ____ thousand insects.", accept: ["60", "sixty"] },
          { type: "gap", q: "The main job of the queen bee is to lay ____.", accept: ["eggs"] },
          { type: "gap", q: "Most bees in the colony are workers, and they are all ____.", accept: ["female"] },
          { type: "gap", q: "The sugary liquid workers gather from flowers is called ____.", accept: ["nectar"] },
          { type: "gap", q: "Bees fertilise plants by transferring ____.", accept: ["pollen"] },
          { type: "gap", q: "Bees share the location of food through the waggle ____.", accept: ["dance"] },
          { type: "gap", q: "The dance shows both the direction and the ____ of the flowers.", accept: ["distance"] },
          { type: "gap", q: "Bees help pollinate about a ____ of the food we eat.", accept: ["third"] },
          { type: "gap", q: "A major cause of bee decline is the use of chemical ____.", accept: ["pesticides", "pesticide"] },
          { type: "tfng", q: "The lecturer warns that losing bees would threaten our food supply.", answer: 0 }
        ]
      }
    ]
  }
};
