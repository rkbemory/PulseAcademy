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
  },
  "listening-6": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Booking a venue for a birthday party",
        script: [
          { speaker: "Manager", text: "Good afternoon, Oakwood Function Rooms, this is the bookings desk." },
          { speaker: "Caller", text: "Hi, I'd like to book a room for a birthday party, please." },
          { speaker: "Manager", text: "Wonderful. Can I take your name first?" },
          { speaker: "Caller", text: "It's Helen Marsh. Marsh is M-A-R-S-H." },
          { speaker: "Manager", text: "Thank you, Helen. And what date were you thinking of?" },
          { speaker: "Caller", text: "The twenty-third of August, if it's free." },
          { speaker: "Manager", text: "Let me check. Yes, the twenty-third is available. How many guests are you expecting?" },
          { speaker: "Caller", text: "About sixty people in total." },
          { speaker: "Manager", text: "For sixty guests I'd suggest the Garden Room; it holds up to eighty comfortably." },
          { speaker: "Caller", text: "The Garden Room sounds lovely. What's the hire cost?" },
          { speaker: "Manager", text: "The room hire is two hundred and fifty pounds for the evening." },
          { speaker: "Caller", text: "That's within budget. Does that include any catering?" },
          { speaker: "Manager", text: "Catering is separate. A buffet menu is fifteen pounds per person." },
          { speaker: "Caller", text: "Fine. What time can we have the room until?" },
          { speaker: "Manager", text: "The evening booking runs until midnight, and music must stop by eleven thirty." },
          { speaker: "Caller", text: "Understood. Do you need a deposit?" },
          { speaker: "Manager", text: "Yes, a deposit of fifty pounds secures the date." },
          { speaker: "Caller", text: "No problem. Is there parking?" },
          { speaker: "Manager", text: "There's a free car park at the rear, with space for forty cars." },
          { speaker: "Caller", text: "Great. And who should I contact on the day?" },
          { speaker: "Manager", text: "Ask for the duty supervisor, whose name is Robert." },
          { speaker: "Caller", text: "Perfect, thank you so much." }
        ],
        questions: [
          { type: "gap", q: "Customer surname: ____", accept: ["Marsh"] },
          { type: "gap", q: "Party date: the ____ of August.", accept: ["23rd", "23", "twenty-third"] },
          { type: "gap", q: "Number of guests expected: ____", accept: ["60", "sixty"] },
          { type: "gap", q: "Recommended room: the ____ Room.", accept: ["Garden"] },
          { type: "gap", q: "Room hire cost: ____ pounds.", accept: ["250", "two hundred and fifty"] },
          { type: "gap", q: "Buffet menu: ____ pounds per person.", accept: ["15", "fifteen"] },
          { type: "gap", q: "Music must stop by ____.", accept: ["11:30", "11.30", "eleven thirty", "1130"] },
          { type: "gap", q: "Deposit required: ____ pounds.", accept: ["50", "fifty"] },
          { type: "gap", q: "The car park has space for ____ cars.", accept: ["40", "forty"] },
          { type: "gap", q: "On the day, ask for the duty supervisor, ____.", accept: ["Robert"] }
        ]
      },
      {
        title: "Section 2 — Radio feature on a new city library",
        script: [
          { speaker: "Presenter", text: "This week we visit the brand-new Central City Library, which opened last month." },
          { speaker: "Presenter", text: "The building took three years to construct and cost twelve million pounds." },
          { speaker: "Presenter", text: "It is open every day from eight in the morning until nine at night." },
          { speaker: "Presenter", text: "The library was designed mainly to serve families and young readers." },
          { speaker: "Presenter", text: "Let me guide you through the four levels of this remarkable building." },
          { speaker: "Presenter", text: "The ground floor houses the children's section, full of picture books and toys." },
          { speaker: "Presenter", text: "The first floor is dedicated to fiction and general lending." },
          { speaker: "Presenter", text: "On the second floor you'll find the study and computer area." },
          { speaker: "Presenter", text: "The top floor is a cafe with a roof terrace overlooking the river." },
          { speaker: "Presenter", text: "Membership is completely free for anyone living in the city." },
          { speaker: "Presenter", text: "You can borrow up to fifteen items at a time for three weeks." },
          { speaker: "Presenter", text: "The most popular service so far has been the free coding club for teenagers." },
          { speaker: "Presenter", text: "One rule to remember: mobile phones must be switched to silent throughout." }
        ],
        questions: [
          { type: "mcq", q: "How long did the library take to build?", options: ["One year", "Two years", "Three years", "Five years"], answer: 2 },
          { type: "mcq", q: "The building cost:", options: ["£8 million", "£10 million", "£12 million", "£15 million"], answer: 2 },
          { type: "mcq", q: "The library closes each night at:", options: ["7 pm", "8 pm", "9 pm", "10 pm"], answer: 2 },
          { type: "mcq", q: "The library was designed mainly to serve:", options: ["students", "families and young readers", "researchers", "tourists"], answer: 1 },
          { type: "mcq", q: "The most popular service has been:", options: ["the cafe", "the coding club", "the study area", "the fiction section"], answer: 1 },
          { type: "match", q: "Ground floor", options: ["A Children's section", "B Fiction and lending", "C Study and computers", "D Cafe and terrace"], answer: 0 },
          { type: "match", q: "First floor", options: ["A Children's section", "B Fiction and lending", "C Study and computers", "D Cafe and terrace"], answer: 1 },
          { type: "match", q: "Second floor", options: ["A Children's section", "B Fiction and lending", "C Study and computers", "D Cafe and terrace"], answer: 2 },
          { type: "match", q: "Top floor", options: ["A Children's section", "B Fiction and lending", "C Study and computers", "D Cafe and terrace"], answer: 3 },
          { type: "gap", q: "Members can borrow up to ____ items at a time.", accept: ["15", "fifteen"] }
        ]
      },
      {
        title: "Section 3 — Students plan a geography field trip",
        script: [
          { speaker: "Tutor", text: "Priya, Sam, let's finalise the plans for your coastal geography field trip." },
          { speaker: "Priya", text: "Sure. We've chosen to study the cliffs at Rockmoor Bay." },
          { speaker: "Sam", text: "The main aim is to measure how quickly the coastline is eroding." },
          { speaker: "Tutor", text: "Good. How long will you spend there?" },
          { speaker: "Priya", text: "We're planning a full week, from Monday to Friday." },
          { speaker: "Tutor", text: "What's the biggest challenge you expect?" },
          { speaker: "Sam", text: "Honestly, the weather. Strong winds could make the cliff edge dangerous." },
          { speaker: "Priya", text: "That's why safety is our top priority, above collecting extra data." },
          { speaker: "Tutor", text: "Sensible. Now, let's divide the equipment. Who takes what?" },
          { speaker: "Priya", text: "I'll bring the measuring tapes, since I've used them before." },
          { speaker: "Sam", text: "I'll carry the camera to record the rock layers." },
          { speaker: "Tutor", text: "And the GPS device?" },
          { speaker: "Priya", text: "Sam is better with technology, so he should take the GPS too." },
          { speaker: "Sam", text: "Fine. Then Priya, you look after the first-aid kit." },
          { speaker: "Priya", text: "Agreed, I'll keep the first-aid kit." },
          { speaker: "Tutor", text: "Excellent. Remember to submit your risk assessment before you leave." }
        ],
        questions: [
          { type: "mcq", q: "Which location will they study?", options: ["Rockmoor Bay", "Sandy Cove", "Grey Harbour", "Pebble Point"], answer: 0 },
          { type: "mcq", q: "The main aim of the trip is to measure:", options: ["tides", "coastal erosion", "wildlife", "rainfall"], answer: 1 },
          { type: "mcq", q: "How long will the trip last?", options: ["Two days", "Three days", "A full week", "A weekend"], answer: 2 },
          { type: "mcq", q: "The biggest expected challenge is:", options: ["the cost", "the weather", "the distance", "the paperwork"], answer: 1 },
          { type: "mcq", q: "Their top priority is:", options: ["safety", "extra data", "photos", "speed"], answer: 0 },
          { type: "match", q: "Measuring tapes", options: ["A Priya", "B Sam"], answer: 0 },
          { type: "match", q: "Camera", options: ["A Priya", "B Sam"], answer: 1 },
          { type: "match", q: "GPS device", options: ["A Priya", "B Sam"], answer: 1 },
          { type: "match", q: "First-aid kit", options: ["A Priya", "B Sam"], answer: 0 },
          { type: "gap", q: "They must submit their ____ assessment before leaving.", accept: ["risk"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The history of coffee",
        script: [
          { speaker: "Lecturer", text: "Today we trace the surprising global history of coffee, one of the world's favourite drinks." },
          { speaker: "Lecturer", text: "According to legend, coffee was first discovered in Ethiopia by a goat herder." },
          { speaker: "Lecturer", text: "He noticed his goats became lively after eating the bright red berries of a certain shrub." },
          { speaker: "Lecturer", text: "From Africa, the plant travelled across the Red Sea to the country of Yemen." },
          { speaker: "Lecturer", text: "It was there, in the fifteenth century, that people first roasted and brewed the beans." },
          { speaker: "Lecturer", text: "The first coffee houses appeared in the city of Constantinople and became social hubs." },
          { speaker: "Lecturer", text: "By the seventeenth century, coffee had spread to Europe, reaching London and Paris." },
          { speaker: "Lecturer", text: "In England, coffee houses were nicknamed penny universities, because a cup cost one penny." },
          { speaker: "Lecturer", text: "People gathered there to debate news, business, and politics for hours." },
          { speaker: "Lecturer", text: "The active ingredient that keeps us alert is, of course, caffeine." },
          { speaker: "Lecturer", text: "Today the largest producer of coffee in the world is Brazil, by a wide margin." },
          { speaker: "Lecturer", text: "A modern concern is climate change, which threatens the regions where coffee grows." },
          { speaker: "Lecturer", text: "In summary, coffee has shaped culture and economies for many centuries." }
        ],
        questions: [
          { type: "gap", q: "Coffee was first discovered in ____.", accept: ["Ethiopia"] },
          { type: "gap", q: "It was reportedly discovered by a goat ____.", accept: ["herder"] },
          { type: "gap", q: "The plant travelled across the Red Sea to ____.", accept: ["Yemen"] },
          { type: "gap", q: "Beans were first roasted and brewed in the ____ century.", accept: ["fifteenth", "15th"] },
          { type: "gap", q: "The first coffee houses appeared in the city of ____.", accept: ["Constantinople"] },
          { type: "gap", q: "In England, coffee houses were nicknamed penny ____.", accept: ["universities"] },
          { type: "gap", q: "The active ingredient that keeps us alert is ____.", accept: ["caffeine"] },
          { type: "gap", q: "The world's largest coffee producer today is ____.", accept: ["Brazil"] },
          { type: "gap", q: "A modern concern for coffee growing is ____ change.", accept: ["climate"] },
          { type: "tfng", q: "The lecturer says a cup of coffee cost one penny in early English coffee houses.", answer: 0 }
        ]
      }
    ]
  },
  "listening-7": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Enrolling in an evening language course",
        script: [
          { speaker: "Advisor", text: "Good evening, Bridgeton Adult College, enrolment desk." },
          { speaker: "Learner", text: "Hello, I'd like to sign up for an evening language course." },
          { speaker: "Advisor", text: "Great choice. May I have your name, please?" },
          { speaker: "Learner", text: "Yes, it's James Whitlock. Whitlock is W-H-I-T-L-O-C-K." },
          { speaker: "Advisor", text: "Thank you. Which language would you like to study?" },
          { speaker: "Learner", text: "Spanish, at beginner level." },
          { speaker: "Advisor", text: "Perfect. The beginner Spanish class meets on Wednesday evenings." },
          { speaker: "Learner", text: "What time does it run?" },
          { speaker: "Advisor", text: "From seven until half past eight, so ninety minutes a session." },
          { speaker: "Learner", text: "And when does the course start?" },
          { speaker: "Advisor", text: "The term begins on the twelfth of September and runs for ten weeks." },
          { speaker: "Learner", text: "How much is it?" },
          { speaker: "Advisor", text: "The course fee is one hundred and twenty pounds, plus a textbook." },
          { speaker: "Learner", text: "How much is the textbook?" },
          { speaker: "Advisor", text: "The textbook costs eighteen pounds and you buy it in the first week." },
          { speaker: "Learner", text: "Where is the class held?" },
          { speaker: "Advisor", text: "In Room seven, in the language block behind the main entrance." },
          { speaker: "Learner", text: "Is the teacher experienced?" },
          { speaker: "Advisor", text: "Very. Your tutor is Miss Alvarez, who is a native speaker." },
          { speaker: "Learner", text: "Excellent. How do I confirm my place?" },
          { speaker: "Advisor", text: "Just pay the fee at the front office by Friday to secure your spot." },
          { speaker: "Learner", text: "Thank you, I'll do that." }
        ],
        questions: [
          { type: "gap", q: "Learner surname: ____", accept: ["Whitlock"] },
          { type: "gap", q: "Language chosen: ____", accept: ["Spanish"] },
          { type: "gap", q: "Class day: ____ evenings.", accept: ["Wednesday"] },
          { type: "gap", q: "Class finishes at ____.", accept: ["8:30", "8.30", "half past eight", "830"] },
          { type: "gap", q: "Course start date: the ____ of September.", accept: ["12th", "12", "twelfth"] },
          { type: "gap", q: "The course runs for ____ weeks.", accept: ["10", "ten"] },
          { type: "gap", q: "Course fee: ____ pounds.", accept: ["120", "one hundred and twenty"] },
          { type: "gap", q: "The textbook costs ____ pounds.", accept: ["18", "eighteen"] },
          { type: "gap", q: "Class location: Room ____.", accept: ["7", "seven"] },
          { type: "gap", q: "The tutor's name is Miss ____.", accept: ["Alvarez"] }
        ]
      },
      {
        title: "Section 2 — Audio guide at a science museum",
        script: [
          { speaker: "Guide", text: "Welcome to the National Science Museum audio tour. Let's begin your visit." },
          { speaker: "Guide", text: "This museum was founded in nineteen fifty-two and welcomes a million visitors a year." },
          { speaker: "Guide", text: "It is open daily from ten in the morning until six in the evening." },
          { speaker: "Guide", text: "General admission is free, though special exhibitions require a ticket." },
          { speaker: "Guide", text: "The museum is arranged over four galleries, each with a different theme." },
          { speaker: "Guide", text: "Gallery A explores space and astronomy, including a real moon rock." },
          { speaker: "Guide", text: "Gallery B focuses on the human body, with a giant walk-through heart." },
          { speaker: "Guide", text: "Gallery C is all about energy and the environment." },
          { speaker: "Guide", text: "Gallery D contains transport, from steam trains to electric cars." },
          { speaker: "Guide", text: "Our most famous exhibit is the moon rock, which draws the largest crowds." },
          { speaker: "Guide", text: "Photography is allowed everywhere, but please do not use flash near the screens." },
          { speaker: "Guide", text: "There is a cafe on the lower level serving hot meals until five." },
          { speaker: "Guide", text: "Finally, free science demonstrations take place every hour in the main hall." }
        ],
        questions: [
          { type: "mcq", q: "When was the museum founded?", options: ["1948", "1952", "1960", "1975"], answer: 1 },
          { type: "mcq", q: "The museum closes each day at:", options: ["5 pm", "6 pm", "7 pm", "8 pm"], answer: 1 },
          { type: "mcq", q: "General admission is:", options: ["£5", "£10", "free", "£15"], answer: 2 },
          { type: "mcq", q: "The most famous exhibit is:", options: ["the walk-through heart", "the moon rock", "the steam train", "the electric car"], answer: 1 },
          { type: "mcq", q: "Visitors must not use flash photography near:", options: ["the cafe", "the screens", "the entrance", "the rock"], answer: 1 },
          { type: "match", q: "Gallery A", options: ["A Space and astronomy", "B The human body", "C Energy and environment", "D Transport"], answer: 0 },
          { type: "match", q: "Gallery B", options: ["A Space and astronomy", "B The human body", "C Energy and environment", "D Transport"], answer: 1 },
          { type: "match", q: "Gallery C", options: ["A Space and astronomy", "B The human body", "C Energy and environment", "D Transport"], answer: 2 },
          { type: "match", q: "Gallery D", options: ["A Space and astronomy", "B The human body", "C Energy and environment", "D Transport"], answer: 3 },
          { type: "gap", q: "Free science ____ take place every hour in the main hall.", accept: ["demonstrations", "demos"] }
        ]
      },
      {
        title: "Section 3 — Students review a psychology experiment",
        script: [
          { speaker: "Professor", text: "Leo, Aisha, let's review your psychology experiment on memory and music." },
          { speaker: "Aisha", text: "Of course. We tested whether background music affects how well people remember words." },
          { speaker: "Leo", text: "We recruited forty volunteers and split them into two equal groups." },
          { speaker: "Professor", text: "And what did you find?" },
          { speaker: "Aisha", text: "The group that studied in silence remembered more words than the music group." },
          { speaker: "Leo", text: "The surprising part was that fast music harmed recall more than slow music." },
          { speaker: "Professor", text: "What was the main weakness of your design?" },
          { speaker: "Aisha", text: "The sample was too small to draw firm conclusions, that's our main limitation." },
          { speaker: "Professor", text: "Good self-awareness. How will you improve it next time?" },
          { speaker: "Leo", text: "We'll test a much larger group and use several music styles." },
          { speaker: "Professor", text: "Now, the write-up. Who will do which part?" },
          { speaker: "Aisha", text: "I'll write the literature review, as I gathered all the sources." },
          { speaker: "Leo", text: "I'll do the data analysis, because I ran the statistics." },
          { speaker: "Professor", text: "And the discussion?" },
          { speaker: "Aisha", text: "Leo has more ideas about interpretation, so he should write the discussion." },
          { speaker: "Leo", text: "Then Aisha, you take the abstract at the end." },
          { speaker: "Aisha", text: "Agreed, I'll write the abstract." },
          { speaker: "Professor", text: "Great. Please email me the draft before the seminar." }
        ],
        questions: [
          { type: "mcq", q: "The experiment tested the effect of background music on:", options: ["mood", "memory", "reaction time", "sleep"], answer: 1 },
          { type: "mcq", q: "How many volunteers took part?", options: ["Twenty", "Thirty", "Forty", "Sixty"], answer: 2 },
          { type: "mcq", q: "Who remembered more words?", options: ["the silence group", "the music group", "both equally", "neither group"], answer: 0 },
          { type: "mcq", q: "The main weakness of the study was:", options: ["the noisy room", "the small sample", "the short time", "the old volunteers"], answer: 1 },
          { type: "mcq", q: "To improve, they will test:", options: ["a smaller group", "a larger group", "only children", "only adults"], answer: 1 },
          { type: "match", q: "Literature review", options: ["A Aisha", "B Leo"], answer: 0 },
          { type: "match", q: "Data analysis", options: ["A Aisha", "B Leo"], answer: 1 },
          { type: "match", q: "Discussion", options: ["A Aisha", "B Leo"], answer: 1 },
          { type: "match", q: "Abstract", options: ["A Aisha", "B Leo"], answer: 0 },
          { type: "gap", q: "They found that ____ music harmed recall more than slow music.", accept: ["fast"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The story of chocolate",
        script: [
          { speaker: "Lecturer", text: "Our topic today is chocolate, a food with a rich and ancient history." },
          { speaker: "Lecturer", text: "Chocolate begins as a bean growing on the cacao tree in tropical regions." },
          { speaker: "Lecturer", text: "The ancient Maya were among the first to cultivate and value these beans." },
          { speaker: "Lecturer", text: "They did not eat chocolate as we do; instead they drank it as a bitter beverage." },
          { speaker: "Lecturer", text: "The later Aztecs prized the beans so highly that they used them as a form of money." },
          { speaker: "Lecturer", text: "When Spanish explorers returned to Europe, they carried cacao back with them." },
          { speaker: "Lecturer", text: "Europeans added sugar, which transformed the drink from bitter to sweet." },
          { speaker: "Lecturer", text: "For a long time chocolate remained a luxury enjoyed only by the wealthy." },
          { speaker: "Lecturer", text: "The great change came in the nineteenth century with the invention of the solid chocolate bar." },
          { speaker: "Lecturer", text: "Mass production then made chocolate affordable for ordinary people." },
          { speaker: "Lecturer", text: "Today the biggest cocoa producer in the world is the country of Ghana's neighbour, Ivory Coast." },
          { speaker: "Lecturer", text: "A pressing modern issue is ensuring fair pay for the farmers who grow the beans." },
          { speaker: "Lecturer", text: "In summary, chocolate has journeyed from sacred drink to everyday treat." }
        ],
        questions: [
          { type: "gap", q: "Chocolate begins as a bean growing on the ____ tree.", accept: ["cacao", "cocoa"] },
          { type: "gap", q: "The ancient ____ were among the first to cultivate the beans.", accept: ["Maya"] },
          { type: "gap", q: "Originally chocolate was consumed as a bitter ____.", accept: ["beverage", "drink"] },
          { type: "gap", q: "The Aztecs used the beans as a form of ____.", accept: ["money", "currency"] },
          { type: "gap", q: "____ explorers carried cacao back to Europe.", accept: ["Spanish"] },
          { type: "gap", q: "Europeans added ____ to make the drink sweet.", accept: ["sugar"] },
          { type: "gap", q: "The solid chocolate bar was invented in the ____ century.", accept: ["nineteenth", "19th"] },
          { type: "gap", q: "The world's biggest cocoa producer today is ____ Coast.", accept: ["Ivory"] },
          { type: "gap", q: "A modern issue is ensuring fair ____ for farmers.", accept: ["pay"] },
          { type: "tfng", q: "The lecturer says chocolate was once a luxury for the wealthy only.", answer: 0 }
        ]
      }
    ]
  },
  "listening-8": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Reserving a room at a guesthouse",
        script: [
          { speaker: "Host", text: "Good morning, Willow Tree Guesthouse, how may I help?" },
          { speaker: "Guest", text: "Hello, I'd like to reserve a room for a short stay." },
          { speaker: "Host", text: "Certainly. Could I take your name?" },
          { speaker: "Guest", text: "Yes, it's Nathan Pearce. Pearce is P-E-A-R-C-E." },
          { speaker: "Host", text: "Thank you. When would you like to check in?" },
          { speaker: "Guest", text: "On the seventeenth of October, for three nights." },
          { speaker: "Host", text: "Lovely. Would you prefer a single or a double room?" },
          { speaker: "Guest", text: "A double, please, with a view if possible." },
          { speaker: "Host", text: "We have a double with a garden view at ninety pounds per night." },
          { speaker: "Guest", text: "That sounds good. Is breakfast included?" },
          { speaker: "Host", text: "Yes, a full breakfast is included and served until nine thirty." },
          { speaker: "Guest", text: "Perfect. What time is check-in?" },
          { speaker: "Host", text: "Check-in is from two in the afternoon, and check-out is by eleven." },
          { speaker: "Guest", text: "Do you have parking?" },
          { speaker: "Host", text: "Yes, private parking is available for an extra ten pounds a night." },
          { speaker: "Guest", text: "I'll take it. Is there wifi?" },
          { speaker: "Host", text: "Free wifi throughout; the password is printed in your room." },
          { speaker: "Guest", text: "Great. How do I get there from the station?" },
          { speaker: "Host", text: "We're a ten-minute walk, straight up Elm Road from the station." },
          { speaker: "Guest", text: "Wonderful. Could you send a confirmation?" },
          { speaker: "Host", text: "Of course. Ask for the owner, Mrs Doyle, when you arrive." },
          { speaker: "Guest", text: "Thank you very much." }
        ],
        questions: [
          { type: "gap", q: "Guest surname: ____", accept: ["Pearce"] },
          { type: "gap", q: "Check-in date: the ____ of October.", accept: ["17th", "17", "seventeenth"] },
          { type: "gap", q: "Number of nights: ____", accept: ["3", "three"] },
          { type: "gap", q: "Room type: a ____ room.", accept: ["double"] },
          { type: "gap", q: "Room rate: ____ pounds per night.", accept: ["90", "ninety"] },
          { type: "gap", q: "Breakfast is served until ____.", accept: ["9:30", "9.30", "nine thirty", "930"] },
          { type: "gap", q: "Check-out is by ____ o'clock.", accept: ["11", "eleven"] },
          { type: "gap", q: "Parking costs an extra ____ pounds a night.", accept: ["10", "ten"] },
          { type: "gap", q: "The guesthouse is on ____ Road.", accept: ["Elm"] },
          { type: "gap", q: "On arrival, ask for the owner, Mrs ____.", accept: ["Doyle"] }
        ]
      },
      {
        title: "Section 2 — Briefing for a nature reserve field trip",
        script: [
          { speaker: "Ranger", text: "Welcome, students, to the briefing for tomorrow's trip to Fenwick Nature Reserve." },
          { speaker: "Ranger", text: "The reserve was established in nineteen eighty-eight to protect local wetlands." },
          { speaker: "Ranger", text: "We'll meet at the visitor centre at eight o'clock sharp, so please don't be late." },
          { speaker: "Ranger", text: "The purpose of the trip is mainly to observe migrating birds." },
          { speaker: "Ranger", text: "The reserve is divided into four zones, and I'll explain each one." },
          { speaker: "Ranger", text: "Zone one is the lake, the best place to watch waterbirds." },
          { speaker: "Ranger", text: "Zone two is the woodland, home to deer and woodpeckers." },
          { speaker: "Ranger", text: "Zone three is the reed marsh, where you may spot rare frogs." },
          { speaker: "Ranger", text: "Zone four is the meadow, full of wildflowers and butterflies." },
          { speaker: "Ranger", text: "The one thing you must bring is a pair of sturdy waterproof boots." },
          { speaker: "Ranger", text: "The ground can be very muddy, especially near the marsh." },
          { speaker: "Ranger", text: "Please stay on the marked paths at all times for your own safety." },
          { speaker: "Ranger", text: "And remember, the reserve has a strict rule: no dogs are allowed inside." }
        ],
        questions: [
          { type: "mcq", q: "When was the reserve established?", options: ["1975", "1982", "1988", "1995"], answer: 2 },
          { type: "mcq", q: "The group will meet at the visitor centre at:", options: ["7 o'clock", "8 o'clock", "9 o'clock", "10 o'clock"], answer: 1 },
          { type: "mcq", q: "The main purpose of the trip is to observe:", options: ["insects", "migrating birds", "plants", "fish"], answer: 1 },
          { type: "mcq", q: "Students must bring:", options: ["a camera", "waterproof boots", "a picnic", "binoculars"], answer: 1 },
          { type: "mcq", q: "Which is strictly not allowed in the reserve?", options: ["cameras", "food", "dogs", "children"], answer: 2 },
          { type: "match", q: "Zone one", options: ["A The lake", "B The woodland", "C The reed marsh", "D The meadow"], answer: 0 },
          { type: "match", q: "Zone two", options: ["A The lake", "B The woodland", "C The reed marsh", "D The meadow"], answer: 1 },
          { type: "match", q: "Zone three", options: ["A The lake", "B The woodland", "C The reed marsh", "D The meadow"], answer: 2 },
          { type: "match", q: "Zone four", options: ["A The lake", "B The woodland", "C The reed marsh", "D The meadow"], answer: 3 },
          { type: "gap", q: "Students must stay on the marked ____ at all times.", accept: ["paths", "path"] }
        ]
      },
      {
        title: "Section 3 — Students discuss a business case study",
        script: [
          { speaker: "Tutor", text: "Right, Omar and Grace, tell me about your business case study." },
          { speaker: "Grace", text: "We analysed a small bakery that grew into a national chain." },
          { speaker: "Omar", text: "The key to its success was focusing on one product done extremely well." },
          { speaker: "Tutor", text: "Which product was that?" },
          { speaker: "Grace", text: "Their sourdough bread, which built a loyal customer base." },
          { speaker: "Tutor", text: "What was the biggest risk they faced when expanding?" },
          { speaker: "Omar", text: "The main risk was losing quality control across many new branches." },
          { speaker: "Grace", text: "Exactly. They solved it by training every baker in the same central method." },
          { speaker: "Tutor", text: "Interesting. What lesson do you draw from the case?" },
          { speaker: "Omar", text: "That steady, careful growth beats rushing to expand too fast." },
          { speaker: "Tutor", text: "Now, the presentation. Who covers which part?" },
          { speaker: "Grace", text: "I'll present the company background, since I did that research." },
          { speaker: "Omar", text: "I'll take the financial figures, because I built the spreadsheet." },
          { speaker: "Tutor", text: "And the marketing strategy?" },
          { speaker: "Grace", text: "Omar is more confident with marketing, so he should do that section too." },
          { speaker: "Omar", text: "Then Grace, you handle the recommendations at the end." },
          { speaker: "Grace", text: "Agreed, I'll do the recommendations." },
          { speaker: "Tutor", text: "Excellent. Rehearse it once before you present next week." }
        ],
        questions: [
          { type: "mcq", q: "The business they studied started as a small:", options: ["cafe", "bakery", "farm", "shop"], answer: 1 },
          { type: "mcq", q: "The key to its success was focusing on:", options: ["low prices", "one product", "advertising", "location"], answer: 1 },
          { type: "mcq", q: "Its signature product was:", options: ["cakes", "sourdough bread", "pastries", "coffee"], answer: 1 },
          { type: "mcq", q: "The biggest risk in expanding was:", options: ["high rent", "losing quality control", "staff shortages", "competition"], answer: 1 },
          { type: "mcq", q: "The main lesson is that success comes from:", options: ["rapid expansion", "steady, careful growth", "cutting costs", "heavy borrowing"], answer: 1 },
          { type: "match", q: "Company background", options: ["A Grace", "B Omar"], answer: 0 },
          { type: "match", q: "Financial figures", options: ["A Grace", "B Omar"], answer: 1 },
          { type: "match", q: "Marketing strategy", options: ["A Grace", "B Omar"], answer: 1 },
          { type: "match", q: "Recommendations", options: ["A Grace", "B Omar"], answer: 0 },
          { type: "gap", q: "They kept quality high by training every baker in the same central ____.", accept: ["method"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The history of the bicycle",
        script: [
          { speaker: "Lecturer", text: "Today we examine the humble bicycle and its remarkable evolution." },
          { speaker: "Lecturer", text: "The earliest ancestor appeared in eighteen seventeen and was called the running machine." },
          { speaker: "Lecturer", text: "It had no pedals; the rider simply pushed along the ground with their feet." },
          { speaker: "Lecturer", text: "A major step came when pedals were added directly to the front wheel." },
          { speaker: "Lecturer", text: "This led to the famous penny-farthing, with its enormous front wheel." },
          { speaker: "Lecturer", text: "However, the penny-farthing was dangerous because riders sat so high up." },
          { speaker: "Lecturer", text: "The real breakthrough was the safety bicycle, with two wheels of equal size." },
          { speaker: "Lecturer", text: "It also introduced the chain, which drove the rear wheel efficiently." },
          { speaker: "Lecturer", text: "Comfort improved greatly with the invention of the air-filled rubber tyre." },
          { speaker: "Lecturer", text: "By the early twentieth century, the bicycle had given ordinary people new freedom to travel." },
          { speaker: "Lecturer", text: "It was especially important for women, offering independence and mobility." },
          { speaker: "Lecturer", text: "Today, cycling is promoted worldwide as a clean and healthy form of transport." },
          { speaker: "Lecturer", text: "In summary, the bicycle transformed personal travel across two centuries." }
        ],
        questions: [
          { type: "gap", q: "The earliest ancestor of the bicycle appeared in the year ____.", accept: ["1817", "eighteen seventeen"] },
          { type: "gap", q: "It was called the running ____.", accept: ["machine"] },
          { type: "gap", q: "The first pedals were attached to the ____ wheel.", accept: ["front"] },
          { type: "gap", q: "The bicycle with an enormous front wheel was the ____.", accept: ["penny-farthing", "penny farthing"] },
          { type: "gap", q: "The safety bicycle had two wheels of equal ____.", accept: ["size"] },
          { type: "gap", q: "The safety bicycle used a ____ to drive the rear wheel.", accept: ["chain"] },
          { type: "gap", q: "Comfort improved with the air-filled rubber ____.", accept: ["tyre", "tire"] },
          { type: "gap", q: "The bicycle was especially important for ____, giving them independence.", accept: ["women"] },
          { type: "gap", q: "Today cycling is promoted as a clean and healthy form of ____.", accept: ["transport", "transportation"] },
          { type: "tfng", q: "The lecturer says the penny-farthing was dangerous.", answer: 0 }
        ]
      }
    ]
  },
  "listening-9": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Signing up as a volunteer",
        script: [
          { speaker: "Coordinator", text: "Hello, Harbourside Volunteer Centre, this is the sign-up line." },
          { speaker: "Applicant", text: "Hi, I'd like to become a volunteer, please." },
          { speaker: "Coordinator", text: "Wonderful! Let me take a few details. Your name?" },
          { speaker: "Applicant", text: "It's Emma Bradley. Bradley is B-R-A-D-L-E-Y." },
          { speaker: "Coordinator", text: "Thanks, Emma. What kind of volunteering interests you?" },
          { speaker: "Applicant", text: "I'd love to help at the community garden." },
          { speaker: "Coordinator", text: "Great choice. The garden team works on Saturday mornings." },
          { speaker: "Applicant", text: "That's fine. What hours are they?" },
          { speaker: "Coordinator", text: "From nine until noon, so three hours each week." },
          { speaker: "Applicant", text: "When could I start?" },
          { speaker: "Coordinator", text: "Your first session would be on the fifth of May." },
          { speaker: "Applicant", text: "Do I need any experience?" },
          { speaker: "Coordinator", text: "No experience needed, but you must attend a short training session first." },
          { speaker: "Applicant", text: "How long is the training?" },
          { speaker: "Coordinator", text: "It lasts two hours and covers safety and basic gardening." },
          { speaker: "Applicant", text: "Should I bring anything?" },
          { speaker: "Coordinator", text: "Please bring a pair of gloves; we provide all the other tools." },
          { speaker: "Applicant", text: "Where do we meet?" },
          { speaker: "Coordinator", text: "At the garden gate on Harbour Lane, next to the old mill." },
          { speaker: "Applicant", text: "And who's in charge?" },
          { speaker: "Coordinator", text: "Your team leader is a lovely man called Frank." },
          { speaker: "Applicant", text: "Perfect, thank you so much." }
        ],
        questions: [
          { type: "gap", q: "Applicant surname: ____", accept: ["Bradley"] },
          { type: "gap", q: "Preferred role: helping at the community ____.", accept: ["garden"] },
          { type: "gap", q: "The team works on ____ mornings.", accept: ["Saturday"] },
          { type: "gap", q: "Sessions run from nine until ____.", accept: ["noon", "12", "twelve"] },
          { type: "gap", q: "First session date: the ____ of May.", accept: ["5th", "5", "fifth"] },
          { type: "gap", q: "All volunteers must first attend a ____ session.", accept: ["training"] },
          { type: "gap", q: "The training lasts ____ hours.", accept: ["2", "two"] },
          { type: "gap", q: "Volunteers should bring their own ____.", accept: ["gloves"] },
          { type: "gap", q: "They meet at the garden gate on Harbour ____.", accept: ["Lane"] },
          { type: "gap", q: "The team leader's name is ____.", accept: ["Frank"] }
        ]
      },
      {
        title: "Section 2 — Announcement about a community arts festival",
        script: [
          { speaker: "Organiser", text: "Hello everyone, here is some information about our annual Riverside Arts Festival." },
          { speaker: "Organiser", text: "This will be the tenth year we have run the festival, so it's a special one." },
          { speaker: "Organiser", text: "It takes place over the first weekend of July, on Saturday and Sunday." },
          { speaker: "Organiser", text: "Entry to the whole festival is free for all visitors." },
          { speaker: "Organiser", text: "The festival is spread across four main areas, and I'll describe each." },
          { speaker: "Organiser", text: "The Main Stage hosts live music from morning until evening." },
          { speaker: "Organiser", text: "The Craft Tent is where you can buy handmade pottery and jewellery." },
          { speaker: "Organiser", text: "The Food Court offers dishes from around the world." },
          { speaker: "Organiser", text: "And the Children's Corner has face painting and puppet shows." },
          { speaker: "Organiser", text: "Our headline act this year is a well-known folk band from Ireland." },
          { speaker: "Organiser", text: "Please note that cars cannot enter the site; use the park-and-ride service." },
          { speaker: "Organiser", text: "The park-and-ride bus runs every fifteen minutes from the town square." },
          { speaker: "Organiser", text: "One kind request: please take all your litter home with you." }
        ],
        questions: [
          { type: "mcq", q: "How many years has the festival run?", options: ["Five", "Eight", "Ten", "Twelve"], answer: 2 },
          { type: "mcq", q: "The festival takes place in:", options: ["May", "June", "July", "August"], answer: 2 },
          { type: "mcq", q: "Entry to the festival costs:", options: ["£5", "£10", "nothing", "£20"], answer: 2 },
          { type: "mcq", q: "This year's headline act is a folk band from:", options: ["Scotland", "Ireland", "Wales", "France"], answer: 1 },
          { type: "mcq", q: "The park-and-ride bus runs every:", options: ["ten minutes", "fifteen minutes", "twenty minutes", "half hour"], answer: 1 },
          { type: "match", q: "Main Stage", options: ["A Live music", "B Handmade crafts", "C World food", "D Children's activities"], answer: 0 },
          { type: "match", q: "Craft Tent", options: ["A Live music", "B Handmade crafts", "C World food", "D Children's activities"], answer: 1 },
          { type: "match", q: "Food Court", options: ["A Live music", "B Handmade crafts", "C World food", "D Children's activities"], answer: 2 },
          { type: "match", q: "Children's Corner", options: ["A Live music", "B Handmade crafts", "C World food", "D Children's activities"], answer: 3 },
          { type: "gap", q: "Visitors are asked to take all their ____ home.", accept: ["litter", "rubbish"] }
        ]
      },
      {
        title: "Section 3 — Students plan a research poster",
        script: [
          { speaker: "Supervisor", text: "So, Nadia and Ben, let's plan your poster on urban air quality." },
          { speaker: "Nadia", text: "We measured pollution at five sites across the city over one month." },
          { speaker: "Ben", text: "The clearest result was that pollution peaked during the morning rush hour." },
          { speaker: "Supervisor", text: "Which site was the most polluted?" },
          { speaker: "Nadia", text: "The busy crossroads near the station, without any doubt." },
          { speaker: "Supervisor", text: "What did you find most encouraging?" },
          { speaker: "Ben", text: "The park had the cleanest air, showing how much green space helps." },
          { speaker: "Supervisor", text: "Any limitations to mention?" },
          { speaker: "Nadia", text: "Our sensors were fairly basic, so precision was our main limitation." },
          { speaker: "Supervisor", text: "Noted. Now the poster layout. Who does what?" },
          { speaker: "Nadia", text: "I'll design the graphs, since I'm good with the software." },
          { speaker: "Ben", text: "I'll write the summary text, because I enjoy the writing." },
          { speaker: "Supervisor", text: "And the map of the sites?" },
          { speaker: "Nadia", text: "Ben knows the city better, so he should draw the map too." },
          { speaker: "Ben", text: "Then Nadia, you handle the references list." },
          { speaker: "Nadia", text: "Agreed, I'll compile the references." },
          { speaker: "Supervisor", text: "Great. Print a draft before our meeting on Thursday." }
        ],
        questions: [
          { type: "mcq", q: "The poster is about urban:", options: ["noise", "air quality", "traffic", "housing"], answer: 1 },
          { type: "mcq", q: "They measured pollution at how many sites?", options: ["three", "four", "five", "six"], answer: 2 },
          { type: "mcq", q: "Pollution peaked during:", options: ["the evening", "the morning rush hour", "the night", "the weekend"], answer: 1 },
          { type: "mcq", q: "The cleanest air was found in:", options: ["the station", "the crossroads", "the park", "the market"], answer: 2 },
          { type: "mcq", q: "Their main limitation was:", options: ["too few days", "basic sensors", "bad weather", "small team"], answer: 1 },
          { type: "match", q: "Graphs", options: ["A Nadia", "B Ben"], answer: 0 },
          { type: "match", q: "Summary text", options: ["A Nadia", "B Ben"], answer: 1 },
          { type: "match", q: "Map of sites", options: ["A Nadia", "B Ben"], answer: 1 },
          { type: "match", q: "References list", options: ["A Nadia", "B Ben"], answer: 0 },
          { type: "gap", q: "The most polluted site was the busy ____ near the station.", accept: ["crossroads"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The history of paper",
        script: [
          { speaker: "Lecturer", text: "Our subject today is paper, a material so common we rarely think about it." },
          { speaker: "Lecturer", text: "Before paper, people wrote on materials such as clay tablets and animal skin." },
          { speaker: "Lecturer", text: "The Egyptians famously used a reed plant called papyrus to make writing sheets." },
          { speaker: "Lecturer", text: "However, true paper as we know it was invented in ancient China." },
          { speaker: "Lecturer", text: "It is credited to an official named Cai Lun around the year one hundred and five." },
          { speaker: "Lecturer", text: "He made paper by pounding plant fibres and bark into a wet pulp." },
          { speaker: "Lecturer", text: "The technique spread slowly westward, first reaching the Islamic world." },
          { speaker: "Lecturer", text: "It arrived in Europe several centuries later, transforming record-keeping." },
          { speaker: "Lecturer", text: "The biggest leap came with the printing press, which needed cheap paper in bulk." },
          { speaker: "Lecturer", text: "By the nineteenth century, paper was mostly made from wood pulp." },
          { speaker: "Lecturer", text: "This made paper far cheaper but raised concerns about cutting down forests." },
          { speaker: "Lecturer", text: "Today the focus is on recycling to reduce the demand for new wood." },
          { speaker: "Lecturer", text: "In summary, paper has carried human knowledge for nearly two thousand years." }
        ],
        questions: [
          { type: "gap", q: "Before paper, people wrote on clay tablets and animal ____.", accept: ["skin"] },
          { type: "gap", q: "The Egyptians made writing sheets from a reed plant called ____.", accept: ["papyrus"] },
          { type: "gap", q: "True paper was invented in ancient ____.", accept: ["China"] },
          { type: "gap", q: "Paper is credited to an official named Cai ____.", accept: ["Lun"] },
          { type: "gap", q: "He made paper by pounding plant fibres into a wet ____.", accept: ["pulp"] },
          { type: "gap", q: "The technique first spread to the ____ world before Europe.", accept: ["Islamic"] },
          { type: "gap", q: "Demand for cheap paper in bulk grew with the printing ____.", accept: ["press"] },
          { type: "gap", q: "By the nineteenth century, paper was mostly made from wood ____.", accept: ["pulp"] },
          { type: "gap", q: "Today the focus is on ____ to reduce demand for new wood.", accept: ["recycling"] },
          { type: "tfng", q: "The lecturer says paper was invented in ancient China.", answer: 0 }
        ]
      }
    ]
  },
  "listening-10": {
    instructions: "You will hear four recordings. Answer all 40 questions. For gap answers, write the exact word or number you hear. Answers are auto-checked.",
    sections: [
      {
        title: "Section 1 — Hiring a bicycle for a holiday",
        script: [
          { speaker: "Assistant", text: "Good morning, Lakeside Cycle Hire, how can I help?" },
          { speaker: "Customer", text: "Hi, I'd like to hire a bicycle for a few days." },
          { speaker: "Assistant", text: "Sure. Could I take your name first?" },
          { speaker: "Customer", text: "Yes, it's Oliver Hayes. Hayes is H-A-Y-E-S." },
          { speaker: "Assistant", text: "Thank you. What type of bike would you like?" },
          { speaker: "Customer", text: "A mountain bike, please, for the hill trails." },
          { speaker: "Assistant", text: "Good choice. How many days do you need it?" },
          { speaker: "Customer", text: "Four days, starting this Thursday." },
          { speaker: "Assistant", text: "The mountain bike is fifteen pounds a day, so sixty pounds for four days." },
          { speaker: "Customer", text: "That's fine. Is a helmet included?" },
          { speaker: "Assistant", text: "Yes, a helmet and a lock are both included free of charge." },
          { speaker: "Customer", text: "Great. Do you need a deposit?" },
          { speaker: "Assistant", text: "We ask for a refundable deposit of thirty pounds." },
          { speaker: "Customer", text: "No problem. What time do you open?" },
          { speaker: "Assistant", text: "We open at eight in the morning and close at six." },
          { speaker: "Customer", text: "Where exactly are you located?" },
          { speaker: "Assistant", text: "We're by the pier, on the corner of Marina Road." },
          { speaker: "Customer", text: "Do you sell maps of the trails?" },
          { speaker: "Assistant", text: "We give every customer a free map of the local routes." },
          { speaker: "Customer", text: "Excellent. Anything else I should know?" },
          { speaker: "Assistant", text: "Just return the bike clean, and ask for me, Sophie, on your way out." },
          { speaker: "Customer", text: "Thanks very much, Sophie." }
        ],
        questions: [
          { type: "gap", q: "Customer surname: ____", accept: ["Hayes"] },
          { type: "gap", q: "Bike type requested: a ____ bike.", accept: ["mountain"] },
          { type: "gap", q: "Number of hire days: ____", accept: ["4", "four"] },
          { type: "gap", q: "Hire day chosen: this ____.", accept: ["Thursday"] },
          { type: "gap", q: "Daily rate: ____ pounds a day.", accept: ["15", "fifteen"] },
          { type: "gap", q: "A helmet and a ____ are included free.", accept: ["lock"] },
          { type: "gap", q: "Refundable deposit: ____ pounds.", accept: ["30", "thirty"] },
          { type: "gap", q: "The shop closes at ____ o'clock.", accept: ["6", "six"] },
          { type: "gap", q: "The shop is on the corner of ____ Road.", accept: ["Marina"] },
          { type: "gap", q: "The assistant's name is ____.", accept: ["Sophie"] }
        ]
      },
      {
        title: "Section 2 — Introduction to a recycling centre",
        script: [
          { speaker: "Officer", text: "Welcome to the Greenway Recycling Centre. Here is a quick introduction." },
          { speaker: "Officer", text: "The centre has been running since two thousand and five, serving the whole district." },
          { speaker: "Officer", text: "We are open every day except Monday, from nine until five." },
          { speaker: "Officer", text: "Our main goal is to reduce the amount of waste sent to landfill." },
          { speaker: "Officer", text: "The site is divided into four bays, and I'll tell you what goes in each." },
          { speaker: "Officer", text: "Bay one takes paper and cardboard, flattened where possible." },
          { speaker: "Officer", text: "Bay two is for glass bottles and jars of any colour." },
          { speaker: "Officer", text: "Bay three handles garden waste, such as leaves and grass cuttings." },
          { speaker: "Officer", text: "Bay four is for old electrical items like kettles and toasters." },
          { speaker: "Officer", text: "The item we receive most of, by far, is cardboard packaging." },
          { speaker: "Officer", text: "Please note that we cannot accept any paint or chemicals here." },
          { speaker: "Officer", text: "For those, you must use the special hazardous waste depot in town." },
          { speaker: "Officer", text: "Finally, staff are always happy to help if you are unsure where something goes." }
        ],
        questions: [
          { type: "mcq", q: "The recycling centre has operated since:", options: ["2000", "2005", "2010", "2015"], answer: 1 },
          { type: "mcq", q: "The centre is closed on:", options: ["Sunday", "Monday", "Tuesday", "Saturday"], answer: 1 },
          { type: "mcq", q: "The main goal of the centre is to reduce:", options: ["costs", "waste sent to landfill", "traffic", "energy use"], answer: 1 },
          { type: "mcq", q: "The item received most of all is:", options: ["glass", "cardboard", "garden waste", "electricals"], answer: 1 },
          { type: "mcq", q: "The centre cannot accept:", options: ["glass", "paper", "paint or chemicals", "garden waste"], answer: 2 },
          { type: "match", q: "Bay one", options: ["A Paper and cardboard", "B Glass", "C Garden waste", "D Electrical items"], answer: 0 },
          { type: "match", q: "Bay two", options: ["A Paper and cardboard", "B Glass", "C Garden waste", "D Electrical items"], answer: 1 },
          { type: "match", q: "Bay three", options: ["A Paper and cardboard", "B Glass", "C Garden waste", "D Electrical items"], answer: 2 },
          { type: "match", q: "Bay four", options: ["A Paper and cardboard", "B Glass", "C Garden waste", "D Electrical items"], answer: 3 },
          { type: "gap", q: "Paint and chemicals must go to the special hazardous waste ____.", accept: ["depot"] }
        ]
      },
      {
        title: "Section 3 — Students discuss a history assignment",
        script: [
          { speaker: "Lecturer", text: "Right, Kofi and Lucy, let's talk through your history assignment on ancient trade routes." },
          { speaker: "Lucy", text: "We focused on the Silk Road, which linked Asia and Europe." },
          { speaker: "Kofi", text: "The most important thing traded was not actually silk, but ideas." },
          { speaker: "Lecturer", text: "That's a bold claim. Can you explain?" },
          { speaker: "Lucy", text: "Yes, religions and inventions spread along the route as much as goods did." },
          { speaker: "Lecturer", text: "What was the hardest part of your research?" },
          { speaker: "Kofi", text: "Finding reliable sources was tricky, that was our biggest difficulty." },
          { speaker: "Lecturer", text: "How did you solve that?" },
          { speaker: "Lucy", text: "We relied mainly on the university's digital archive." },
          { speaker: "Lecturer", text: "Good. Now let's split the essay. Who writes what?" },
          { speaker: "Lucy", text: "I'll cover the geography of the route, since I made the map." },
          { speaker: "Kofi", text: "I'll write about the goods traded, because I found the trade records." },
          { speaker: "Lecturer", text: "And the cultural impact?" },
          { speaker: "Lucy", text: "Kofi is more interested in culture, so he should write that section too." },
          { speaker: "Kofi", text: "Then Lucy, you handle the timeline at the end." },
          { speaker: "Lucy", text: "Agreed, I'll build the timeline." },
          { speaker: "Lecturer", text: "Excellent. Hand in the full essay by the end of next week." }
        ],
        questions: [
          { type: "mcq", q: "The assignment focused on the:", options: ["Amber Road", "Silk Road", "Spice Route", "Tea Road"], answer: 1 },
          { type: "mcq", q: "The route linked Europe with:", options: ["Africa", "Asia", "America", "Australia"], answer: 1 },
          { type: "mcq", q: "The students argue the most important thing traded was:", options: ["silk", "gold", "ideas", "spices"], answer: 2 },
          { type: "mcq", q: "Their biggest difficulty was:", options: ["writing the essay", "finding reliable sources", "drawing the map", "meeting the deadline"], answer: 1 },
          { type: "mcq", q: "They mainly used the university's:", options: ["library shelves", "digital archive", "museum", "lecture notes"], answer: 1 },
          { type: "match", q: "Geography of the route", options: ["A Lucy", "B Kofi"], answer: 0 },
          { type: "match", q: "Goods traded", options: ["A Lucy", "B Kofi"], answer: 1 },
          { type: "match", q: "Cultural impact", options: ["A Lucy", "B Kofi"], answer: 1 },
          { type: "match", q: "Timeline", options: ["A Lucy", "B Kofi"], answer: 0 },
          { type: "gap", q: "They argue that religions and inventions spread as much as ____ did.", accept: ["goods"] }
        ]
      },
      {
        title: "Section 4 — Lecture: The history of tea",
        script: [
          { speaker: "Lecturer", text: "Today we look at tea, the second most consumed drink in the world after water." },
          { speaker: "Lecturer", text: "Tea comes from the leaves of an evergreen shrub known as Camellia sinensis." },
          { speaker: "Lecturer", text: "According to legend, tea was discovered in ancient China thousands of years ago." },
          { speaker: "Lecturer", text: "The story says leaves blew into a pot of boiling water belonging to an emperor." },
          { speaker: "Lecturer", text: "For centuries, tea remained mainly an Asian drink, prized in China and Japan." },
          { speaker: "Lecturer", text: "In Japan, drinking tea developed into a formal ceremony full of ritual." },
          { speaker: "Lecturer", text: "Tea reached Europe in the sixteenth century through Portuguese traders." },
          { speaker: "Lecturer", text: "It became especially fashionable in Britain, where afternoon tea was born." },
          { speaker: "Lecturer", text: "Demand grew so much that Britain established vast tea plantations in India." },
          { speaker: "Lecturer", text: "The region of Assam became one of the most famous tea-growing areas." },
          { speaker: "Lecturer", text: "The active substance in tea that provides a mild lift is caffeine." },
          { speaker: "Lecturer", text: "Today, the largest producer of tea in the world is China once again." },
          { speaker: "Lecturer", text: "In summary, tea has connected cultures and economies for many centuries." }
        ],
        questions: [
          { type: "gap", q: "Tea comes from the leaves of a shrub called Camellia ____.", accept: ["sinensis"] },
          { type: "gap", q: "According to legend, tea was discovered in ancient ____.", accept: ["China"] },
          { type: "gap", q: "The legend involves leaves blowing into water belonging to an ____.", accept: ["emperor"] },
          { type: "gap", q: "In Japan, tea drinking developed into a formal ____.", accept: ["ceremony"] },
          { type: "gap", q: "Tea reached Europe through ____ traders.", accept: ["Portuguese"] },
          { type: "gap", q: "In Britain, ____ tea became fashionable.", accept: ["afternoon"] },
          { type: "gap", q: "Britain set up vast tea plantations in ____.", accept: ["India"] },
          { type: "gap", q: "The region of ____ became a famous tea-growing area.", accept: ["Assam"] },
          { type: "gap", q: "The active substance giving tea a mild lift is ____.", accept: ["caffeine"] },
          { type: "tfng", q: "The lecturer says tea is the second most consumed drink after water.", answer: 0 }
        ]
      }
    ]
  }
};
