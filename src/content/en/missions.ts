import type { MissionContent } from "../types";

export const missions: Record<string, MissionContent> = {
  "1": {
    value: 1,
    title: "The one who goes first",
    essence: "You need the decision to be yours.",
    body: "You start things. Where others wait for instructions, you are already testing. It is not that you want to be in charge: it is that waiting is physically uncomfortable for you. You work best with territory of your own, however small.",
    strengths: [
      "You begin what nobody else will begin.",
      "You propose the first version when the group is paralysed by not knowing where to start.",
      "You decide with the information you have, without waiting for total certainty.",
    ],
    frictions: [
      "You treat asking for help as losing authority, and end up carrying things that were never yours.",
      "When someone questions your idea, you read it as a personal attack rather than a contribution.",
      "You move so far ahead that people feel they had no voice in what is already underway.",
    ],
    underPressure:
      "You become sharper and less willing to listen; you would rather decide alone than negotiate under stress.",
    inRelationships:
      "In partnership and friendship you usually take the initiative, but people who care about you sometimes need to feel they can lead too without you experiencing it as a challenge.",
    blindSpot:
      "For you, moving is progress; for others, your speed can feel like you already decided for them.",
    microPractice:
      "This week, before proposing a solution, ask someone close to you what they would do and wait for the full answer without jumping in.",
  },
  "2": {
    value: 2,
    title: "The one who holds the room",
    essence: "You feel the temperature before anyone speaks.",
    body: "You read people quickly and without trying. You notice tension before it is named, and you are usually the one who smooths it over. Your contribution is mostly invisible, because it consists of things not breaking.",
    strengths: [
      "You notice what people feel and do not say.",
      "You soften the atmosphere without being asked, because you sense tension before it explodes.",
      "You remember details of what matters to each person, and that makes them feel seen.",
    ],
    frictions: [
      "You give in so early to avoid friction that afterwards you cannot tell what you actually wanted.",
      "You avoid naming what bothers you until you have stored up so much that you explode or withdraw.",
      "You make yourself indispensable as the mediator and then tire of being everyone's glue.",
    ],
    underPressure:
      "You shrink or adapt too much; you prioritise the group's peace over what you need to say.",
    inRelationships:
      "You are the emotional anchor for many, but you rarely ask someone to listen to you with the same attention.",
    blindSpot: "You think you are avoiding conflict, when sometimes you are only postponing it.",
    microPractice:
      'Pick one pending conversation this week and say a single sentence that starts with "I need" before asking how the other person feels.',
  },
  "3": {
    value: 3,
    title: "The one who finds the words",
    essence: "You understand things by saying them out loud.",
    body: "You process outward. Talking, writing, making people laugh. People seek you out because the room gets lighter, and that is real work even if nobody calls it that. You need an audience, not out of vanity, but because thinking in silence is hard for you.",
    strengths: [
      "You put words to what others only feel.",
      "You ease tension with humour or metaphors when the atmosphere turns heavy.",
      "You make uncomfortable topics feel approachable because you name them naturally.",
    ],
    frictions: [
      "You use humour to dodge the hard conversation, and the conversation is still there afterwards.",
      "You talk so much while processing that the other person feels there is no room left to respond.",
      "You get drawn into the entertainment of the story and avoid closing on concrete agreements.",
    ],
    underPressure: "You talk faster and joke more; you seem light when inside you are overwhelmed.",
    inRelationships:
      "People seek you out to vent, but sometimes they mistake your capacity to listen for everything sliding off you.",
    blindSpot:
      "For you, thinking out loud is necessary; for others, it can sound like you have already taken a position without consulting them.",
    microPractice:
      "In one difficult conversation this week, let ten seconds of silence pass after the other person finishes before you respond. Do not fill the space.",
  },
  "4": {
    value: 4,
    title: "The one who builds the floor",
    essence: "Other people improvising costs you sleep.",
    body: "You think in steps, deadlines and failure modes. You are the one who notices a missing screw while everyone else is celebrating. Your peace depends on things having a verifiable order, and that reads as control when it is closer to care.",
    strengths: [
      "You turn other people's ideas into something that holds.",
      "You anticipate what can go wrong and prepare alternatives before it becomes urgent.",
      "You give the group stability because you deliver what you promise, on time and in detail.",
    ],
    frictions: [
      "You read a change of plan as disrespect, and go rigid exactly when flexibility is needed.",
      'You struggle to delegate because nobody will do it "the right way".',
      "You demand the same order that works for you, even when a different rhythm serves the other person.",
    ],
    underPressure:
      "You cling to the original plan and find it hard to admit that improvisation is required.",
    inRelationships:
      "You show care by fixing the practical side, but sometimes the other person needed to be heard before they needed a solution.",
    blindSpot:
      "What you call care — having everything under control — sometimes feels to others like a lack of trust in them.",
    microPractice:
      "Delegate one small task this week without correcting how it is done. Ask only for the result and sit with the discomfort.",
  },
  "5": {
    value: 5,
    title: "The one who needs an exit",
    essence: "A closed routine drains you faster than work does.",
    body: "New things move you: another subject, another city, another way of doing it. You learn fast because you get bored fast. You can genuinely commit, but you need to see that the door is not locked.",
    strengths: [
      "You adapt when the plan collapses, and you pull others with you.",
      "You bring fresh ideas when the group is stuck doing the same thing as always.",
      "You learn quickly in new situations and pass that energy on.",
    ],
    frictions: [
      "You switch paths before the last one paid off, and sometimes mistake freedom for not choosing.",
      "You promise more than you can sustain because every new thing excites you at first.",
      "Long-term commitment conversations make you uncomfortable, and you dodge them with humour or a change of subject.",
    ],
    underPressure:
      "You want to escape or renegotiate the rules; the feeling of being trapped clouds your judgment.",
    inRelationships:
      "You need space and variety; someone who loves you may read it as lack of interest when it is actually how you recharge.",
    blindSpot:
      "You think your flexibility is a gift for everyone; people who need predictability sometimes experience it as instability.",
    microPractice:
      "Commit in writing to one thing this week and do not abandon it even if something more interesting appears. Tell someone close.",
  },
  "6": {
    value: 6,
    title: "The one who takes responsibility",
    essence: "You look after everyone and nobody looks after you.",
    body: "You are the group's load-bearing wall. People bring you problems and you solve them, including the ones that are not yours. Your sense of being okay is tied to your people being okay, which is beautiful and exhausting at once.",
    strengths: [
      "People trust you with things they tell no one else.",
      "You notice who needs help before they ask and act without making a show of it.",
      "You create an environment where others feel safe because someone is paying attention.",
    ],
    frictions: [
      "You help without being asked, then resent not being recognised for it.",
      "You find it hard to say no because you feel you are abandoning people if you cannot do everything.",
      "You mix what others need with what you need in order to feel useful.",
    ],
    underPressure:
      "You take on more responsibility than is yours and complain afterwards after having said yes to everything.",
    inRelationships:
      "You are the pillar of family or friends, but you rarely let anyone care for you with the same intensity.",
    blindSpot:
      "You think love is shown by fixing things; sometimes the other person only wanted you present without fixing anything.",
    microPractice:
      'When someone tells you a problem this week, ask "Do you want me to listen or to help you solve it?" before you act.',
  },
  "7": {
    value: 7,
    title: "The one who needs to understand",
    essence: "Before answering, you go inward.",
    body: "Surface explanations do not satisfy you: you want to know how it works underneath. That requires silence and distance, which others usually read as coldness or anger. Your trust is earned with time, not with charm.",
    strengths: [
      "You see the pattern everyone else missed.",
      "You listen deeply and remember what someone said weeks ago.",
      "You offer calm perspective when others react impulsively.",
    ],
    frictions: [
      "You withdraw exactly when talking would help, and call independence what is sometimes fear.",
      "You distrust quick answers, and that can sound like contempt for anyone who acts in haste.",
      "You pull back to think and the other person reads silence as rejection or indifference.",
    ],
    underPressure:
      "You shut down and need more space; anyone who pushes you to talk makes it worse.",
    inRelationships:
      "You give carefully thought-out advice, but sometimes the other person needed comfort before analysis.",
    blindSpot:
      "For you, silence is processing; for someone who cares about you, it can be the signal that something is wrong and you will not say so.",
    microPractice:
      'This week, in an important conversation, warn before you withdraw: "I need to think this through; I am not angry, I will come back in [specific time]."',
  },
  "8": {
    value: 8,
    title: "The one who manages reality",
    essence: "You measure things by outcome, not intention.",
    body: "You think in terms of resources, power and consequences. Money and authority do not make you uncomfortable, and you move well where others freeze. Your way of caring is usually to solve the material problem, which is not always received as affection.",
    strengths: [
      "You convert effort into concrete results.",
      "You make hard decisions when others avoid the topic out of discomfort.",
      "You protect resources — time, money, energy — so the group does not burn out.",
    ],
    frictions: [
      "You measure people by what they produce, starting with yourself.",
      "You cut short emotional conversations because they seem unproductive, and the other person feels invalidated.",
      "You compete even in close bonds without realising you are keeping score.",
    ],
    underPressure:
      "You become colder and more results-driven; emotions look like noise that needs to be eliminated.",
    inRelationships:
      "You show commitment by solving material problems, but someone who loves you sometimes needs to hear that the bond matters more than performance.",
    blindSpot:
      "You think being direct is being honest; sometimes your clarity feels like judgment.",
    microPractice:
      'In one conversation this week, spend the first five minutes only listening — no solutions, no assessment of whether the complaint is "reasonable".',
  },
  "9": {
    value: 9,
    title: "The one who closes cycles",
    essence: "You carry things that are not even yours.",
    body: "You see the whole picture and you care what happens to people you will never meet. You have let go of stages, places and people more often than most, which gave you a wide view and a little melancholy. You give a lot without keeping score.",
    strengths: [
      "You understand people very unlike you.",
      "You help others release what no longer serves them — relationships, projects, resentments — with compassion.",
      "You see the wider context and keep the group from getting stuck fighting over details.",
    ],
    frictions: [
      "You throw yourself into the collective to avoid looking at what hurts up close.",
      "You find it hard to ask for what you need because you feel others need it more.",
      "You disconnect emotionally when something ends, and people who care about you experience it as abrupt distance.",
    ],
    underPressure:
      'You become philosophical or distant; you talk about the "big picture" to avoid feeling what is immediate.',
    inRelationships:
      "You give a lot and let go easily; someone who loves you may not know whether your generosity includes staying.",
    blindSpot:
      "You think your capacity to let go is maturity; sometimes it is avoiding the grief you would need to process.",
    microPractice:
      "This week, tell someone close one concrete need of yours — not a big favour, something small — without justifying why you deserve it.",
  },
  "11": {
    value: 11,
    title: "The one who feels too much",
    essence: "You sense it before you can explain it.",
    body: "You have the sensitivity of the 2 with the volume turned up. You pick up things about rooms and people that later turn out to be right, and you cannot say where they came from. The same channel that makes you intuitive leaves you exposed: what brushes past others goes straight through you.",
    strengths: [
      "You inspire people almost without trying.",
      "You pick up shifts in mood and atmosphere that others do not register until later.",
      "You connect with people deeply because you feel what they do not say.",
    ],
    frictions: [
      "You live with your nervous system switched on, and mistake anxiety for intuition.",
      "You absorb other people's moods and lose the distinction between what is yours and what is theirs.",
      "You overexpose yourself emotionally and then need to disappear without warning.",
    ],
    underPressure:
      "You are flooded by stimuli and other people's reactions; small things feel enormous.",
    inRelationships:
      "You are very present when you connect, but someone who loves you does not always know when you need space or boundaries.",
    blindSpot:
      "You think feeling more gives you more information; sometimes it only exhausts you and clouds what actually matters.",
    microPractice:
      "Before responding to a tense situation this week, name quietly (just for yourself) what is yours and what comes from the room. Then decide whether a reaction is needed.",
  },
  "22": {
    value: 22,
    title: "The one who builds to last",
    essence: "You think big and in detail at the same time.",
    body: "You have wide ambition and the 4's discipline to bring it down to earth. You see whole structures before they exist and you take building them seriously. That makes you valuable and also very demanding, of yourself first.",
    strengths: [
      "You sustain projects that outlive whoever started them.",
      "You unite big vision with concrete steps that others see as impossible to align.",
      "You inspire confidence because people know you will not abandon what you promised to build.",
    ],
    frictions: [
      "You live against a standard nobody asked you for, and call rest mediocrity.",
      "You demand from others the same level of commitment you demand from yourself, and that exhausts the team or family.",
      "You find it hard to celebrate partial progress because you always see what is still left to do.",
    ],
    underPressure:
      "You become more controlling and less flexible; you micromanage because failure is not an option in your head.",
    inRelationships:
      "You plan the future of relationships like projects; someone who loves you sometimes needs presence today, not architecture for tomorrow.",
    blindSpot:
      "You think your high standards are love for the result; for others they can feel like never being enough.",
    microPractice:
      "This week, acknowledge out loud one small step forward from someone close — at work, home or study — without adding what still needs improving.",
  },
  "33": {
    value: 33,
    title: "The one who teaches by caring",
    essence: "You become shelter for people who never asked.",
    body: "The 6's care extended well past your own circle. You accompany, explain, hold, and people leave a conversation with you feeling better. The risk is obvious: you carry the emotional weight of many with nowhere to set it down.",
    strengths: [
      "You make people feel understood without having to explain themselves.",
      "You explain with patience what others are afraid to ask twice.",
      "You hold several people emotionally at once without the effort showing — until you collapse.",
    ],
    frictions: [
      "You confuse being needed with being loved, and empty yourself holding others up.",
      "You give so much advice and comfort that others stop trying to solve things on their own.",
      "You do not ask for help because you feel your role is to give, not receive.",
    ],
    underPressure:
      "You keep caring even at your limit; you get sick or explode before you say enough.",
    inRelationships:
      "You are shelter for many; the people who love you most sometimes compete for space they feel is taken up by everyone else.",
    blindSpot:
      "You think being always available is generosity; sometimes it teaches others that your time has no limits.",
    microPractice:
      'This week, when someone asks for advice, respond with a question — "What have you already tried?" — before offering your opinion. Let them reach their own answer.',
  },
};
