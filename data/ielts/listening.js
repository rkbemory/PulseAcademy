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
  }
};
