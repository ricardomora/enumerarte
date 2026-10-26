import type { PairContent } from "../types";

/**
 * The 78 possible pairs. The key is canonical and has no direction: the
 * dynamic between a 6 and a 5 is the same from either side.
 *
 * `practice` is the real payload. It has to stay useful as communication or
 * conflict advice even if the numbers are ignored entirely.
 */
export const pairs: Record<string, PairContent> = {
  "1x1": {
    key: "1x1",
    headline: "Two engines, one steering wheel",
    body: "Both start without asking permission, so the clash is an excess of direction between two people who have no shortage of drive. Aligned, they cover twice the ground. When they are not, they compete to decide the same thing.",
    practice:
      "Divide the ground into territories instead of into shared decisions. Each one leads without consulting inside their own area, and in the other's area they give notice and do not ask permission.",
  },
  "1x2": {
    key: "1x2",
    headline: "The one who pushes and the one who cushions",
    body: "One decides quickly and the other senses the human cost of that decision. It works well, until the first reads caution as a brake and the second reads haste as being walked over.",
    practice:
      'Before a decision closes, the one who pushes asks explicitly "who is this going to be hard for?" and waits for the whole answer without cutting in.',
  },
  "1x3": {
    key: "1x3",
    headline: "Action and the telling",
    body: "One does the thing and the other tells it, which makes them very visible together. Tension arrives when the one who acts treats talking as if it were not work, and the one who talks feels unheard.",
    practice:
      "Five minutes at the end of the day in which the one who acts only listens, with no fixing and no suggestions. Thinking out loud is how the other person works things out.",
  },
  "1x4": {
    key: "1x4",
    headline: "Starting without a plan, planning without a start",
    body: "The first wants to begin today. The second wants to know how it ends. Both are usually right, and they usually have the argument at the worst moment: when the decision is already due.",
    practice:
      "Agree how long planning may last before anything starts, and write that limit down before a fight exists. Once it is on paper ahead of time, it stops being an argument about character.",
  },
  "1x5": {
    key: "1x5",
    headline: "Plenty of energy, little anchor",
    body: "They understand each other at once, because neither can bear slowness. The trouble is scatter: between them they open five things and finish none.",
    practice:
      "One new thing at a time. Nothing else opens until the previous one has a result you can point at. Post the rule somewhere you will both see it.",
  },
  "1x6": {
    key: "1x6",
    headline: "Autonomy against care",
    body: "One wants to handle it alone. The other shows affection by taking it on. An offer of help can be heard as distrust, and a refusal of help can be heard as contempt.",
    practice:
      'The one who cares asks "do you want help, or do you want to get it off your chest?" and respects the answer. The one who declines says thank you before saying no.',
  },
  "1x7": {
    key: "1x7",
    headline: "Decide now against understand first",
    body: "The first treats a long analysis as doing nothing. The second treats a decision made without understanding as a gamble. Each feels their way of thinking is getting little respect.",
    practice:
      "Hold the conversation about understanding and the conversation about deciding on two different occasions. Folded into one sitting, both people leave unsatisfied.",
  },
  "1x8": {
    key: "1x8",
    headline: "Two ways of being in charge",
    body: "One leads by starting things. The other leads by control of the resources. It is a strong alliance and a quiet struggle, because both assume the wheel is already theirs.",
    practice:
      "Name who decides what before the moment you need it. Agreements made ahead of time head off a power struggle. Goodwill in the moment does not.",
  },
  "1x9": {
    key: "1x9",
    headline: "Mine right now, against everyone's",
    body: "One pursues a concrete aim. The other watches the wider effect. The first can look selfish and the second can look vague, and neither reading is fair.",
    practice:
      "When a plan goes on the table, say aloud who gains from it and who bears the cost. Spoken, a clash of values becomes a fact you both can see.",
  },
  "1x11": {
    key: "1x11",
    headline: "Drive against the antenna",
    body: 'The first moves, and the second feels everything the movement stirs. When the 11 says "something is off here" and cannot say why, the 1 sets it aside, and often regrets that later.',
    practice:
      "Treat a hunch that arrives with no argument as a hypothesis to check. It is not a veto, and it is not a whim. Ask what would count as confirmation.",
  },
  "1x22": {
    key: "1x22",
    headline: "Speed against scale",
    body: "One wants a result this week. The other is building something counted in years. The argument presents itself as a dispute about deadlines. Under it is a dispute about what counts as an achievement.",
    practice:
      "Choose a real intermediate milestone together. The impatient one has something to celebrate, and the long design does not have to bend.",
  },
  "1x33": {
    key: "1x33",
    headline: "Going on alone, holding everyone else",
    body: "The first moves without looking back. The second stays and carries the emotional weight of the group. One can feel left behind. The other can feel held in place.",
    practice:
      "The one who holds has to ask aloud, and the request has to name something specific. The one who is moving asks how the other person is before giving any account of their own progress.",
  },
  "2x2": {
    key: "2x2",
    headline: "Nobody wants to make it uncomfortable",
    body: "Life together stays smooth because both give way. The cost is that important things go unsaid. They collect under an apparent agreement and break out late, larger than they were.",
    practice:
      'One direct question a week: "what have you not told me?". Do not defend yourself and do not justify yourself. Hear the answer through to the end.',
  },
  "2x3": {
    key: "2x3",
    headline: "Sensing it, and saying it",
    body: "One feels the climate of a room and the other finds the words, so together they can name what other people miss. Friction starts when the expressive one tells outsiders something the other had treated as private.",
    practice:
      "State plainly which stories may be retold and which stay in the room. An anecdote for one of you can be an exposure for the other.",
  },
  "2x4": {
    key: "2x4",
    headline: "Sensitivity and procedure",
    body: "One attends to how people feel. The other attends to whether things work. They fit well together, and the 4 can still sound dry in the act of being efficient.",
    practice:
      "A correction from the structured one opens by naming what did work. That first sentence changes how everything after it is heard.",
  },
  "2x5": {
    key: "2x5",
    headline: "Needing closeness, needing air",
    body: "The first settles when presence is steady. The second feels smothered by that same steadiness. Distance from the 5 rarely means a loss of interest, and it lands as if it did.",
    practice:
      "The one who needs air names the hour they will be back, not only the fact that they are leaving. A clock time takes most of the worry out of the gap.",
  },
  "2x6": {
    key: "2x6",
    headline: "Two who look after the other first",
    body: "They look after each other a great deal and ask for very little, so the bond is warm and tipped towards mutual exhaustion. Neither knows how to receive without feeling in debt.",
    practice:
      "Ask once a day, in a single sentence, and give no reason why the request has been earned.",
  },
  "2x7": {
    key: "2x7",
    headline: "Talking it through, or going quiet",
    body: "The first calms distress by talking it through. The second calms it by withdrawing. Each does exactly what hurts the other, and means well while doing it.",
    practice:
      'Tie every pause to a return. "I need two hours, and we are back on this at eight" settles most of what is actually wrong.',
  },
  "2x8": {
    key: "2x8",
    headline: "The tone and the outcome",
    body: "One measures the relationship by how it feels. The other measures it by what gets done. The 8 can set the 2's material life in order and still leave them feeling alone.",
    practice:
      "Once a week, the results-minded one holds a conversation with no problem to solve and nothing on an agenda. Ask how things are going, and follow the answer with no proposal.",
  },
  "2x9": {
    key: "2x9",
    headline: "Sensitivity up close and sensitivity at large",
    body: "Both feel a great deal, one towards the particular people beside them and the other towards the wider scene. The 2 can come to feel they are competing with the whole world for attention.",
    practice:
      "Guard a pocket of time that is only for ordinary, close life. It loses to larger concerns unless somebody has scheduled it.",
  },
  "2x11": {
    key: "2x11",
    headline: "Two antennas switched on",
    body: "Both pick up what goes unsaid, so they understand each other with very little explanation. They also catch one another's mood, and one bad afternoon becomes two.",
    practice:
      'Name whose feeling it is before you respond to it. "What I walked in with is mine. It is not about you" stops the spiral before it starts.',
  },
  "2x22": {
    key: "2x22",
    headline: "The human climate and the long work",
    body: "The builder looks years ahead. The other looks at the person standing there today. The 2 can come to feel like a logistical detail inside a project that matters more than they do.",
    practice:
      "The one who is building explains what the work is for, not only what the next task is. Being part of the plan feels different from taking instructions inside it.",
  },
  "2x33": {
    key: "2x33",
    headline: "Two who hold, and neither asks",
    body: "It is among the warmest bonds, and among the most exhausting. Both give without noting the cost, and resentment arrives by a side door, because neither will make a direct complaint.",
    practice:
      "Give receiving a formal turn. One day a week, one person does the caring and the other only lets it happen, with nothing repaid that same day.",
  },
  "3x3": {
    key: "3x3",
    headline: "Two talking, neither listening",
    body: "Awkward silence almost never happens here, and neither do conclusions. They enjoy each other a great deal, and they step around what is difficult with the same instrument: light conversation.",
    practice:
      "When a serious subject appears, one of you names it and the humour goes to zero for ten minutes. No jokes inside that window, even when the quiet stings.",
  },
  "3x4": {
    key: "3x4",
    headline: "Opening things up, and ordering them",
    body: "One generates possibilities and the other brings them to the ground. The arrangement works, and it wears people down. The 4 feels like the person cleaning up a mess. The 3 feels the wings have been clipped.",
    practice:
      "Keep the sitting for ideas apart from the sitting for commitments. Nothing said in the first one counts as a promise, and you say that rule before you begin.",
  },
  "3x5": {
    key: "3x5",
    headline: "Nothing but movement",
    body: "They stir each other up, and they get bored of the same things at the same time. Day to day the bond is fragile, because nobody wants the work that repeats.",
    practice:
      "List the dull tasks on paper and put a name beside each one. With no owner they simply do not get done, and the omission comes back later as resentment.",
  },
  "3x6": {
    key: "3x6",
    headline: "Lightening the mood, carrying the weight",
    body: "One supplies the good mood and the other supplies the responsibility, and the division turns unfair quickly. The 6 starts to feel like the grown-up in the relationship.",
    practice:
      "Every so often, say aloud who is remembering, who is coordinating, and who is worrying. That invisible list almost never sits where either of you thought.",
  },
  "3x7": {
    key: "3x7",
    headline: "Thinking aloud, thinking in silence",
    body: "The first has to say a thing in order to understand it. The second needs quiet for the same task. Each takes the other's method as a lack of depth, or as a lack of interest.",
    practice:
      "The expressive one says when they are thinking out loud and not asking for a reply. That leaves the other person free to stay silent.",
  },
  "3x8": {
    key: "3x8",
    headline: "Charm, and then delivery",
    body: "Together they persuade people and then they deliver, which is a strong way to win work and then do it. The friction is about the measure: one goes by the reaction in the room, the other by the final figure.",
    practice:
      "Before an effort begins, note what will count as that particular effort having worked. A large share of these arguments is a quarrel about a measure nobody ever stated.",
  },
  "3x9": {
    key: "3x9",
    headline: "Lightness and weight",
    body: "One moves to lighten things. The other stays with what is heavy. The 9 can feel a serious subject being made small. The 3 can feel blamed for wanting the time to be pleasant.",
    practice:
      'Name the register before the first sentence: "I want to talk about this seriously" or "this one is for laughing". Most of the misunderstanding is settled by that choice.',
  },
  "3x11": {
    key: "3x11",
    headline: "Words for what the other senses",
    body: "The 11 picks up things they cannot explain, and the 3 has language precise enough to name them. The bond is very creative, and very exposed: the 3 can carry sensitive material outside without having weighed it.",
    practice:
      "Check with each other before anything travels beyond the two of you. A private intuition in one mouth can become a polished anecdote in the other.",
  },
  "3x22": {
    key: "3x22",
    headline: "The story and the build",
    body: "One communicates and the other builds, so each needs the other more than either admits. The 22 can treat communication as decoration. The 3 can promise a thing before it exists.",
    practice:
      "Decide what may be announced, and say, beside the announcement, what condition the work is actually in. Announcing past what exists spends more credibility than announcing less.",
  },
  "3x33": {
    key: "3x33",
    headline: "Lightening a room, and holding it",
    body: "Both leave other people feeling better, one by humour and the other by presence. Between the two of them, the 33 becomes the listener and the 3 becomes the one who is heard.",
    practice:
      "The person who usually holds the listening asks for a turn in plain words. The person who usually talks asks a question first and then waits for the long answer.",
  },
  "4x4": {
    key: "4x4",
    headline: "Two orders that will not share",
    body: "Both want order, and each brings a different one, so method gets argued far more than aim. On the days the two orders coincide, the result is extremely solid.",
    practice:
      "Pick one system for each area, even when it is the weaker of the two on offer. Two good systems in competition produce less than one ordinary system both people have accepted.",
  },
  "4x5": {
    key: "4x5",
    headline: "Stability against movement",
    body: "This is one of the harder contrasts. One person needs to know what is coming. The other needs the future left partly undecided. Both needs are real.",
    practice:
      "Keep a small core fixed and leave the rest unset. Negotiate the whole of it at once and neither person has any ground left to yield.",
  },
  "4x6": {
    key: "4x6",
    headline: "Duty and duty",
    body: "Both are responsible, and both carry a lot, one through structure and the other through people. They function very well. They rest very little.",
    practice:
      "Schedule rest with the same seriousness as an obligation. Leave it off the calendar and it does not happen.",
  },
  "4x7": {
    key: "4x7",
    headline: "Method and depth",
    body: "Both like to analyse. One wants the procedure that works, and the other wants to know why it works. The intellectual respect is genuine, and so is the impatience about time.",
    practice:
      "Limit how long the understanding phase may run. The 7 will almost always want it longer, and the 4 will almost always cut it short, so the stopping point has to be written down.",
  },
  "4x8": {
    key: "4x8",
    headline: "Seeing things through",
    body: "They are unusually good at carrying work all the way to the end. The danger is not a fight between them. Side by side, they turn every hour into work.",
    practice:
      "During certain hours, one subject is forbidden outright. Without that ban, unfinished tasks follow them into time that was supposed to be empty.",
  },
  "4x9": {
    key: "4x9",
    headline: "How it is done, and what it is for",
    body: "One asks how a thing gets done. The other asks what it is for. The 4 can seem lost in procedure. The 9 can seem to dismiss whatever is practical.",
    practice:
      "Open with the purpose, and only then come down to the plan, in the same conversation. Put the plan first and the 9 drifts while the 4 stalls.",
  },
  "4x11": {
    key: "4x11",
    headline: "The verifiable and the felt",
    body: "The 4 wants evidence. The 11 arrives with signals they cannot support with data. The argument is about what counts as knowing, and it is still felt as distrust.",
    practice:
      'Turn the intuition into something that could be checked: "what would we see if what you feel were true?". The 11 has a place in the decision, and the 4 is not asked for an act of faith.',
  },
  "4x22": {
    key: "4x22",
    headline: "Same material, different scale",
    body: "They share the discipline. The 22 designs something larger than the 4 considers prudent. The argument is about how much risk can be borne. Rigour is not what they disagree on.",
    practice:
      "Spell the worst case out in numbers before anyone chooses. Once the risk is a figure on the page, you are no longer arguing about a feeling.",
  },
  "4x33": {
    key: "4x33",
    headline: "Order and care",
    body: "One holds the structure. The other holds the people living inside it. They need each other, and the 33 can feel that a human exception has no room in the 4's system.",
    practice:
      "Mark, ahead of any particular case, the places where the system may bend for a person. Deciding that freshly every time exhausts both of you, and it tends to end badly.",
  },
  "5x5": {
    key: "5x5",
    headline: "Nobody holding the base",
    body: "The affinity is immediate, because neither places a limit on the other. Continuity is what goes missing. Plans change so fast that nothing has time to settle.",
    practice:
      "Choose three commitments that stay fixed and are closed to renegotiation, and let everything else flex. With no anchors, the bond thins out by scattering. A quarrel is not what ends it.",
  },
  "5x6": {
    key: "5x6",
    headline: "The one who goes and the one who waits",
    body: "One needs movement. The other needs to know that people are well, and that they are present. The 6 hears independence as abandonment. The 5 hears care as surveillance.",
    practice:
      "The one who moves sends word before going, not after coming back. The one who waits asks what is actually needed, instead of assuming the need is to stay.",
  },
  "5x7": {
    key: "5x7",
    headline: "Two ways of stepping away",
    body: "Both need space, one turned outward and the other turned inward, so the freedom they give each other is large. The risk is a slow uncoupling: nobody objects, and the distance grows without a discussion.",
    practice:
      "Fix a point of contact that happens even on days when nothing is pressing. The break, when it comes, comes from forgetting, and a standing check-in is what stops it.",
  },
  "5x8": {
    key: "5x8",
    headline: "Risk and control",
    body: "The 8 is drawn to the 5's boldness, until that boldness reaches the resources. One bets from instinct. The other wants the sums done before any piece moves.",
    practice:
      "Name a sum, or a margin, that the impulsive one may move without checking in. A boundary carrying a figure does more than a general plea for caution.",
  },
  "5x9": {
    key: "5x9",
    headline: "Letting go for the new, letting go to close",
    body: "Both leave things behind with ease, one in search of what is new and the other in order to close a stage. They manage it without drama. Together they can also walk away from something worth keeping.",
    practice:
      "When you are about to drop something, wait a week and talk it through again. Letting go almost never has to be decided on the day it first appears.",
  },
  "5x11": {
    key: "5x11",
    headline: "Stimulus, and a nervous system that feels all of it",
    body: "The pace of the 5 is exactly what overloads the 11. What one of them lives as energy, the other lives as saturation, and neither says so while there is still time.",
    practice:
      "Agree a short signal in advance, and let the sensitive one use it the moment the limit arrives. Waiting until the feeling can be explained cleanly means waiting past the useful point.",
  },
  "5x22": {
    key: "5x22",
    headline: "Improvising on a large build",
    body: "The 22 is making something that depends on steadiness. The 5 brings sideways answers that sometimes save the work and sometimes throw it out of order.",
    practice:
      "Fence off a patch where improvising is welcome. The 5 is at full strength with one concrete problem and complete freedom inside that fence.",
  },
  "5x33": {
    key: "5x33",
    headline: "Movement, and the one who holds",
    body: "The 33 holds and the 5 moves, so the weight lands unevenly without anyone having chosen that. The one who holds grows tired. The one who moves does not see the tiredness.",
    practice:
      "Once a month, lay the unseen work out where it can be looked at. The 5 rarely withholds help. The load simply never enters their view.",
  },
  "6x6": {
    key: "6x6",
    headline: "Caring, and competing at it",
    body: "The bond is strongly protective, and a little airless. Each of them knows what would be good for the other. The trouble starts there.",
    practice:
      'Ask permission before you advise. "Can I tell you what I think?" changes how that exact advice is received.',
  },
  "6x7": {
    key: "6x7",
    headline: "Moving closer, drawing back",
    body: "One moves in when something is wrong. The other closes the door. The 6 hears silence as rejection. The 7 hears persistence as intrusion.",
    practice:
      "The one who draws back says how long they need, and then returns when that time is up. Keeping the time you promised builds the trust. The conversation, on its own, does less.",
  },
  "6x8": {
    key: "6x8",
    headline: "Care for people, care for results",
    body: "Both protect their own people, one through feeling and the other through material things. Each tends to treat the other's way of caring as the lesser one, without quite noticing the slight.",
    practice:
      "Say what the other person contributes, out loud, in words they would recognise as their own. Hearing the work named that way drains a store of resentment.",
  },
  "6x9": {
    key: "6x9",
    headline: "The near circle and the wider world",
    body: "Both give a great deal. One gives it to their own people, the other to anyone in need. The 6 can feel that their people have ended up at the back of the line.",
    practice:
      "List the priorities that will not be traded away. The argument comes from two different lists. It does not come from one person being selfish.",
  },
  "6x11": {
    key: "6x11",
    headline: "Holding, and absorbing the whole room",
    body: "The 11 gathers the tension around them. The 6 tries to repair it. Affection runs through the whole cycle, and neither person comes out of it restored.",
    practice:
      "Separate keeping someone company from fixing their problem. Sometimes the help is to stay near and not step in, and you only learn which by asking.",
  },
  "6x22": {
    key: "6x22",
    headline: "Wellbeing today, the work tomorrow",
    body: "The 22 gives up the present for the sake of what is being built. The 6 will not accept that the people close by are the ones who pay.",
    practice:
      "Cap what may be sacrificed, and name the point at which the sacrifice stops. With no such line, the project eats the ordinary day.",
  },
  "6x33": {
    key: "6x33",
    headline: "The calling to hold, squared",
    body: "Both are a refuge for many people, and neither has a refuge of their own. The care between them runs deep. As an arrangement, it cannot go on as it is.",
    practice:
      "Block a stretch of time in which neither of you is available to help anyone. Rest survives here only when the door is actively kept shut.",
  },
  "7x7": {
    key: "7x7",
    headline: "Two withdrawals at once",
    body: "They honour each other's space as few people do, and for that reason weeks can pass with nothing real said. The distance is never put on the table. It simply settles in.",
    practice:
      "Book a conversation about what actually matters, give it a date, and treat the date as kept. More solitude is not the missing piece. An appointment you are not free to skip is.",
  },
  "7x8": {
    key: "7x8",
    headline: "Understand first, or move now",
    body: "The 8 wants things in motion. The 7 wants the real risk understood before anything moves. Listened to, the decisions come out well. Unheard, one of them stalls the room and the other runs it over.",
    practice:
      "Record two dates: the day the analysis ends, and the day the decision is made. Rules carry you. Making the process up while you are inside it undoes you.",
  },
  "7x9": {
    key: "7x9",
    headline: "Depth and breadth",
    body: "Both are looking for meaning, one by going inward and the other by turning towards everyone else. The talk between them is very good. So is their talent for losing touch with anything concrete.",
    practice:
      "End each important conversation by naming one action and the day it will happen. Leave that off and a great deal is understood while very little moves.",
  },
  "7x11": {
    key: "7x11",
    headline: "Analysis and perception",
    body: "One arrives by reasoning and the other by intuition, often at the same place. The friction is the 7 demanding that the 11 justify a thing they simply know.",
    practice:
      "Hear the conclusion all the way through before you ask how it was reached. Require the reasoning before that, and you block the other person from speaking.",
  },
  "7x22": {
    key: "7x22",
    headline: "Seeing the system, and building it",
    body: "They share a taste for what goes deep. The 22 needs the design closed. The 7 can always find one further question that is still open.",
    practice:
      "On a date you choose in advance, declare the design frozen. Anything that shows up later goes onto a list for the next version, not back into the argument already in the room.",
  },
  "7x33": {
    key: "7x33",
    headline: "Stepping away, and staying near",
    body: "The 33 wants to be present. The 7 needs to be absent in order to process. The person offering company feels refused at the moment the offer is largest.",
    practice:
      "The withdrawal is explained before it happens, not once it is underway. A single sentence of warning keeps the silence from being filled with the harshest reading available.",
  },
  "8x8": {
    key: "8x8",
    headline: "Two authorities, one table",
    body: "They recognise the quality of each other's judgment, and they compete over control. Power divided, they are very hard to stop. Power undivided, the relationship becomes a negotiation that does not close.",
    practice:
      "In each area, put on paper whose word is final. Leave that blank and every decision becomes a contest of stamina, ended when one of you is worn through.",
  },
  "8x9": {
    key: "8x9",
    headline: "Result and purpose",
    body: "The 8 counts in figures. The 9 counts in human effect. Each finds the other naive or unfeeling, and there is some truth in both.",
    practice:
      "Keep two measures in view together, one hard and one human. Track only one of them and the person attached to the missing measure feels passed over.",
  },
  "8x11": {
    key: "8x11",
    headline: "Pressure and sensitivity",
    body: "The pace and the demand of the 8 are exactly what throws the 11 off balance. One of them believes the words are simply direct. The other receives them as an onslaught.",
    practice:
      "Bring the force down before you bring the content. For the 11, the manner of a sentence decides whether the sentence can be heard at all.",
  },
  "8x22": {
    key: "8x22",
    headline: "Power and architecture",
    body: "Both think at a large scale and both think in material terms, so the alliance can do formidable things. The dispute is about horizon: a return in the near term, or a structure made to last.",
    practice:
      "Keep the near-term money and the long-term money in separate funds. When both draw on the same fund, the urgent claim takes it every time.",
  },
  "8x33": {
    key: "8x33",
    headline: "Efficiency and compassion",
    body: "The 8 optimises. The 33 protects whoever that optimisation leaves outside. Spoken about, the tension is useful. Left unspoken, it eats at the bond.",
    practice:
      "Give the human cost a line of its own inside every decision. You are not recording it in order to block the decision. You are recording it so it does not return later as a fight.",
  },
  "9x9": {
    key: "9x9",
    headline: "Two carrying the world",
    body: "They understand each other in large matters, and they can neglect what is theirs with the same ease. The relationship is generous. In ordinary life it goes a little untended.",
    practice:
      "Reserve an hour that belongs only to the small things between the two of you. Leave it unfenced and it loses to whatever arrives dressed as more important.",
  },
  "9x11": {
    key: "9x11",
    headline: "Wide compassion, fine perception",
    body: "Both take in a great deal of their surroundings, one as a cause to carry and the other as a sensation in the body. Together they can become saturated and still not notice that the weight was never theirs.",
    practice:
      "On a repeating rhythm, name any weight you are carrying that does not belong to you. Once it has a name, it can be put down.",
  },
  "9x22": {
    key: "9x22",
    headline: "The ideal and the execution",
    body: "The 9 supplies the reason for the work. The 22 turns that reason into something that exists. A great deal can come of it, and the ideal can harden into a demand that nothing finished will meet.",
    practice:
      "Name the smaller version that already counts as success. Without that floor, finished work is thrown out for failing to be the whole ambition.",
  },
  "9x33": {
    key: "9x33",
    headline: "Serving and holding",
    body: "Both face outward, towards other people, and neither draws a limit. The bond has a great deal of shared purpose, and very little protection of either person.",
    practice:
      "While you are calm, write a limit you will both keep even when refusing hurts. In the moment someone asks, neither of you will be able to draw the line.",
  },
  "11x11": {
    key: "11x11",
    headline: "Two antennas and no filter",
    body: "Understanding passes between them almost at once, and so does the mood. What happens to one person is living in the other within minutes.",
    practice:
      "Before you step into what the other person is feeling, ask whether they want company or whether they want calm. Staying does not require feeling the same thing.",
  },
  "11x22": {
    key: "11x22",
    headline: "The vision and the raising of it",
    body: "The 11 senses the direction things need to go. The 22 knows how to build towards it. A great deal gets raised, and a great deal gets spent, because neither person stops.",
    practice:
      "Choose the signals that mean stop while you still have attention to spare. Exhaustion goes unrecognised until it is already a problem, so set the threshold before anyone is tired.",
  },
  "11x33": {
    key: "11x33",
    headline: "Extreme sensitivity, extreme giving",
    body: "Both feel a great deal and both give a great deal, so the bond is intense and deeply understanding. It is also especially liable to wear itself out without anyone saying so.",
    practice:
      "Ask about the load with one concrete question, answered from one to ten. An answer made only of adjectives, between these two, always comes out smaller than the truth.",
  },
  "22x22": {
    key: "22x22",
    headline: "Two builders, one set of plans",
    body: "Ambition and method are shared, so something very large can be raised. The conflict is about authorship. Each of them already holds a complete design in mind.",
    practice:
      "Split the work into modules and name the seam between them. A clear border between you does more than a running demand that every choice be agreed.",
  },
  "22x33": {
    key: "22x33",
    headline: "The structure and the people in it",
    body: "One builds the system. The other looks after the people who live in it. The fit is close, and it breaks when the plan requires a human cost.",
    practice:
      "Read a plan back by asking who it leaves out. While the plan is still open, that question belongs to the design. After the fact, it is the repair of harm.",
  },
  "33x33": {
    key: "33x33",
    headline: "Two refuges, and no refuge",
    body: "Understanding runs deep, because each knows what it costs to hold other people up. The risk is the same size. Nobody in the relationship is asking for anything, and both of them need to.",
    practice:
      "Assign turns for being on the receiving end, with a name and a day attached. Rest occurs only when it has been handed out as plainly as any other task.",
  },
};
