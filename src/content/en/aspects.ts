import type { DestinyContent, ShieldContent, SoulContent } from "../types";

export const souls: Record<string, SoulContent> = {
  "1": {
    value: 1,
    title: "The hunger to decide alone",
    essence: "You want the choice to be yours, even when nobody sees it.",
    body: "When you are on your own, the weight is less the tiredness than the sense that you handed over the wheel. The hunger is not to be in charge for its own sake. It is to feel that your life is moving in a direction you chose. That is why waiting for permission irritates you so much.",
    strengths: [
      "In private you give yourself permission to try what you postpone in public, so you will not inconvenience anyone.",
      "When something truly matters to you, you find the energy even if the day is already full.",
      "You can name the exact moment a project stopped being yours and turned into an obligation.",
    ],
    frictions: [
      "You tell yourself other people's opinions do not matter, then replay who backed you.",
      "You treat rest as giving up, and you get up before you are ready.",
      "You swallow what you wanted to ask for, and later live with it as a betrayal of yourself.",
    ],
    underPressure:
      "Inside, you lock into combat: you decide faster, you listen less, and you call any doubt a weakness. What you are after is not winning the argument. It is the feeling of control, back in your hands.",
    inRelationships:
      "Your partner or your family need to know when you want company and when you want to sort it out alone. If you never say which, they read distance where you are concentrating, and you read intrusion where they are being kind.",
    blindSpot:
      "You think asking for help costs you authority. What often costs it is carrying everything alone until you snap, and then deciding from a defensive place.",
    microPractice:
      "This week, pick one small decision and tell someone you trust: 'I want to do it this way. Do you see anything I am missing?' Hear them out before you answer.",
  },
  "2": {
    value: 2,
    title: "The hunger to belong",
    essence: "What you want most is to feel that your place is not at risk.",
    body: "Alone, you think less about goals than about belonging: who misses you, who pulled away, whether something you said changed the weather between you. The wish underneath is to stop living as if one wrong step leaves you outside. That is why you memorise tones, silences, and the smallest shifts.",
    strengths: [
      "You remember emotional details from conversations other people have already forgotten.",
      "You sense when someone needs a real 'how are you', not the polite version.",
      "You know how to make a pocket of calm where the difficult thing can actually be said.",
    ],
    frictions: [
      "You match the other person's mood so closely that afterwards you cannot tell what you wanted.",
      "You avoid saying 'no' because you fear the bond will cool, and the resentment piles up.",
      "You read a late reply as rejection before you have considered any other explanation.",
    ],
    underPressure:
      "You shrink, or you over-accommodate. Either you go quiet so you will not make it worse, or you give in on everything to get the peace back quickly. What frightens you is ending up alone on the other side of the conflict.",
    inRelationships:
      "You need to hear, out loud, that they are still there, even while there is tension. A well-timed 'we are all right' is worth more than ten large gestures after a long silence.",
    blindSpot:
      "You think anticipating what the other person needs makes you indispensable. Sometimes it only keeps you from finding out whether they choose you, or the ease you arrange for them.",
    microPractice:
      "In one conversation this week, when you want to give in to avoid friction, say this first: 'I would rather do this.' Wait five seconds before you change your mind.",
  },
  "3": {
    value: 3,
    title: "The need to say it out loud",
    essence: "You need to say it before you know what you feel.",
    body: "Even alone, you think out loud. You write, you record notes, you tell yourself how the day went when nobody is there. What you are hungry for is to be heard properly, not applauded. Go too long without expressing yourself and you do not get bored. You switch off on the inside.",
    strengths: [
      "You find the exact word for something other people only register as discomfort.",
      "You use humour, or a story, to open conversations nobody else was willing to start.",
      "You process faster when you can tell someone and they do not try to fix it.",
    ],
    frictions: [
      "You fill a silence with a joke or an anecdote and step around the question that actually mattered.",
      "Being ignored hurts you more than being contradicted, and that pushes you to exaggerate.",
      "You confuse being the life of the gathering with having been seen emotionally.",
    ],
    underPressure:
      "You talk more, faster, and with more performance. Inside, you want someone to stop you and say 'I am listening'. From the outside it looks as if you only want to lift the mood.",
    inRelationships:
      "You need a stretch of time where you can talk without being interrupted so the problem can be solved. If your partner or your friends only listen in order to advise, you feel alone in the middle of the conversation.",
    blindSpot:
      "You think that if you can make everyone laugh, you are already fine. Sometimes the performance is what protects you from saying 'I did not want to be there today'.",
    microPractice:
      "This week, have a ten-minute conversation where your only job is to describe how you feel, with no joke and no moral. If you are interrupted, say: 'I have not finished.'",
  },
  "4": {
    value: 4,
    title: "The wish that nothing falls apart",
    essence: "What you want most is to trust that things have been done properly.",
    body: "Alone, you run through lists, deadlines, and what could fail. This is not an empty obsession. It is how your emotional system breathes. When the surroundings are chaotic, it is not only efficiency that bothers you. You miss solid ground under your feet.",
    strengths: [
      "You spot the practical detail that will prevent a problem three weeks from now.",
      "You settle once a worry has been turned into concrete steps.",
      "You keep routines going that other people drop at the moment they need them most.",
    ],
    frictions: [
      "An achievement is hard to enjoy, because you are already on to what still needs checking.",
      "You read a change of plan as disregard for the effort already spent.",
      "You require yourself to be the reliable one, and you do not ask for help until you are past full.",
    ],
    underPressure:
      "You become rigid and literal: more rules, less improvisation, a drier tone. What you are reaching for is not to be right. It is the sense that something is still under control.",
    inRelationships:
      "You need clear agreements about who does what, and when. If the ambiguity drags on, you harden, even while you keep doing your part.",
    blindSpot:
      "You think your calm depends on everything being in order. Sometimes what unsettles you is the sentence you have not said: 'this no longer works for me'.",
    microPractice:
      "This week, leave one household or work task deliberately half-finished for an hour. Notice whether the anxiety is care, or fear of letting go of control.",
  },
  "5": {
    value: 5,
    title: "The craving for new air",
    essence: "What you want most is to feel that the door is still open.",
    body: "Alone, you picture change: another pace, another place, another version of you. You are not trying to flee everything. What you fear is staying trapped in a life that repeats without you having chosen it. The hunger is movement that means something, not chaos stirred up by boredom.",
    strengths: [
      "Your spirits come back quickly when you try something different, even something small.",
      "You learn in the middle of things, and you join ideas other people keep apart.",
      "You notice when a routine has stopped feeding you, before it blows up.",
    ],
    frictions: [
      "You leave projects when the novelty drops, even when they were close to bearing fruit.",
      "You read your own restlessness as a sign that something is wrong in the relationship.",
      "You promise to be fully available, and later you need to disappear without warning.",
    ],
    underPressure:
      "You want to move immediately: change the subject, change the plan, change the setting. The feeling of being shut in is what suffocates you. From outside, it can look like carelessness.",
    inRelationships:
      "You need agreements about space and variety, not only about faithfulness or commitment. If everything becomes predictable, you pull away emotionally even while you are still in the room.",
    blindSpot:
      "You think what you are looking for is freedom. Sometimes what you are stepping around is the uncomfortable sentence 'I do want to stay here'.",
    microPractice:
      "Choose something you started and did not finish. This week, give it two hours and do not open anything new. When you stop, write down which part bored you and which part still mattered.",
  },
  "6": {
    value: 6,
    title: "The impulse to care first",
    essence: "You feel all right when your people are all right.",
    body: "Alone, you think about who needs something: a message, a meal, a call. The deep wish is not to be a hero. It is to feel that your love is useful, and not only something you declare. When someone close is suffering, their pain and yours are hard to pull apart.",
    strengths: [
      "You notice early signs of exhaustion in people who say they are fine.",
      "You make room where others dare to ask for help without feeling weak.",
      "When you plan something shared, you remember what matters to each person.",
    ],
    frictions: [
      "You move to fix things before you have asked whether they want to be heard or accompanied.",
      "You resent it when your effort goes unmentioned, even though you never asked for it to be named.",
      "You put your own needs off until the discomfort leaks out as small irritation.",
    ],
    underPressure:
      "You multiply yourself: more availability, more solutions, more guilt if something fails. You fear that if you loosen your grip, the whole thing will land on someone you love.",
    inRelationships:
      "You need plain permission not to be the permanent shelter. A warm 'thank you, I do not need a fix today' brings you back into the bond, and it stops you being used as a tool.",
    blindSpot:
      "You think caring and loving are the same thing. Sometimes the caring is how you protect yourself from saying 'I need something too'.",
    microPractice:
      "This week, ask someone close for one concrete thing: time, a favour, or company. If you feel embarrassed, say that plainly before you start explaining why you deserve it.",
  },
  "7": {
    value: 7,
    title: "The thirst to understand first",
    essence: "You need things to make sense before you can set them down.",
    body: "Alone, you analyse conversations, replay signals, and look for the pattern. It is not coldness. It is how you feel safe in a noisy world. What you are hungry for is a clear account of what is true, not a certainty you are performing. Even affection is difficult when you cannot tell what is happening.",
    strengths: [
      "You catch inconsistencies in a story before other people have named them.",
      "You calm down once you can put a name to whatever disturbed you.",
      "When someone is confused, you offer perspective without turning it into a drama.",
    ],
    frictions: [
      "You withdraw to think at the moment the other person needs you present, not your analysis.",
      "You treat silence as maturity, and you avoid saying 'I do not know'.",
      "You hold intense feeling at a distance until you can rationalise it.",
    ],
    underPressure:
      "You close further: fewer messages, more distance, short replies. You need room to think. From the outside it looks like punishment.",
    inRelationships:
      "You need time to process before you answer while you are still hot. Pushed to react on the spot, you say things you do not fully mean, or you go silent altogether.",
    blindSpot:
      "You think understanding keeps you safe. Sometimes the analysis is how you avoid admitting 'that hurt' or 'I miss you'.",
    microPractice:
      "When something bothers you this week, write one emotional sentence first ('I felt...') and only afterwards three reasons. Share the emotional sentence with someone you trust.",
  },
  "8": {
    value: 8,
    title: "The hunger to matter",
    essence: "You want to feel that what you do leaves a mark you can measure.",
    body: "Alone, you assess whether you moved forward, whether it was worth it, whether anyone noticed the effort. The wish is not vanity. It is the need to exist with an impact. Rest is hard when you feel the time did not turn into a result.",
    strengths: [
      "You turn a vague intention into a plan with deadlines and named owners.",
      "You defend resources, time, and limits when other people dodge the hard conversation.",
      "Your confidence comes back when you can see concrete progress, even a small piece of it.",
    ],
    frictions: [
      "You judge yourself harshly on a day that produces nothing visible.",
      "You measure affection by useful gestures, and words of care on their own leave you frustrated.",
      "Delegating is hard, because nobody else will do it 'the way it ought to be done'.",
    ],
    underPressure:
      "You become more demanding, more direct, and less patient. You fear losing ground. From the outside you can sound cold, or as if you need to control the room.",
    inRelationships:
      "You need the effort recognised in what people do and in what they say. If they only ask for more, and never see what you already gave, you pull away emotionally even while you keep delivering.",
    blindSpot:
      "You think your worth is what you produce. Some of the tiredness comes from having no bond where you are allowed to prove nothing.",
    microPractice:
      "This week, schedule one pleasurable activity with no productive aim: a walk, a meal, music. If guilt shows up, name it out loud and stay with the activity for fifteen minutes anyway.",
  },
  "9": {
    value: 9,
    title: "The wish to set the weight down",
    essence: "You want to close a cycle and feel that something was finished properly.",
    body: "Alone, you carry other people's stories, old memories, and causes you did not start. What you are hungry for is a wide sense of meaning, not martyrdom. You are moved by the idea that your life might serve something larger than your immediate comfort.",
    strengths: [
      "You forgive, or you let go, more quickly once you understand the whole of someone's context.",
      "You connect with people very unlike you, without needing them to think the same way.",
      "You know when a stage has ended, even when admitting it hurts.",
    ],
    frictions: [
      "You step into problems that are not yours, so you do not have to look at your own.",
      "You idealise the people you help, and you get frustrated when they do not change.",
      "Asking for help is hard, because you feel everyone else already has enough to carry.",
    ],
    underPressure:
      "You spill over into generosity, or you withdraw into melancholy. You want something to mean something. From the outside you can seem far away, or given over completely.",
    inRelationships:
      "You need places where you are not the emotional adult of the group. If you are always the one listening, and rarely the one listened to, the bond tips to one side.",
    blindSpot:
      "You think giving without a limit makes you a good person. Sometimes you skip the limit because setting it would mean feeling your own pain.",
    microPractice:
      "This week, decline a favour that is not yours, or postpone it. Say: 'I cannot take that on today.' Notice whether the guilt is telling you something, or whether it is a habit firing on its own.",
  },
  "11": {
    value: 11,
    title: "Sensitivity with no dimmer",
    essence: "You feel it before you can explain it.",
    body: "Alone, you process signals other people have not named yet: a tone, a pause, a strange charge in the house. The wish is to live at that intensity without being called dramatic. You need rooms where your intuition does not have to defend itself with logic.",
    strengths: [
      "You catch a shift in someone before they are willing to admit it.",
      "People trust you because they feel you are actually taking them in.",
      "Creative links arrive when the room is safe and quiet.",
    ],
    frictions: [
      "You absorb someone else's mood and then treat it as if it started in you.",
      "Stimulation piles up, and afterwards you cannot tell what exhausted you.",
      "You put practical decisions off while you wait for a clear signal from inside.",
    ],
    underPressure:
      "Your body answers first: tension, broken sleep, an urge to leave. You are looking for calm. Other people may read you as dramatic, or as distant.",
    inRelationships:
      "You need them to take your perception seriously before you have proof. Meeting it with 'you are making that up' closes the channel you connect through most.",
    blindSpot:
      "You think feeling more gives you an edge. Sometimes you do not rest, because an inner alarm and an outer fact have become the same thing in your mind.",
    microPractice:
      "Twice this week, before you act on a hunch, ask yourself: 'Is this mine, theirs, or mixed?' Write the answer down. Act after that, not before.",
  },
  "22": {
    value: 22,
    title: "The ambition you keep quiet",
    essence: "You dream on a large scale, and you demand it of yourself in silence.",
    body: "Alone, you see whole structures: what could exist if someone held it with discipline. The hunger is not fame. It is to build something that lasts longer than the impulse that started it. You get frustrated when other people cannot see the scale of what you are picturing.",
    strengths: [
      "You keep long projects alive after other people have lost interest.",
      "You turn an abstract vision into steps someone else can actually carry out.",
      "You hold a high standard without needing applause to keep going.",
    ],
    frictions: [
      "You punish yourself for resting, because rest feels like lost ground.",
      "Partial progress is hard to celebrate if it does not yet resemble the finished thing.",
      "You expect other people to know what you need without being told.",
    ],
    underPressure:
      "You tighten into perfectionism, and other people's mistakes get less room. You fear that one small failure will wipe out years of effort.",
    inRelationships:
      "You need people to respect the pace at which you build. A joke about 'working too much' can sound light to them. To you it sounds like contempt for the thing you are trying to make.",
    blindSpot:
      "You think enduring it alone proves strength. Sometimes you do not ask for support because you have already decided nobody will meet the standard you are holding.",
    microPractice:
      "This week, show someone close one small step forward on a large project. Ask for a single concrete observation. You are not asking permission to continue.",
  },
  "33": {
    value: 33,
    title: "The impulse to hold without asking",
    essence: "You want people to breathe more easily after they have been with you.",
    body: "Alone, you replay conversations where someone was left in a bad state, and you ask yourself how to hold them better next time. The wish is not to save everyone. It is to feel that your presence eases things. Admitting what it costs you is hard, because your own need sounds, to you, like selfishness.",
    strengths: [
      "You can put a difficult feeling into words that do not humiliate the person feeling it.",
      "You can tell when someone needs holding, and when they need the truth said straight.",
      "People trust you because what they tell you does not come back later as a weapon.",
    ],
    frictions: [
      "You make yourself indispensable, and then it hurts that they only come when there is a crisis.",
      "Love and being permanently available have become the same idea.",
      "You empty yourself by listening, and you call it strength that you never ask for anything back.",
    ],
    underPressure:
      "You keep showing up for other people even when you are already running on empty. The exhaustion arrives all at once. It does not creep.",
    inRelationships:
      "You need bonds where someone also asks 'and you?', without you having to open that door every time. Care that goes both ways matters to you, and asking for it is still hard.",
    blindSpot:
      "You think holding everyone up is proof of love. Sometimes you will not say 'I cannot today', because you are afraid you will stop being valuable if you do.",
    microPractice:
      "This week, when someone unburdens themselves to you, listen all the way through and then ask: 'Do you want advice, or company?' Keep some energy for yourself afterwards.",
  },
};

export const shields: Record<string, ShieldContent> = {
  "1": {
    value: 1,
    title: "The face that does not hesitate",
    essence: "You look sure of yourself before anyone has asked.",
    body: "You arrive with the posture of someone who has already decided, even while you are still testing it inside. People read you as a natural leader, and they sometimes hand you responsibilities you never requested. That face protects the vulnerability of not knowing. It also isolates you on the days you need to say 'not yet'.",
    strengths: [
      "In a new meeting you take the floor when the silence has gone on too long.",
      "You project a clear direction even while the plan is still a draft.",
      "People come to you to unblock the small decisions of an ordinary day.",
    ],
    frictions: [
      "You lock onto one option too fast, so you will not look undecided.",
      "Other people avoid contradicting you, because they assume you have already thought of everything.",
      "Public firmness starts to feel like you no longer have the right to change your mind.",
    ],
    underPressure:
      "Your tone sharpens and your body takes up more space. The face says 'I will handle it'. Inside, there can be a deep tiredness at always being the one who pushes.",
    inRelationships:
      "You look so self-sufficient that few people offer help. If you want closeness, you have to say it in so many words, in a sentence like 'today I am not clear on what to do'.",
    blindSpot:
      "You think showing doubt will cost you respect. People often come closer once you admit that it is hard for you too.",
    microPractice:
      "In one social conversation this week, say out loud: 'I am still thinking it through.' Notice whether you lose respect, or whether you get a real conversation.",
  },
  "2": {
    value: 2,
    title: "The smile that disarms",
    essence: "You look easy to be with, and slow to pick a fight.",
    body: "You arrive already softening the room: you ask, you listen, you match the tone. People treat you as a bridge, and they sometimes unload on you what they would not say to anyone else. The kindness is real. It can also hide that you already have a firm opinion.",
    strengths: [
      "In a new group you lower the tension before anyone has named it.",
      "You put at ease the person who arrives late, or who does not know anyone.",
      "You catch a small friction early and head it off with humour, or with a change of subject.",
    ],
    frictions: [
      "You become the mediator automatically, even when nobody asked you to.",
      "Other people assume that nothing ever bothers you.",
      "You skip the visible confrontation, and you accumulate agreements you did not want.",
    ],
    underPressure:
      "You smile more, or you go completely quiet. From outside you look unshakeable. Inside, you may be counting every word that landed.",
    inRelationships:
      "You look easy to please, so people make plans without checking with you. If you do not mark a preference in time, the frustration stays silent, and they never hear about it.",
    blindSpot:
      "You think a harmonious surface protects the bond. Sometimes it teaches the other person that your 'yes' does not mean very much.",
    microPractice:
      "When you are invited somewhere this week, answer once with your real preference before you ask what everyone else wants.",
  },
  "3": {
    value: 3,
    title: "The brightness that fills the room",
    essence: "You look light, and easy to like.",
    body: "You come in with energy, a joke, or a line that eases the air. People remember you as the funny one, or as the one who lifts the mood, and social doors open quickly because of it. The brightness is real. It can also cover the fact that you do not always want the centre.",
    strengths: [
      "You break the ice in an awkward setting with one well-placed sentence.",
      "Other people start talking because you show real interest in what they are telling.",
      "You can sound hopeful without pretending that nothing difficult is happening.",
    ],
    frictions: [
      "Charm becomes a way to step around personal questions you do not want to answer.",
      "When you want to talk about something hard, people struggle to take you seriously.",
      "You spend the social energy, and then you disappear with no explanation.",
    ],
    underPressure:
      "You turn the volume up: more laughter, more stories, more movement. The brightness keeps fear and sadness out of view. It also delays any help that would actually reach you.",
    inRelationships:
      "You look untroubled, so people may never ask how you really are. If you want depth, you will have to lower the show on purpose.",
    blindSpot:
      "You think making people laugh is a way of giving them care. Sometimes it is how you avoid saying 'I am not all right today', because you do not want to drop the energy in the room.",
    microPractice:
      "At one social gathering this week, stay quiet for ten minutes and do not fill the gap. If someone asks, answer honestly: 'I am listening', or 'I am quiet today.'",
  },
  "4": {
    value: 4,
    title: "The calm that puts things in order",
    essence: "You look reliable, and hard to catch off guard.",
    body: "You arrive looking like someone who has the practical things in hand: the timing, the preparation, the manner. People give you concrete tasks because you project solidity. That order is reassuring. It can also hide the days when you are overwhelmed.",
    strengths: [
      "When everyone else is in chaos, you are the one who asks 'what is next?' in a steady voice.",
      "People get the sense that you will follow through even if nobody chases you.",
      "You steady the people who improvise too much, by giving them facts they can check.",
    ],
    frictions: [
      "You resist a change in public even after you have already accepted it privately.",
      "Other people decide you are rigid before they have heard your reason.",
      "Asking for flexibility is hard, because it breaks the picture of you as the reliable one.",
    ],
    underPressure:
      "You become more formal, briefer, and more literal. The face says 'everything is under control'. Inside, the unforeseen can be setting off an alarm.",
    inRelationships:
      "You look predictable, and that calms people. It can also bore them, or teach them to assume you never want a surprise. You have to signal the times when you do.",
    blindSpot:
      "You think being the steady adult is what makes you indispensable. Sometimes that role is exactly what stops you saying 'I cannot take this on today'.",
    microPractice:
      "This week, ask for one concrete exception to a shared routine. Give the reason in a single sentence, and do not pile apologies on top of it.",
  },
  "5": {
    value: 5,
    title: "The spark that spreads",
    essence: "You look free, and hard to file under one label.",
    body: "You arrive with stories, a new plan, or the energy of someone already in motion. People read you as a person who knows places, people, and possibilities. That is attractive. It can also lead them to underestimate how capable you are of committing.",
    strengths: [
      "You open a conversation with a stranger faster than most people do.",
      "You make it feel as if there is a way out, at the moment others can only see a dead end.",
      "You shift your style to fit the room without losing a recognisable honesty.",
    ],
    frictions: [
      "The plans you promise keep moving, and other people stop knowing what they can count on.",
      "Humour, or a change of subject, becomes the exit from a serious conversation.",
      "Fixed roles bore you, and you switch register without telling anyone.",
    ],
    underPressure:
      "You move more: messages, trips, ideas, contacts. The face says 'nothing holds me'. Inside, there can be a fear of staying still with the thing that hurts.",
    inRelationships:
      "Independence is part of what draws people to you. It also creates insecurity when you do not say when you will be back, or what your silence means.",
    blindSpot:
      "You think looking free is what keeps you safe. Sometimes you will not say 'I want to stay', because it sounds, in your own ears, like tying yourself down.",
    microPractice:
      "This week, confirm a plan that is already made, and do not propose a new alternative. Send one message: 'I am still going ahead with what we agreed.'",
  },
  "6": {
    value: 6,
    title: "The visible shelter",
    essence: "You look like the person to go to when something fails.",
    body: "You arrive already in a caring stance: you ask, you offer, you remember what matters. People treat you as an emotional home before they know you well. The generosity is genuine. It also invites them to use you without ever asking what you need.",
    strengths: [
      "In someone else's crisis you show up with something concrete, not only with 'you can count on me'.",
      "The person who feels out of place feels welcome around you.",
      "You remember dates, tastes, and details that other people let slip.",
    ],
    frictions: [
      "You help before you are asked, and then you resent it if nobody thanks you.",
      "Other people take your warmth as unlimited availability.",
      "Anger is hard to show, because it breaks the picture of you as the good one.",
    ],
    underPressure:
      "You keep holding other people up, smile and all, even when the smile is tired. The face says 'I am here'. Inside, you may already be past full.",
    inRelationships:
      "You look like the emotional adult of the bond. If you never ask to be cared for as well, your partner can come to believe you do not need it.",
    blindSpot:
      "You think being a shelter is what makes you loved. Sometimes it draws people who only arrive when there is a problem.",
    microPractice:
      "When someone asks you for help this week, answer first with: 'When do you need it by?' Agree the time before you say yes.",
  },
  "7": {
    value: 7,
    title: "The elegant distance",
    essence: "You look selective, and hard to read.",
    body: "You arrive with reserve: an attentive look, measured words, very little show. People decide you are intelligent, or mysterious, before they know whether you are close. The reserve filters who gets in. It can also stop someone approaching, because they are afraid of bothering you.",
    strengths: [
      "In a heavy conversation you do not fill the air with noise that nobody needs.",
      "You give a sense of depth even when you have not told very much yet.",
      "You protect sensitive things other people have told you, and you do not make a drama of it.",
    ],
    frictions: [
      "You close up in public, and other people read it as a lack of interest.",
      "Irony, or silence, becomes the way you keep intimacy from arriving too soon.",
      "Enthusiasm is hard to show, because it sounds to you like a commitment.",
    ],
    underPressure:
      "You withdraw further: short replies, less eye contact, more time on your own. The face says 'I do not need anyone'. Inside, there can be overload.",
    inRelationships:
      "You look self-sufficient to an extreme. If you want company, you will have to give a clear sign that you want it, not only that you can tolerate it.",
    blindSpot:
      "You think distance protects you from disappointment. Sometimes it sends away a person who was willing to come closer slowly.",
    microPractice:
      "This week, you start a personal conversation with someone you trust. Offer one real detail before they have to ask for it.",
  },
  "8": {
    value: 8,
    title: "The presence that takes up space",
    essence: "You look like someone who knows what they want.",
    body: "You arrive with the energy of results: a direct look, a clear agenda, little patience for circling. People read you as competent and demanding before they ever meet the softer side. The respect comes easily. So does the intimidation.",
    strengths: [
      "In an informal negotiation you name what matters without walking around it.",
      "You give the impression that you will deliver what you promised.",
      "A vague conversation comes down, with you, to a concrete decision.",
    ],
    frictions: [
      "Other people keep bad news from you, because they are afraid of how you will react.",
      "Efficiency gets mistaken for a lack of warmth, and you never correct the impression.",
      "Tiredness is hard to show, because it sounds like weakness.",
    ],
    underPressure:
      "Your voice drops, your pace speeds up, and your patience thins. The face says 'I am still in charge'. Inside, there can be a fear of losing standing.",
    inRelationships:
      "Strength is part of what draws people to you. It can also mean they never offer emotional support. If you need it, ask in plain language. Hints will not land.",
    blindSpot:
      "You think looking in control is what keeps you safe. Sometimes it hides the moment when you need someone simply to stay.",
    microPractice:
      "This week, hand off one visible task and do not quietly correct it afterwards. Let the result be imperfect, and comment only on what is essential.",
  },
  "9": {
    value: 9,
    title: "The compassionate look",
    essence: "You look mature, and you do not seem to demand much.",
    body: "You arrive open: you listen, you take things in, you do not judge in a hurry. People trust you with something personal early, because you project emotional room. The generosity is real. It can also hide that you have limits of your own.",
    strengths: [
      "You make it bearable for someone to talk about an uncomfortable subject, without turning it into theatre.",
      "You can meet a family or a culture unlike your own without needing it to match you.",
      "When other people are stuck in the detail, you bring a wider view.",
    ],
    frictions: [
      "You take in other people's stories and arrive home already emotionally full.",
      "Other people assume that nothing offends you.",
      "A limit is hard to set, because you fear you will look less understanding if you do.",
    ],
    underPressure:
      "You become more philosophical, or more distant. The face says 'I have been through worse'. Inside, there can be an overload you have not named.",
    inRelationships:
      "You look easy to love, and hard to know in the things that are yours. If you never share a concrete need, your partner can come to believe that you only give.",
    blindSpot:
      "You think understanding everyone makes you hard to hurt. Sometimes you will not say 'this does not work for me', because it would break the picture of you as the broad one.",
    microPractice:
      "When someone brings you a problem that is not yours this week, listen, and then ask: 'Do you want my view, or do you only want me to listen?' Guard your energy.",
  },
  "11": {
    value: 11,
    title: "Intensity, held in",
    essence: "You look perceptive, and a little apart.",
    body: "You arrive with a presence that notices more than it says. People feel read, and they sometimes grow uncomfortable before they know why. The alertness is fine-tuned. It also leaves you open to soaking up more of the room than you meant to.",
    strengths: [
      "You catch a group dynamic before anyone has put it into words.",
      "On a delicate subject you inspire trust without forcing the intimacy.",
      "The ideas come when the room is treating people with respect.",
    ],
    frictions: [
      "When the stimulus is too much, you leave, and you do not say you are leaving.",
      "Other people ask you for a hunch and then treat it as a certainty.",
      "Sensory tiredness gets mistaken, including by you, for a lack of interest in people.",
    ],
    underPressure:
      "You go quieter, or more electric, with very little in between. The withdrawal protects your nervous system. From outside it can look like a mood that will not settle.",
    inRelationships:
      "You look deep and fragile at the same time. When you step back to recharge, you need to say that. Otherwise it reads as punishment.",
    blindSpot:
      "You think bearing the intensity in silence makes you strong. Often it only exhausts you before you have asked for a different pace.",
    microPractice:
      "Before one social event this week, decide your exit in advance and say it: 'I am leaving at ten. It is not personal.'",
  },
  "22": {
    value: 22,
    title: "The solidity that commands respect",
    essence: "You look built for large projects.",
    body: "You arrive like someone who thinks in years: structure, a long view, very little drama. People hand you responsibility before they have checked whether you want it. The presence is imposing. It can also cover doubts that are entirely legitimate.",
    strengths: [
      "In a professional room you convey that you can hold something complicated.",
      "An ambitious idea sounds possible when you say it, not like a fantasy.",
      "You steady the people who are afraid the whole thing will collapse.",
    ],
    frictions: [
      "Other people keep bad news back, because they are afraid of disappointing you.",
      "Exhaustion is hard to admit unless you can justify it with results.",
      "You project a finished perfection, and then you punish yourself in private.",
    ],
    underPressure:
      "You become more rigid, and harder to approach. The face says 'I can bear all of it'. Inside, there can be a fear that the collapse will be visible.",
    inRelationships:
      "You look unbreakable, and offers of help stay away because of it. If you want support, you will have to show a real crack. Functional tiredness will not be read as a request.",
    blindSpot:
      "You think being the rock is what gives people confidence. Sometimes it keeps someone at a distance, because they fear they will not measure up.",
    microPractice:
      "This week, tell someone close one concrete doubt about a project. Ask for their perspective. Do not ask them to solve it.",
  },
  "33": {
    value: 33,
    title: "The warmth that takes people in",
    essence: "You look like the emotional light in any group.",
    body: "You arrive with a warm tone, an attentive look, and a readiness to listen. People come to unburden themselves when they barely know you. The welcome is genuine. It can also invite an emotional load that was never yours to carry.",
    strengths: [
      "The person who fears being judged feels safer once they are talking to you.",
      "When someone has not understood, you explain without talking down to them.",
      "You can lift a conversation that has turned harsh, without pretending the harshness was nothing.",
    ],
    frictions: [
      "You become everyone's confidant, and your own space disappears.",
      "Other people take your calm for a capacity with no ceiling.",
      "Ending a conversation that has already drained you is strangely hard.",
    ],
    underPressure:
      "You keep smiling and holding the room even when you are at your limit. The face says 'I can take this'. Inside, there can be a hollow.",
    inRelationships:
      "You look like the natural carer of the bond. If reciprocity is never negotiated, the resentment arrives for giving what nobody actually asked you to give.",
    blindSpot:
      "You think welcoming everyone is how love shows. Sometimes what you teach is that your own wellbeing comes second.",
    microPractice:
      "At the end of one emotional conversation this week, say: 'I have to stop here.' No long excuse. Notice whether the bond can hold the limit.",
  },
};

export const destinies: Record<string, DestinyContent> = {
  "1": {
    value: 1,
    title: "Leave a mark of your own",
    essence: "Build something that can be recognised as yours, even if it stays small.",
    body: "What you are developing is not independence on its own. It is the capacity to start a direction of your own and keep holding it. The legacy does not have to be famous. It has to be recognisable as yours. The strain shows up when you confuse leading with doing every part alone.",
    strengths: [
      "You start paths that other people postpone because they are afraid of getting it wrong.",
      "You will defend an unpopular decision when you believe it is the right one.",
      "People move because they can see, in you, that starting does not require permission.",
    ],
    frictions: [
      "Sharing the credit feels like a loss, and that caps how large a project can grow.",
      "You leave a collaboration once it feels as if your autonomy is slipping.",
      "Stubbornness and vision get confused, and the turn you needed comes too late.",
    ],
    underPressure:
      "You become more authoritarian, and less willing to hear feedback. Under pressure the work narrows to 'I am in charge', and the part of you that opens a way for other people goes quiet.",
    inRelationships:
      "Brought all the way into a partnership or a family, this means leading without turning them into people who only carry out orders. Asking 'how do you see it?' does not take the lead away. It is how the lead grows up.",
    blindSpot:
      "You think the mark has to be made alone. Sometimes the larger one comes from building with other people, while your own voice stays intact.",
    microPractice:
      "Pick one shared project this week and propose a clean split: you decide X, the other person decides Y. Do your part, and do not correct theirs.",
  },
  "2": {
    value: 2,
    title: "Weave bonds that last",
    essence: "What you are building is belonging that lasts, past the moment of harmony.",
    body: "What you are developing is the skill of connecting people and staying with them over time. The legacy can be invisible: networks, bridges, agreements nobody applauds, which still keep a rupture from happening. The trap is believing your value lies in disappearing so that other people can shine.",
    strengths: [
      "You help two sides reach an agreement in which each feels they gained something.",
      "You remember the shared stories that put trust back together.",
      "You notice when someone needs to be included, before they have had to ask.",
    ],
    frictions: [
      "You step around a conflict that needed to happen, and the problem grows under the rug.",
      "The bonds define you, and it is hard to know who you are when they are not in the room.",
      "A quiet surface and a healthy relationship start to look like the same thing.",
    ],
    underPressure:
      "You bend too far to fit, or you go quiet and feel wronged. Under pressure the work tilts toward pleasing people, and away from connecting with what is actually true.",
    inRelationships:
      "A bond that lasts needs you to say the uncomfortable thing without breaking the tie. It needs your voice in it, not only your capacity to absorb.",
    blindSpot:
      "You think the task is to keep the peace. Sometimes what you leave people with is the experience of holding the truth together with you.",
    microPractice:
      "Open one pending conversation this week with a plain sentence: 'There is something I need to say for this to work.' No circling, and no apology before you have said it.",
  },
  "3": {
    value: 3,
    title: "Give shape to what you have lived",
    essence: "Turn experience into something another person can actually use.",
    body: "What you are developing is the capacity to name, tell, and share what is human. The legacy might be words, art, teaching, or a conversation that changes how someone sees themselves. The trap is staying in the performance, with no depth under it.",
    strengths: [
      "You turn emotional chaos into a story other people can follow.",
      "You bring a creative room to life, and people dare to express themselves in it.",
      "Humour, or beauty, becomes the door into a subject other people avoid.",
    ],
    frictions: [
      "You scatter the same impulse across many forms, and you finish none of them.",
      "Applause and real impact start to feel interchangeable.",
      "You skip the silence a good piece of work needs in order to be polished.",
    ],
    underPressure:
      "You talk more and listen less. Under pressure the work turns into noise, and the clarity goes.",
    inRelationships:
      "Brought fully out, this includes listening as much as telling. The people close to you need to feel they are in the story with you. An audience is a thinner bond than that.",
    blindSpot:
      "You think the point is to be heard. Sometimes what you leave behind is the listening, and the precise thing you hand back.",
    microPractice:
      "This week, write one short paragraph about something that matters to you. Read it to one person and ask: 'What stayed with you?' Change it according to their answer, not according to what you meant.",
  },
  "4": {
    value: 4,
    title: "Build what endures",
    essence: "Lay foundations that someone else can use after you.",
    body: "What you are developing is the patience to do a thing properly and leave it ready for whoever comes next. The legacy might be a home, a system, a routine, or a small institution. The trap is treating rigidity and solidity as if they were the same material.",
    strengths: [
      "You turn a loose idea into a process that can be repeated.",
      "You hold the standard when everyone around you wants a shortcut.",
      "You build material security, or emotional security, for the people who depend on you.",
    ],
    frictions: [
      "A necessary change meets resistance, because you are attached to the original plan.",
      "You criticise without offering a proposal, and you earn a name as the obstacle.",
      "Rest stays postponed until your body forces the issue.",
    ],
    underPressure:
      "You become inflexible, and moralistic about the rules. Under pressure the work shrinks to control, and the building stops.",
    inRelationships:
      "The mature version of this includes flexibility you have actually negotiated. A solid base can be revised. What people rely on is that it holds, and that it can be looked at again.",
    blindSpot:
      "You think the task is never to fail. Sometimes what you leave is the proof that a thing can be repaired without pulling the whole structure down.",
    microPractice:
      "This week, look again at one shared agreement or routine and propose a single concrete adjustment. Explain which problem it solves. Do not stop at what would change.",
  },
  "5": {
    value: 5,
    title: "Open new doors",
    essence: "Widen what is possible, for you and for other people.",
    body: "What you are developing is the capacity to move, to connect separate worlds, and to test a different path. The legacy can be freedom made visible: a lived example that changing course is not a betrayal. The trap is using movement to get away from something, and calling it exploration.",
    strengths: [
      "You bring another option into the room when everyone else can see only one exit.",
      "A stalled group picks up when you arrive with energy and a different angle.",
      "You learn quickly, and you pass on what you learned instead of keeping it to yourself.",
    ],
    frictions: [
      "You leave before anything has settled, and the record of your work looks scattered.",
      "You promise more variety than you can actually sustain.",
      "Novelty becomes the way you avoid a commitment that would be uncomfortable to face.",
    ],
    underPressure:
      "You want out of the whole context. Under pressure the work becomes flight, and the exploring stops.",
    inRelationships:
      "The full version of this includes freedom and presence, negotiated together. Opening a new door still means closing the previous one with respect.",
    blindSpot:
      "You think the task is never to stop. Sometimes what you leave is the fact that you stayed long enough for something to mature.",
    microPractice:
      "This week, finish one pending task or one pending conversation before you start anything new. When you close it, write down what you learned by staying with it.",
  },
  "6": {
    value: 6,
    title: "Create shelter for others",
    essence: "Build spaces where people feel cared for.",
    body: "What you are developing is emotional responsibility with limits that stay healthy. The legacy might be a family, a community, a team, or simply the reputation of someone who shows up. The trap is believing that love means carrying the load without rest.",
    strengths: [
      "You hold people through a crisis without leaving them feeling they owe you.",
      "You make traditions and rituals that give a feeling continuity over time.",
      "The care you model is concrete. It is not only a kind sentence.",
    ],
    frictions: [
      "You give something up, and then you wait for gratitude that you never ask for out loud.",
      "Love becomes a reason to steer people, and you call the interference concern.",
      "Receiving care is hard, because it contradicts the role you have taken.",
    ],
    underPressure:
      "You multiply yourself until the resentment arrives. Under pressure the shelter turns into martyrdom.",
    inRelationships:
      "The full version of this includes asking for care and letting yourself receive it. A real shelter is not built on one person who is already exhausted.",
    blindSpot:
      "You think the task is to give without a limit. Sometimes what you leave is other people learning how to care as well.",
    microPractice:
      "This week, hand off one caring gesture you would usually do alone: a meal, a call, a repair. Let it come out differently, and do not correct it.",
  },
  "7": {
    value: 7,
    title: "Light what is hidden",
    essence: "Look for what is true, and share it with care.",
    body: "What you are developing is depth: seeing the pattern, questioning what everyone treats as obvious, teaching the part other people do not look at. The legacy might be knowledge, guidance, or a question that changes a conversation. The trap is withdrawing from the very world you are trying to understand.",
    strengths: [
      "You catch an inconsistency before it becomes expensive.",
      "You can offer a perspective without humiliating the person who did not know.",
      "You protect time for reflection, including the kind other people undervalue.",
    ],
    frictions: [
      "You withdraw so far that the insight never reaches anyone.",
      "Intellectual certainty becomes a way to stay out of vulnerability.",
      "Feeling is treated as unreliable, and half the picture goes missing.",
    ],
    underPressure:
      "You turn sharp, or you go completely silent. Under pressure the work shuts itself in a tower. The lantern, which is what you actually have to offer, stays dark.",
    inRelationships:
      "The full version of this is what you know, translated into presence, not only into analysis. A truth you share connects. A truth you keep does less of that work.",
    blindSpot:
      "You think the task is to understand it on your own. Sometimes what you leave is the sentence 'I do not know', and the exploring you then do with someone else.",
    microPractice:
      "This week, share one idea or one intellectual doubt with someone who is not a specialist. Ask which part landed for them and which part did not. Do not defend your version.",
  },
  "8": {
    value: 8,
    title: "Move mountains",
    essence: "Turn effort into a result other people can see.",
    body: "What you are developing is the capacity to carry a thing through, to negotiate, and to hold power without dropping the responsibility that comes with it. The legacy might be material stability, leadership, or simply evidence that the thing can be done. The trap is measuring your humanity by what you produce.",
    strengths: [
      "You turn limited resources into progress someone can point at.",
      "You defend a limit, or a deadline, when other people would rather avoid the conversation.",
      "You model discipline, and you do not ask for special conditions in order to keep it.",
    ],
    frictions: [
      "The result outranks the process, and relationships get burned on the way.",
      "Celebration is hard, because you are already looking at the next goal.",
      "Respect and fear start to look alike.",
    ],
    underPressure:
      "You harden, and empathy thins out. Under pressure the work narrows to winning, and the building is what gets lost.",
    inRelationships:
      "The full version of this includes tenderness alongside your authority. Moving mountains does not mean crushing the person who walks with you.",
    blindSpot:
      "You think the task is never to show a weak point. Sometimes what you leave is the lesson that power includes asking for help.",
    microPractice:
      "This week, name someone's contribution on a shared project, out loud. Be specific about what they did and why it mattered.",
  },
  "9": {
    value: 9,
    title: "Finish what was started",
    essence: "Close a cycle with meaning, and let it go with dignity.",
    body: "What you are developing is breadth: seeing past what is immediate, and helping a thing end well. The legacy might be forgiveness, service, or an example of how to release something. The trap is picking up a weight that was never yours.",
    strengths: [
      "You help other people close a stage without humiliating them on the way out.",
      "You connect a cause and a person who would not have found each other.",
      "The generosity you model does not come with an obsessive tally attached.",
    ],
    frictions: [
      "You stay in a relationship or a project that has already ended, out of a loyalty that no longer fits.",
      "Sacrifice gets idealised, and what is yours gets neglected.",
      "A personal conflict is avoided by taking refuge in the group, the cause, the larger story.",
    ],
    underPressure:
      "You spill over, or you go dark. Under pressure the work becomes an escape, and the closing never happens.",
    inRelationships:
      "The full version of this includes a limit on what you give. Finishing what was started also means ending the part that is no longer yours to carry.",
    blindSpot:
      "You think the task is to carry it for everyone. Sometimes what you leave is other people learning to release what has already finished its cycle.",
    microPractice:
      "Find one responsibility that is no longer yours, and say so this week: 'From now on, X carries this.' No speech about how guilty you feel.",
  },
  "11": {
    value: 11,
    title: "Light other people up",
    essence: "Inspire people, and do not burn yourself out doing it.",
    body: "What you are developing is sensitivity with a channel: intuition, creativity, and a presence that lifts. The legacy can be a spark in someone who doubted themselves. The trap is living at high voltage all the time.",
    strengths: [
      "You name what other people feel and have not said yet.",
      "When a room has stalled, you bring a creative way through.",
      "You can join what is felt, including the spiritual, to something practical.",
    ],
    frictions: [
      "Stimuli and commitments come in unfiltered, and you exhaust yourself.",
      "Inspiration starts to feel like an obligation to rescue people.",
      "Ordinary tasks get postponed until they send you the bill.",
    ],
    underPressure:
      "You swing between giving too much and withdrawing completely. Under pressure the light blinks. It does not hold a steady beam.",
    inRelationships:
      "The full version of this includes saying when you need the light off. Lighting other people up does not require you to stay lit without a break.",
    blindSpot:
      "You think the task is to feel on everyone else's behalf. Sometimes what you leave is other people learning to hold a light of their own.",
    microPractice:
      "Before you offer an inspiring piece of advice this week, ask: 'Do you want a perspective, or do you only want me to listen?' Answer only what they asked for.",
  },
  "22": {
    value: 22,
    title: "Raise what looks impossible",
    essence: "Make real the visions other people leave on paper.",
    body: "What you are developing is human architecture: a large plan, and the execution that makes it stand. The legacy might be infrastructure, a company, an extended family, or anything that outlives the first rush. The trap is treating rest as if it were a betrayal.",
    strengths: [
      "You hold a long deadline after other people have lost the thread.",
      "Ambition becomes clear roles that a team can actually take.",
      "You keep the quality in view without losing the scale.",
    ],
    frictions: [
      "Under pressure you isolate yourself, and the team loses a human sense of where things are going.",
      "Help that is imperfect gets refused, and you end up slower for it.",
      "Personal worth and the size of the achievement start to look like the same measure.",
    ],
    underPressure:
      "You turn harsh on yourself, and demanding of everyone else. Under pressure the work becomes the only thing that counts, and the life around it thins out.",
    inRelationships:
      "The full version of this includes sharing the emotional weight of the building, not only the tasks. Raising something this large still needs nearby hands, and nearby hearts.",
    blindSpot:
      "You think the task is to bear all of it. Sometimes what you leave is a thing built with other people from the beginning, not only brought in at the end.",
    microPractice:
      "This week, invite someone to make one small part of a large project with you. Name the deliverable and the deadline, and leave room for their judgement.",
  },
  "33": {
    value: 33,
    title: "Heal in a chain",
    essence: "Let your care multiply, without emptying you.",
    body: "What you are developing is compassionate teaching: to accompany, to explain, and to lift, without becoming the only support in the room. The legacy can be people who learned to care better because you showed them what a limit looks like. The trap is confusing love with sacrificing yourself.",
    strengths: [
      "You help someone name what they feel, and the shame does not have to come with it.",
      "You make a room feel safe enough for a difficult conversation.",
      "You can raise the tone of a group while the pain is still allowed to be pain.",
    ],
    frictions: [
      "You become the informal therapist for everyone around you.",
      "Someone else's need starts to sound like a personal summons.",
      "You empty yourself, and then you blame the person who 'did not do enough'.",
    ],
    underPressure:
      "You keep giving until something breaks. Under pressure the work turns into rescue, and the healing is what gets lost.",
    inRelationships:
      "The full version of this includes receiving care, and teaching the bond to go both ways. Care that travels onward depends on the first link not being used up.",
    blindSpot:
      "You think the task is to be available all the time. Sometimes what you leave is the sight of care that has hours, and edges.",
    microPractice:
      "After you have sat with someone this week, spend twenty minutes on something that is only for you, with no phone. Treat that time as part of the work.",
  },
};
