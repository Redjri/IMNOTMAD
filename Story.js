// ── STORY DATA ────────────────────────────────────────────────
// Each node: { part, title, body (HTML string), choices[], progress, ending? }
// ending: { type, quote, desc }

const nodes = {

  prologue: {
    part: "",
    title: "Prologue",
    progress: 8,
    body: `
      <p>You are Lucas Gray.</p>

      <p>You don’t usually say that out loud, but that’s how you think of yourself when you’re trying to
      make sense of things. Like separating your name from the rest of your life makes everything
      feel a little more organized.</p>

      <p>You’re a writer, at least that’s what you tell people.</p>

      <p>Not the kind that publishes books with your name on the cover. More like the kind that edits 
      things late at night, rewrites other people’s words, fixes sentences that already exist. Freelance 
      work. Remote work. Quiet work.</p>

      <p>Work that doesn’t really end, it just stops for a while.</p>

      <p>Your apartment reflects that life. Minimal. A little messy, but not in a chaotic way, more like
      someone who lives alone and has slowly stopped paying attention to details that don’t feel 
      urgent.</p>

      <p>You’ve been living here for almost two years now.</p>

      <p>Long enough that it doesn’t feel temporary anymore, even if you still call it that in your head.</p>

      <p>The building itself is old. Not abandoned, just… tired. Block 4 Apartments. Cheap rent, close
      enough to everything that matters, far enough that nobody really comes to visit unless they have
      to.</p>

      <p>You’ve never been close with your neighbors.</p>

      <p>You recognize faces in the hallway, sometimes exchange short greetings, but nothing more than
      that. Everyone here seems to live in their own version of quiet.</p>

      <p>It suits you more than you’d like to admit.</p>

      <p>Lately, though, your routine has started to blur.</p>

      <p>You wake up, work at your desk, forget to eat properly, fall asleep at odd hours. Some nights
      you write for hours and delete everything the next morning because it feels unfamiliar, like
      someone else wrote it.</p>

      <p>You’ve told yourself it’s just fatigue.</p>

      <p>Probably nothing more than that.</p>

      <p>This morning is no different.</p>

      <p>You wake up slightly later than planned. The ceiling above you is the first thing you see, with
      that same faint crack in the paint you keep meaning to ignore. Your phone is beside you,
      already buzzing once before going silent again.</p>

      <p>You don’t move right away.</p>

      <p>For a moment, you just stay still and let your mind catch up to your body.</p>

      <p>Eventually, you reach for your phone.</p>

      <p>Messages. Notifications. A reminder you don’t remember setting. A draft document you forgot
      you were working on.</p>

      <p>Normal things.</p>

      <p>You sit up slowly.</p>

      <p>The apartment is quiet in a familiar way. Not comforting, not unsettling. Just… existing around
      you.</p>

      <p>Your desk is still where you left it. Your laptop is still open. The cursor still blinking on a
      half-finished paragraph you don’t fully remember writing.</p>

      <p>You stare at it for a few seconds, then close the laptop without reading it.</p>

      <p>Not today.</p>

      <p>Instead, you get up and walk toward the kitchen.</p>

      <p>Because whatever your life is becoming, it still needs coffee first.</p>
    `,
    choices: [
      { text: "Next Page", next: "part1" }
    ]
  },

  // ── PART I ──────────────────────────────────────────────────

  part1: {
    part: "Chapter I",
    title: "An Ordinary Morning",
    progress: 22,
    body: `
      <p>You stand in the kitchen for a moment while the coffee finishes brewing, letting the quiet
      morning settle around you in a way that feels familiar but not particularly meaningful.</p>

      <p>Nothing in your apartment is out of place. The same small details are exactly where they usually
      are, from the mug you always use without thinking to the slight clutter on the counter that you
      keep telling yourself you’ll clean later but never really do. It’s the kind of space that doesn’t ask
      anything from you, which is probably why you’ve grown used to it.</p>

      <p>When the coffee is ready, you pour it without rushing, holding the mug for a second longer than
      necessary before taking the first sip. It’s slightly too hot, but you don’t move away from it. You
      just wait for it to become manageable, like you always do.</p>

      <p>Eventually, you make your way back to your desk.</p>

      <p>Your laptop is still open, the screen dimmed but not asleep yet, and the document you left
      behind last night is still sitting there exactly where you remember it. Half-finished, slightly
      imperfect, waiting for you to continue it like nothing unusual happened.</p>

      <p>You sit down in front of it, but for a moment you don’t actually open anything. You just look at the
      screen, as if trying to remember the version of yourself that was working on it before you went to
      sleep.</p>

      <p>Then you open the document again.</p>

      <p>At first, everything feels normal. The structure is intact, the tone is consistent, and the writing is
      recognizably yours in a way that doesn’t immediately raise suspicion. It looks like something you
      would have written during one of those late nights when you’re just trying to get through a
      deadline without overthinking every sentence.</p>

      <p>But then you slow down.</p>

      <p>There’s a paragraph in the middle that catches your attention, not because it is wrong, but
      because you don’t remember writing it at all. You read it once, then again, trying to place it
      somewhere in your memory of last night, but nothing really connects to it.</p>

      <p>It doesn’t feel like someone else wrote it. It feels like you wrote it, just without the memory of
      doing so.</p>

      <p>That thought sits with you for a moment longer than you’re comfortable with.</p>

      <p>Because if it is yours, then your memory is incomplete in a way you didn’t notice.</p>
      
      <p>And if it isn’t, then something else is happening that you can’t easily explain.</p>

      <p>You scroll up slowly, just to check if there’s anything you missed, any break in continuity that
      could explain why this feels unfamiliar. But there isn’t. Everything flows into itself too smoothly,
      too cleanly, like the document has always existed in this exact form.</p>

      <p>You lean back slightly in your chair.</p>

      <p>It’s probably nothing.</p>

      <p>Fatigue does that sometimes. Late nights blur together, and writing can start to feel unfamiliar
      when you’re reading it in a different state of mind. That explanation should be enough to close
      the gap between what you remember and what is actually in front of you.</p>

      <p>You decide not to think about it too long.</p>

      <p>You close the document.</p>

      <p>Not because you’ve understood it, but because continuing to sit with it feels unnecessary in a
      way you can’t fully justify.</p>

      <p>For a moment, you just remain there in your chair, coffee slowly cooling beside you, laptop still
      faintly glowing in front of you.</p>

      <p>Everything is still normal.</p>

      <p>At least, that’s what you tell yourself.</p>

      <p>You try to move on with your morning, but something about the feeling doesn’t fully leave.</p>
    `,
    choices: [
      { text: "Open a new document and start working properly", next: "part1_c1" },
      { text: "Reopen the document and read more carefully",  next: "part1_c2" },
      { text: "Close everything and just sit for a while",  next: "part1_c3" }
    ]
  },
  part1_c1: {
    part: "Chapter I",
    title: "An Ordinary Morning",
    progress: 22,
    body: `
      <p>You decide it’s better to continue forward rather than dwell on something you can’t prove is
      strange.</p>

      <p>You open a fresh file and begin writing again, forcing yourself back into structure and routine. At
      first, it works as expected. Your mind settles into the rhythm of work, and the earlier uncertainty
      gets pushed to the background where it’s easier to ignore.</p>

      <p>But even while you write, there’s a faint sense that your focus isn’t as clean as it usually is, like
      part of your attention is still anchored to something you chose not to examine further.</p>
    `,
    choices: [
      { text: "Next Page", next: "part2" },
    ]
},
part1_c2: {
    part: "Chapter I",
    title: "An Ordinary Morning",
    progress: 22,
    body: `
      <p>You decide it’s better not to leave it unresolved.</p>

      <p>If something feels off, even slightly, it’s usually worth understanding before it turns into
      something you keep thinking about anyway.</p>

      <p>You reopen the document and read it again, this time slower, paying attention not just to what is
      written but how it fits into your memory of writing it.</p>

      <p>The strange part is not that the text is wrong, but that your memory of creating it feels
      incomplete, as if there is a gap between the act of writing and the result that you’re looking
      at now.</p>   
    `,
    choices: [
      { text: "Next Page", next: "part2" },
    ]
},
part1_c3: {
    part: "Chapter I",
    title: "An Ordinary Morning",
    progress: 22,
    body: `
      <p>You decide not to engage with anything for the moment.</p>

      <p>No document, no work, no checking anything again.</p>

      <p>You just sit there, letting the quiet of the apartment become noticeable in a way it wasn’t before.
      It doesn’t feel louder or different, just more present, like you’re suddenly aware of details that
      were always there but never observed closely enough to matter.</p>

      <p>Even the smallest background sounds feel slightly more defined than they should.</p>   
    `,
    choices: [
      { text: "Next Page", next: "part2" },
    ]
},
  // ── PART II ─────────────────────────────────────────────────

  part2: {
    part: "Chapter II",
    title: "The Wall of Unit 4B",
    progress: 38,
    body: `
      <p>You try to move on with your morning, but the feeling from earlier doesn’t fully disappear the
      way normal thoughts usually do. It doesn’t stay sharp enough to call it a problem, but it also
      doesn’t fade completely, like something your mind decided to place in the background instead of
      resolving properly.</p>

      <p>Then, at some point, you notice something you don’t remember hearing before.</p>

      <p>A sound.</p>

      <p>Not loud. Not dramatic. Just… consistent.</p>

      <p>A soft thump, faint enough that you almost convince yourself it’s part of the building settling or
      the usual noise of old pipes running through the walls. But the problem is not how loud it is, it’s
      how steady it feels, like it has a rhythm that doesn’t belong to anything you can easily explain.</p>

      <p>You stop typing.</p>

      <p>For a moment, you just listen.</p>

      <p>It comes again.</p>
      
      <p><i>Thump.</i></p>

      <p>And then silence, just long enough for your mind to try filling in the gap.</p>

      <p>You lean slightly back in your chair, trying to place it. Your apartment is quiet enough that
      you can usually identify where sounds come from, but this one doesn’t behave like a normal sound.
      It doesn’t echo properly. It doesn’t shift when you move your attention around the room.</p>

      <p>It feels like it’s coming from somewhere fixed.</p>

      <p>Somewhere next to you.</p>

      <p>Or behind the wall.</p>

      <p>The wall shared with Unit 4B.</p>

      <p>You realize you’ve thought about that unit more times this morning than you usually do in an
      entire week.</p>

      <p>And that thought alone makes you pause longer than the sound itself.</p>

      <p>You sit there for a moment, unsure if you should treat this as something real or just another
      distraction your mind is creating while you’re trying to work.</p>
    `,
    choices: [
      { text: "Rationalize it and go back to work", next: "part2_c1"},
      { text: "Stop working and try to locate the sound", next: "part2_c2"}
    ]
  },

  part2_c1: {
    part: "Chapter II",
    title: "The Wall of Unit 4B",
    progress: 38,
    body: `
      <p>You exhale through your nose, almost like you’re dismissing the entire thought process itself
      rather than the sound. It’s easier that way. You’ve done this before with things that don’t make
      immediate sense: push them aside, label them as background noise, let work fill the space
      instead.</p>

      <p>You turn back toward your laptop.</p>

      <p>The document is still open, still waiting, still unchanged from when you last looked at it. You
      force your attention back into it, placing your hands on the keyboard like the act alone is enough
      to reset your focus.</p>

      <p>For a while, it works.</p>

      <p>You start typing again, slowly at first, then more normally as your mind adjusts back into
      structure. Deadlines, sentences, edits, things that feel real in a way uncertain thoughts don’t.</p>

      <p>But even as you work, something remains in the background.</p>

      <p>Not loud enough to interrupt you.</p>

      <p>Just present enough that you’re aware it didn’t disappear.</p>
    `,
    choices: [
      { text: "Next Page", next: "part3"},
    ]
  },
  part2_c2: {
    part: "Chapter II",
    title: "The Wall of Unit 4B",
    progress: 38,
    body: `
      <p>You stop typing completely.</p>

      <p>This time, you don’t try to explain it away or reduce it into something harmless. You just listen.
      Properly. Without distraction.</p>

      <p>And after a few seconds, it comes again.</p>

      <p><i>Thump</i></p>

      <p>You realize it’s not random. There’s a rhythm to it. Not musical, not mechanical in an obvious
      way, but consistent enough that your mind starts trying to map it instinctively.</p>

      <p>You stand up without fully deciding to. Your chair shifts slightly behind you, but even that sound
      feels less important now than whatever you’re focusing on.</p>

      <p>You take a few steps toward the wall.</p>

      <p>The apartment suddenly feels smaller than it did before. Not physically, just in terms of attention.
      Like everything outside this moment has faded slightly so that this one direction becomes
      clearer in your mind.</p>

      <p>The wall in front of you is plain. Familiar. Shared.</p>

      <p>Unit 4B is on the other side.</p>

      <p>You don’t remember when you started thinking about that unit so often.</p>

      <p>But now you are.</p>
    `,
    choices: [
      { text: "Next Page",      next: "part3"},
    ]
  },

  // ── PART III ────────────────────────────────────────────────

  part3: {
    part: "Chapter III",
    title: "The Rhythm in the Wall",
    progress: 52,
    body: `
      <p>The sound doesn’t fade.</p>

      <p>It stays in the same place it was before, or at least it feels like it does. You can’t really prove
      anything about it anymore. Every time you try to pin it down as something ordinary, pipes,
      building structure, something mechanical, it refuses to fully settle into that explanation.</p>

      <p><i>Thump.</i></p>

      <p>You notice something subtle now.</p>

      <p>It’s not just that you hear it.</p>

      <p>It’s that you start reacting to it before you even decide what it is.</p>

      <p>And that’s what makes you pause longer this time.</p>

      <p>Because whatever this is, it’s no longer just something you are listening to.</p>

      <p>It’s something you are responding to.</p>

      <p>So you move.</p>

      <p>Not all at once.</p>

      <p>But enough that your body starts making decisions before your thoughts fully agree with them.</p>
    `,
    choices: [
      { text: "You stand up and press your hand against the wall",    next: "part3_a" },
      { text: "You start writing down the sound",             next: "part3_b" },
      { text: "You step into the hallway", next: "part3_c"}
    ]
  },

  part3_a: {
    part: "Chapter III",
    title: "The Rhythm in the Wall",
    progress: 52,
    body: `
      <p>You don’t fully plan to do it. It happens in a kind of delayed realization, like your body decides to
      test something before your mind finishes questioning whether it’s a good idea.</p>

      <p>You step closer to the wall.</p>

      <p>It looks the same as it always has, paint slightly uneven in places, faint marks from time, nothing
      that should make you think twice about it. But now you’re close enough that the idea of it being
      “just a wall” doesn’t feel as complete as it did before.</p>

      <p>You place your hand against it.</p>

      <p>It’s cold. Normal. Solid.</p>

      <p>At first, nothing happens.</p>

      <p>You almost feel relieved by that.</p>

      <p>But then you notice yourself waiting.</p>

      <p>Not for something dramatic. Not for a reaction.</p>

      <p>Just for something that confirms or denies what you’ve started to suspect.</p>

      <p><i>Thump.</i></p>

      <p>It comes again.</p>
      
      <p>And this time, your hand doesn’t move away immediately.</p>

      <p>Because you’re not sure if you imagined the timing or if you felt it slightly through the surface.</p>

      <p>That uncertainty is what makes you keep your hand there longer than you intended.</p>
    `,
    choices: [
      { text: "Next Page",        next: "part4_a"   },
    ]
  },

  part3_b: {
    part: "Chapter III",
    title: "The Rhythm in the Wall",
    progress: 52,
    body: `
      <p>You sit back down, but you don’t open a new document right away. Instead, you reach for
      whatever is closest, your notes, your drafts, anything that lets you externalize what you’re
      experiencing instead of keeping it inside your head.</p>

      <p>You begin to write.</p>

      <p>Not creatively. Not formally.</p>

      <p>Just observation.</p>

      <p>Time. Pattern. Repetition. Frequency.</p>

      <p>You try to treat it like data, like something that becomes less confusing when you give it
      structure.</p>

      <p><i>Thump.</i></p>

      <p>You write it down.</p>

      <p>Once.</p>

      <p>Then again when it returns.</p>

      <p>At first, it feels like control. Like you’re reducing uncertainty into something manageable.</p>

      <p>But the longer you do it, the more you realize something uncomfortable.</p>

      <p>The pattern doesn’t become clearer.</p>

      <p>You just become more aware of how often you are waiting for it.</p>

      <p>And how rarely it actually changes.</p>
    `,
    choices: [
      { text: "Next Page", next: "part4_b"    },
    ]
  },

  part3_c : {
    part: "Chapter III",
    title: "The Rhythm in the Wall",
    progress: 52,
    body: `
      <p>You grab your keys without fully thinking through why you’re doing it. It doesn’t feel like
      a decision anymore, more like a continuation of not wanting to stay in one place while something
      inside it keeps repeating itself without explanation.</p>

      <p>You step out into the hallway.</p>

      <p>The air outside your apartment feels slightly different, not because it actually is, but because
      your attention is now distributed across a larger space. The corridor is quiet in a way that feels
      normal for a building like this, people living their own lives behind closed doors, nothing unusual
      about that.</p>

      <p>You start walking.</p>

      <p>Not quickly. Not slowly. Just enough movement to feel like you’re doing something instead of
      just reacting.</p>

      <p>Halfway down the corridor, you slow down without meaning to.</p>

      <p>Because you realize you’re not actually trying to escape the sound.</p>

      <p>You’re trying to see if it exists outside of where you left it.</p>

      <p><i>Thump.</i></p>

      <p>It comes again.</p>

      <p>And this time, you stop walking completely.</p>

      <p>Because it didn’t feel like it came from behind you.</p>

      <p>Or inside your apartment.</p>

      <p>It felt like it came from the building itself.</p>

      <p>Like the place you’re standing in is not separate from it anymore.</p>
    `,
    choices: [
      { text: "Next Page",     next: "part4_c"    },
    ]
  },

  // ── PART IV ─────────────────────────────────────────────────

  part4_a: {
    part: "Part IV",
    title: "The Return",
    progress: 64,
    body: `
      <p>You don’t stay outside the wall anymore.</p>

      <p>At some point, the idea of standing in front of it stops feeling like enough. Not because you are
      certain about what is on the other side, but because uncertainty itself has started to feel more
      tolerable when you are closer to it than when you are away from it.</p>

      <p><i>Thump.</i></p>

      <p>You stand in front of Unit 4B again.</p>

      <p>The door doesn’t feel different than before, but your awareness of it does. It no longer feels like
      a boundary you are hesitating at. It feels like a threshold you are already halfway through, even
      before you decide to move.</p>

      <p>And then you do.</p>

      <p>You open it.</p>

      <p>This time there is no hesitation in the motion itself, only in the space between intention and
      recognition. The door gives way without resistance, and for a moment, nothing about that feels
      strange enough to stop you.</p>

      <p>You step inside.</p>

      <p>The room doesn’t greet you with anything immediate.</p>

      <p>No dramatic shift. No obvious change. No confirmation that you are somewhere you are not
      supposed to be.</p>

      <p>Instead, what you notice first is how unstable “certainty” feels inside the space.</p>

      <p>The room is there.</p>

      <p>But how it is there doesn’t fully hold still.</p>

      <p>At one moment, it feels empty in a clean, abandoned way, dust settled, air unmoving, the sense
      of something unused for a long time.</p>

      <p>Then, without you clearly noticing when it changes, that same space feels slightly altered, like it
      has been recently occupied without leaving a trace that should logically exist. Not messy. Not
      disturbed. Just… different in a way your mind keeps trying to correct but cannot fully stabilize.</p>

      <p>You don’t move further in immediately.</p>

      <p>You just observe.</p>

      <p>Carefully.</p>

      <p>Quietly.</p>

      <p>As if movement itself might disturb something that is already not fully stable to begin with.</p>

      <p><i>Thump.</i></p>

      <p>The sound comes again.</p>

      <p>But now it doesn’t feel like it belongs behind a wall anymore.</p>

      <p>Because there are no longer clear “behind” or “outside” categories that feel reliable inside this
      room.</p>

      <p>Instead, it feels like the sound exists in relation to your attention.</p>

      <p>Not the space.</p>

      <p>You take a slow step forward.</p>

      <p>Then stop again.</p>

      <p>Not because something stops you.</p>

      <p>But because you are trying to understand how the room reacts to your presence when you are
      no longer outside observing it, but inside it.</p>

      <p>Nothing confirms anything.</p>

      <p>But nothing denies it either.</p>

      <p>And that absence of resolution is what makes you stay still longer than necessary.</p>

      <p>You start looking around.</p>

      <p>Not searching.</p>

      <p>Just observing.</p>

      <p>The corners of the room. The floor. The way light sits in the space. Every detail feels slightly too
      neutral, as if the room is deliberately refusing to offer you anything definitive to interpret.</p>

      <p>And yet, the longer you stand there, the more you feel like the room is not static.</p>

      <p>It is not changing visibly.</p>

      <p>But it is not holding one consistent version of itself either.</p>

      <p>You realize something slowly, almost reluctantly.</p>

      <p>You are not inside a stable room.</p>

      <p>You are inside a version of a room that depends on how long you stay in it.</p>

      <p><i>Thump.</i></p>
      
      <p>You don’t turn your head anymore.</p>

      <p>Because direction is starting to feel less meaningful than presence itself.</p>

      <p>And for the first time, you don’t feel like you entered a place.</p>

      <p>You feel like you entered a condition.</p>
    `,
    choices: [
      { text: "Next Page", next: "part5" }
    ]
  },

  part4_b: {
    part: "Part IV",
    title: "Unit 4B",
    progress: 66,
    body: `
      <p>You close your notes, but not in a way that feels like ending the thought, more like temporarily
      setting it aside because it has started to feel too large to hold in isolation, and something about
      it demands a response that doesn’t come from you alone anymore.</p>

      <p>The sound is still there in the background of your awareness, not interrupting you anymore but
      existing in a way that feels increasingly difficult to separate from your sense of certainty, as if it
      has already started to establish itself as something that continues regardless of whether you
      acknowledge it or not.</p>

      <p><i>Thump.</i></p>

      <p>You stand up without fully framing it as a decision, because at this point it feels less like you are
      choosing to move and more like you are following a line of reasoning that has already extended
      beyond the space of your apartment, carrying you toward something that needs external
      confirmation rather than internal reflection.</p>

      <p>You step into the hallway and walk toward one of the neighboring doors you recognize, not
      because you have a clear expectation of what you will hear, but because the idea of your
      experience existing only inside your own perception has started to feel insufficient in a way you
      cannot ignore anymore.</p>

      <p>When the neighbor opens the door, the interaction begins in the usual small, socially neutral
      way that most conversations in the building seem to follow, but it shifts quickly once you mention
      Unit 4B, because even before you explain the sound or the pattern you have been tracking,
      there is already a slight pause in their expression, as if the name itself carries a familiarity that
      you did not realize was shared.</p>

      <p>“Unit 4B? That one’s been empty for a long time.”</p>

      <p>You nod once, but not because you are agreeing, more because you are trying to align what you
      are hearing with what you have already documented, as if the act of confirmation might stabilize
      the inconsistency forming between your notes and their certainty.</p>
      
      <p>You explain the sound anyway, carefully at first, then more precisely as you describe the timing,
      the repetition, the way it appears consistent enough for you to have recorded it, because part of
      you is still trying to maintain coherence between what you experience and what should be
      physically possible in a shared building.</p>

      <p>The neighbor listens, but not with the same recognition you expected, and when they respond,
      their tone carries something quieter than disbelief, something closer to disalignment.</p>

      <p>“I’ve never heard anything from that unit. Nobody really goes near it anymore.”</p>

      <p>You pause when they say that, not outwardly, but internally in a way that interrupts your
      confidence more than you expected it to, because now your notes feel too structured to be
      imagination, while their certainty feels too stable to be dismissed immediately, and both versions
      of reality begin to exist at the same time without resolving into a single explanation.</p>

      <p>You open your notes again without fully intending to show them, but once they are visible, you
      realize you are not trying to convince the neighbor anymore, you are trying to anchor your own
      perception in something external enough that it cannot be reduced to doubt alone.</p>

      <p>They glance at the pattern you’ve written down, then shake their head slightly, not dismissively
      but in a way that suggests the information simply does not connect to anything they have
      experienced within the same space.</p>

      <p>“That doesn’t match anything I’ve ever noticed here.”</p>

      <p>And in that moment, the contradiction stops being theoretical, because you are now standing
      between two versions of the same place that do not overlap in any meaningful way, and neither
      of them feels strong enough to fully override the other.</p>

      <p>Without saying anything further, you turn away from the door and begin walking back toward
      Unit 4B, not because you are trying to prove something anymore, but because you have
      reached a point where leaving it unverified feels more unstable than approaching it again.</p>

      <p>Behind you, the door closes, and the hallway returns to silence that no longer feels neutral.</p>
    `,
    choices: [
      { text: "Next Page", next: "part5"   },
    ]
  },

  part4_c: {
    part: "Part IV",
    title: "Unit 4B",
    progress: 66,
    body: `
      <p>You stop walking in the hallway, but not because you’ve decided anything has been resolved.
      It’s more like your body reaches a point where continuing forward or staying outside both feel
      equally meaningless, as if distance itself has stopped offering any kind of clarity.</p>

      <p><i>Thump.</i></p>

      <p>It comes again, and this time it doesn’t feel like it belongs to any direction at all. Not behind you,
      not ahead of you, not inside or outside anything you can clearly define anymore. It simply exists,
      and your awareness of it no longer depends on where you are standing.</p>

      <p>You turn back.</p>

      <p>Not toward escape.</p>

      <p>Not toward uncertainty.</p>

      <p>But toward the only place that has remained consistently connected to it since the beginning.</p>

      <p>Unit 4B.</p>
      
      <p>Your steps back feel different now, not faster or slower, but stripped of hesitation, like the 
      decision has already been made somewhere earlier and you are only catching up to it
      physically.</p>

      <p>The hallway doesn’t change as you move through it, but your perception of it does. Doors pass
      you in the same quiet order, lights remain unchanged, yet everything feels slightly less like a
      shared residential space and slightly more like a corridor leading back into something you have
      already crossed once before without fully understanding it.</p>

      <p>When you reach the door of Unit 4B, you don’t pause for long.</p>

      <p>There is no moment of reconsideration this time, because hesitation feels less like caution and
      more like delay.</p>

      <p>You open it.</p>

      <p>The room is still there.</p>

      <p>But the feeling of “entering” is different now.</p>

      <p>It doesn’t feel like stepping into a new space anymore.</p>

      <p>It feels like returning to a condition that was already waiting for you to acknowledge it properly.</p>

      <p>Inside, nothing is fully stable in the way a normal room should be. The emptiness is not clean or
      fixed, it shifts subtly depending on how long you focus on any single part of it, as if the room is </p>

      <p>not presenting a single version of itself, but allowing multiple states to overlap without choosing
      one.</p>

      <p><i>Thump.</i></p>

      <p>It comes again.</p>

      <p>And now, standing inside Unit 4B again, you realize something that no longer feels avoidable.</p>

      <p>The sound is not located anywhere in particular.</p>

      <p>It is simply still present in the same way your awareness of this room is still present.</p>

      <p>And both of them feel like they belong to the same thing now.</p>

      <p>You don’t move further in yet.</p>

      <p>But you don’t step back either.</p>

      <p>You just stay there, inside the space that no longer feels like it can be fully entered or fully left.</p>
    `,
    choices: [
      { text: "Next Page", next: "part5"   },
    ]
  },

  // ── PART V ──────────────────────────────────────────────────

  part5: {
    part: "Part V",
    title: "The Pattern",
    progress: 78,
    body: `
      <p>You move deeper into Unit 4B without really deciding to stop.</p>

      <p>At some point, standing still feels less like observation and more like surrendering control over
      something that is already shifting without your permission. So you start moving through the
      room instead, slowly at first, then more deliberately, tracing its space as if repetition might reveal
      structure, as if understanding could still come from consistency.</p>

      <p><i>Thump.</i></p>

      <p>It is louder now.</p>

      <p>Not in volume that should be physically measurable, but in presence.</p>

      <p>It no longer feels like something happening in the background of the room, it feels like
      something the room is actively participating in, as if the space itself is no longer neutral to what
      you are hearing.</p>

      <p>You turn your head.</p>

      <p>Then your body follows.</p>

      <p>You circle the room again.</p>

      <p>And as you do, something begins to feel wrong in a way that is no longer subtle enough to ignore.</p>

      <p>The room is not stable.</p>

      <p>Not in the way dust shifts or light changes throughout the day.</p>

      <p>But in a deeper way.</p>

      <p>A way that makes you question whether what you are seeing is being held together consistently at all.</p>

      <p>A corner of the room looks slightly farther than it did a moment ago.</p>

      <p>Then closer when you return your attention to it again.</p>

      <p>A wall feels solid when you touch it, but less certain when you stop touching it, like its stability
      depends on contact rather than existence.</p>

      <p><i>Thump.</i></p>

      <p>It comes again, and now it feels synchronized with your movement.</p>

      <p>Not responding to it.</p>

      <p>Not causing it.</p>

      <p>But aligned with it, as if your presence inside the room is part of the condition that allows it to
      continue.</p>

      <p>You stop walking.</p>

      <p>For the first time since entering, you realize something you don’t immediately want to name.</p>

      <p>The room is not consistent enough to trust.</p>

      <p>And neither is your perception of it anymore.</p>

      <p>You look around again, slower this time, trying to anchor yourself in something fixed, wall, door,
      corner, anything, but every point you focus on feels slightly unstable once your attention moves
      away from it.</p>

      <p>It is not changing in obvious ways.</p>

      <p>It is refusing to stay singular.</p>

      <p>And that is worse.</p>

      <p>Because now you are no longer sure whether the room is changing…</p>

      <p>or whether you are.</p>

      <p><i>Thump.</i></p>

      <p>It is almost inside your chest now.</p>

      <p>Or aligned with it.</p>

      <p>You can’t fully tell anymore.</p>

      <p>Your breathing slows without you instructing it to.</p>

      <p>Your thoughts begin to separate from each other slightly, as if trying to maintain structure in a
      space that no longer guarantees stability.</p>

      <p>And then the realization comes, not as a conclusion, but as something that slips into place
      without permission.</p>

      <p>You might be wrong about everything you’ve experienced so far.</p>

      <p>Or the room might be wrong.</p>

      <p>Or neither of those categories might apply anymore.</p>

      <p>You step toward the door.</p>

      <p>Not quickly.</p>

      <p>Not calmly.</p>

      <p>Just because movement feels like the only remaining proof that you still have direction.</p>

      <p>You reach it.</p>

      <p>Turn the handle.</p>

      <p>It doesn’t open.</p>

      <p>You try again.</p>

      <p>Still nothing.</p>

      <p>You pause.</p>

      <p>Then try a third time, slower, more deliberate, as if patience might change the outcome.</p>

      <p>But the door remains unchanged.</p>

      <p>Locked.</p>

      <p>Not in a way that feels mechanical.</p>

      <p>In a way that feels final.</p>

      <p>You step back slightly, eyes still fixed on it, and for a moment, the sound fills the space
      completely.</p>

      <p><i>Thump.</i></p>

      <p>And now there is no longer any clear separation between where the sound is coming from,
      where the room ends, or where your perception of either begins.</p>

      <p>You realize there are only three things left that feel certain enough to name.</p>

      <p>That something is wrong with you.</p>

      <p>Or something is wrong with the room.</p>

      <p>Or nothing is wrong at all, and you are simply no longer able to tell the difference.</p>

      <p>At this point, the room no longer gives you clear reference points to rely on.</p>

      <p>You have to decide what this is.</p>
    `,
    choices: [
      { text: "You try to stabilize yourself inside the room", next: "part5_a" },
      { text: "You assume the room itself is unstable", next: "part5_b" },
      { text: "You try to force the exit", next: "part5_c" }
    ]
  },

  part5_a: {
    part: "Part V",
    title: "Something is Wrong with Me",
    progress: 78,
    body: `
      <p>It starts small, almost unnoticeable at first, like tension building in a way your body doesn’t fully
      communicate to your thoughts. You stand in the middle of Unit 4B and try to make sense of
      what you are experiencing, but the attempt doesn’t organize anything, it only makes the
      pressure inside your head feel sharper, more concentrated, harder to distribute evenly across
      thought.</p>

      <p><i>Thump.</i></p>

      <p>You exhale, but it doesn’t release anything..</p>

      <p>Your hand lifts slightly, not toward the wall this time, but toward yourself, as if you are suddenly
      more uncertain about your own stability than the room’s. You take a step back, then forward
      again without meaning to, caught in a loop of trying to reset something that refuses to reset
      properly.</p>

      <p>“What’s wrong with me…”</p>

      <p>The words come out under your breath before you fully decide to say them.</p>

      <p>And then something breaks in the rhythm.</p>

      <p>You raise your hand and hit your own head once, not violently enough to harm, but sharply
      enough to interrupt whatever spiral your thoughts are forming. It doesn’t feel like logic, it feels
      like interruption, like you are trying to physically disrupt a process that is happening too fast
      internally.</p>

      <p>But it doesn’t stop.</p>

      <p>If anything, it makes you more aware of how unstable your reactions are becoming inside this
      space.</p>

      <p>And for a moment, you stand there, breathing unevenly, realizing that you are no longer just
      observing Unit 4B.</p>

      <p>You are reacting to it in ways you don’t fully control anymore.</p>
    `,
    choices: [
      { text: "Going tantrum", next: "part6a_a" },
      { text: "Follow the anomaly", next: "part6a_b" }
    ]
  },

  part5_b: {
    part: "Part V",
    title: "The Door",
    progress: 78,
    body: `
      <p>You stop trying to interpret what is happening to you and instead redirect all of your attention
      outward, toward the structure of the room itself, as if shifting the responsibility of instability away
      from your mind will make it easier to locate something concrete to hold onto.</p>

      <p><i>Thump.</i></p>

      <p>You turn slowly, scanning the space again with more intensity than before, not looking for
      comfort or familiarity anymore, but for inconsistency, something you can isolate, something you
      can point to and say this is where the problem begins.</p>

      <p>You move along the room again, but differently now, focusing on how each part of it presents
      itself when you are actively paying attention to it. A corner that felt fixed a moment ago no
      longer feels as certain when you return your gaze to it. The distance between objects seems to
      adjust slightly depending on where you are standing, not dramatically enough to confirm
      immediately, but enough to make you question whether it was ever fully stable to begin with.</p>

      <p>You start testing it without fully planning to.</p>

      <p>Stepping forward, then stopping.</p>

      <p>Looking away, then back again.</p>

      <p>And each time, the room does not contradict itself in a clear way, it simply refuses to remain fully
      consistent long enough for you to trust any single interpretation of it.</p>

      <p>And that is what unsettles you most.</p>

      <p>Not change.</p>

      <p>But instability that never confirms itself as change.</p>
    `,
    choices: [
      { text: "You follow the sound", next: "part6b_a" },
      { text: "You let your body decide movement", next: "part6b_b" }
    ]
  },

  part5_c: {
    part: "Part V",
    title: "The Door",
    progress: 78,
    body: `
      <p>You turn toward the door immediately, not as an escape anymore, but as a direct attempt to test
      whether boundaries still function in the way they are supposed to. You reach for the handle
      without hesitation this time, gripping it firmly as if physical certainty might still exist somewhere
      in the system you are standing inside.</p>

      <p><i>Thump.</i></p>

      <p>You pull.</p>

      <p>It doesn’t open.</p>

      <p>You try again, harder.</p>

      <p>Still nothing.</p>

      <p>Your breathing shifts slightly, not into panic yet, but into something more concentrated, like your
      body is starting to register that repetition is not producing different outcomes anymore.</p>

      <p>You step back and try once more, slower, more deliberate, adjusting your grip, your stance,
      your force, as if precision might matter more than persistence.</p>

      <p>But the result stays the same.</p>

      <p>Locked.</p>

      <p>Not mechanically resisting you in a way you can fix.</p>

      <p>But refusing the concept of exit entirely.</p>

      <p>And for a moment, you realize something that doesn’t fully settle into language yet:</p>

      <p>It is not that you are inside a room that is hard to leave.</p>

      <p>It is that leaving is not being recognized as a valid action inside this space.</p>
    `,
    choices: [
      { text: "Call out for help", next: "part6c_a" },
      { text: "Throw your body against the door", next: "part6c_b" }
    ]
  },

  // ── PART VI ─────────────────────────────────────────────────

  part6a_a: {
    part: "Part VI",
    title: "Subject: Lucas Gray",
    progress: 90,
    body: `
      <p><i>Thump.</i></p>

      <p>It happens again, and this time the sound doesn't just fill the room. It fills you, until there's
      nothing left of the restraint you didn't know you were holding.</p>

      <p>"Who are you??"</p>

      <p>Sharper than you mean it. You're on your feet before you register standing, crossing the room,
      breath uneven, body moving ahead of thought.</p>

      <p>Silence answers you, and the silence is worse than the sound. It doesn't defend itself. It doesn't
      need to.</p>

      <p>"Stop it!"</p>

      <p>Louder now, not to threaten, but to force something to acknowledge that you exist in a way that
      requires a response. Your hand finds the edge of the shelf and shoves before you decide to.
      Something falls. You don't look at what. You sweep your arm across the desk and the lamp goes
      with it, the cord snapping taut and then slack, the bulb dying mid-arc. A chair goes over. Papers
      you haven't read yet scatter across the floor along with the ones you have. You're not destroying
      the room so much as trying to make it answer you the way the sound won't, if you can't get a
      response, you'll at least get noise of your own.</p>

      <p><i>Thump.</i></p>

      <p>Still there. Still exactly the same, indifferent to the wreckage you're making of everything except
      itself.</p>

      <p>And then you stop. Not because you've calmed down, because something in the mess you've
      made catches your eye in a way that has nothing to do with anger anymore.</p>

      <p>The drawer. Knocked half out of the desk in the chaos, hanging open at an angle it wasn't at
      before. The papers inside have spilled across the floor along with everything else, but unlike
      everything else, they don't look disturbed. They look like they were always meant to land exactly
      there, waiting for the room to be torn apart before they'd be in reach.</p>

      <p>You kneel. Your hands don't hesitate.</p>

      <p>This time you read faster, but not because you want to finish quickly, because something in you
      already knows what shape you're looking for and refuses to be slowed by uncertainty.</p>

      <p>Patterns first. Then names. Then a sequence that repeats with only the smallest variations:
      entry into Unit 4B, initial confusion, growing sensitivity to the sound, behavioral change, fixation,
      and then disappearance from the record, not death, not exit, just an ending the documents don't
      bother to describe, only to follow with a new name and a new entry.</p>

      <p>Page after page, the same five stages. Different people. Same room. Same outcome, recorded
      with the calm of something expected rather than something gone wrong.</p>

      <p>Then,</p>

      <p>Your name.</p>

      <p>Not implied. Not buried. Written in the same clean structure as every entry before it, slotted into
      the sequence like it had been waiting its turn.</p>

      <p>"Subject: Lucas Gray — observation ongoing."</p>

      <p>You stop. Not because you misunderstand it, but because it's too clear to misunderstand.</p>

      <p>You go back through the earlier pages anyway, faster now, hoping the pattern will break
      somewhere and prove itself a coincidence. It doesn't. Every subject moves through the same
      five stages. The only thing that changes is how long it takes them.</p>

      <p><i>Thump.</i></p>

      <p>It comes again, and for the first time you don't separate the sound from the pages in your hands.
      It's not happening to you while the documents describe other people — it's the same
      mechanism, still running, and you are simply the entry it hasn't finished writing yet.</p>

      <p>You lower the papers. The anger from a minute ago is gone, but not because it resolved into
      calm. It's gone because there's nothing left for it to aim at that still makes sense as an outside
      thing. The room didn't do this to you. The room is just where this gets done, over and over, to
      whoever ends up reading the same five words before you did.</p> 
    `,
    choices: [
      { text: "Next Page",           next: "ending_a"    }
    ]
  },

  part6a_b: {
    part: "Part VI — The File",
    title: "Subject: Lucas Gray",
    progress: 90,
    body: `
    <p>At some point, you stop trying to hold yourself together properly, not because you decide to give up, but because the effort to stay stable starts to feel like it is happening slightly out of sync with your body, like your thoughts are arriving a fraction too late to properly instruct your movements.</p>

    <p>Thump.</p>

    <p>The sound is still there, but it doesn’t sit in the room anymore the way normal sounds do. It feels closer than that, not physically, but in the way it interrupts your awareness, as if your attention is being gently pulled in one direction without asking whether you are ready to follow it or not.</p>

    <p>You take a step.</p>

    <p>Then another.</p>

    <p>And then something inside your balance just… misaligns.</p>

    <p>Not dramatically.</p>

    <p>Just enough that your body doesn’t recover from it the way it should.</p>

    <p>Your shoulder hits the wall first, harder than you expected, and the impact is small but disorienting in a way that makes your stomach tighten slightly, not from pain, but from the realization that your control over simple movement is no longer fully consistent.</p>

    <p>You try to steady yourself, but the attempt feels delayed, like your body is reacting to instructions that no longer belong fully to the present moment.</p>

    <p>And then it happens again.</p>

    <p>A stumble.</p>

    <p>This time you don’t correct it immediately.</p>

    <p>You let it continue.</p>

    <p>Not because you are calm.</p>

    <p>But because something in you has started to feel like resisting it requires more certainty than you currently have.</p>

    <p>The room shifts—not visibly—but in the way your attention refuses to settle on any one point long enough to confirm stability. The drawer is there, but it doesn’t feel like something you noticed. It feels like something you were always going to reach, regardless of the path that led you here.</p>

    <p>Thump.</p>

    <p>You are closer now.</p>

    <p>Or it is.</p>

    <p>You can’t tell which one of those sentences is still reliable.</p>

    <p>Your knees bend slightly as you reach it, and for a moment you pause—not because you are hesitating, but because your body feels briefly unsure whether it is still fully in agreement with your intention to remain upright.</p>

    <p>There is a small pressure behind your eyes, not pain exactly, but something like overload, like your awareness is trying to process too many confirmations of instability at once.</p>

    <p>You touch the drawer.</p>

    <p>It is solid.</p>

    <p>Real in a way that feels almost indifferent.</p>

    <p>And that indifference makes your hand linger longer than necessary, because it is the first thing in the room that feels like it is not participating in your confusion at all.</p>

    <p>You pull it open.</p>

    <p>The sound it makes is normal.</p>

    <p>Too normal.</p>

    <p>Inside are the papers.</p>

    <p>And the moment you see them, something in your attention tightens—not sharply, but deeply, like recognition arriving before understanding has time to catch up.</p>

    <p>You take them out slowly.</p>

    <p>Your hands are steady, but only just.</p>

    <p>You begin reading.</p>

    <p>At first, it feels like information, but that feeling doesn’t last long. It shifts into something more uncomfortable, because the structure of the documents doesn’t feel like discovery—it feels like familiarity you didn’t realize you already had.</p>

    <p>Entries.</p>

    <p>Progressions.</p>

    <p>Patterns that do not change in content, only in names.</p>

    <p>A subject enters Unit 4B.</p>

    <p>A sound begins.</p>

    <p>Attention shifts.</p>

    <p>Fixation builds.</p>

    <p>Stability breaks.</p>

    <p>You don’t speed up while reading.</p>

    <p>You don’t slow down either.</p>

    <p>You just continue, because stopping feels more unnatural than continuing.</p>

    <p>And then your name appears.</p>

    <p>Not as emphasis.</p>

    <p>Not as warning.</p>

    <p>Just placed inside the same structure as everything else, as if individuality was never part of the system these pages were describing in the first place.</p>

    <p><strong>“Subject: Lucas Gray — observation ongoing.”</strong></p>

    <p>You don’t react immediately.</p>

    <p>Not because you are calm.</p>

    <p>But because your mind is trying to understand why that sentence feels less like new information and more like confirmation of something your body already started responding to before your thoughts fully caught up.</p>

    <p>Thump.</p>

    <p>The sound is still there.</p>

    <p>But now it doesn’t feel like it is happening to the room.</p>

    <p>It feels like it is happening in the same structure that produced the documents in your hands, as if both are part of a system that does not need your interpretation in order to continue functioning.</p>

    <p>And standing there, with the pages still slightly tense in your grip, something becomes clear in a way that does not feel dramatic, only final in a quiet way:</p>

    <p><strong>You were not led here to discover something new.</strong></p>

    <p><strong>You were led here to recognize something that has already been happening for longer than you had awareness of it.</strong></p>
  `,
    choices: [
      { text: "Next Page",           next: "ending_b"    }
    ]
  },

  part6b_a: {
    part: "Part VI — The File",
    title: "Subject: Lucas Gray",
    progress: 90,
    body: `
      <p>You try to follow it.</p>

<p>Not logically at first, and not as something you consciously plan, but because the sound refuses to stay fixed in your perception long enough to be treated like something you can simply locate and resolve. Every time it appears, it feels slightly displaced from where you expect it to be, as if it is not choosing a position in the room so much as adjusting itself in relation to where your attention happens to be.</p>

<p>Thump.</p>

<p>You turn toward it immediately, but even as you do, there is already a sense that it is no longer where you thought it was, which forces you to move again without fully questioning whether movement itself is actually helping you get closer to anything at all.</p>

<p>A few steps forward.</p>

<p>Then a recalibration.</p>

<p>Then another attempt to align yourself with it the way you would with any normal source of sound, except nothing about it behaves in a way that allows alignment to remain stable for more than a moment.</p>

<p>It shifts.</p>

<p>Or you misread it.</p>

<p>Or both possibilities begin to feel equally valid in a way that makes them impossible to separate cleanly anymore.</p>

<p>Thump.</p>

<p>You follow again, further this time, and without noticing the exact moment it happens, your movement begins to lose its sense of linear direction, not because you intend to circle the room, but because every attempt to approach the sound eventually brings you back into a slightly altered version of a space you have already crossed without recognizing it as the same.</p>

<p>The room itself does not feel like it is repeating.</p>

<p>It feels more like your perception of it is being quietly reorganized every time you re-enter the same area from a slightly different angle of awareness.</p>

<p>You pause for a brief moment, and the sound immediately fills that pause as if it is aware of any interruption in your movement and responds by becoming more present the moment you stop.</p>

<p>So you move again.</p>

<p>This time faster, as if speed might prevent it from shifting before you can catch up to it, but instead of becoming clearer, the pursuit begins to feel less like you are chasing something and more like you are being guided through a path that keeps folding back into itself without ever confirming where it begins or ends.</p>

<p>Thump.</p>

<p>And then, somewhere between one step and the next, your attention catches on something that does not feel new so much as it feels previously unregistered, as if it has always been there but only becomes visible once repetition has stripped away your assumption that everything in the room carries equal weight at all times.</p>

<p>A drawer.</p>

<p>You do not remember noticing it before in any meaningful way, though now that it is within your awareness, it feels difficult to imagine how it was ever fully absent from it.</p>

<p>It sits slightly misaligned with the desk, not hidden and not revealed, but positioned in a way that only becomes apparent after your movement has passed over the same space enough times for small inconsistencies to begin separating themselves from everything else.</p>

<p>You stop moving, but the sound does not stop with you, it simply continues in the background of your awareness without offering any sense of direction anymore.</p>

<p>You step closer.</p>

<p>And for the first time since you began following it, it no longer feels like the sound is pulling you forward.</p>

<p>It feels like it has already brought you here without needing to announce the transition.</p>

<p>You open the drawer.</p>

<p>Inside are papers.</p>

<p>They are not neatly organized, but they are not chaotic either, existing instead in a condition that suggests repeated handling over time, as if they have been returned to this state multiple times by different hands under different circumstances that all somehow lead back to the same arrangement.</p>

<p>You take them out and begin reading, not with urgency and not with hesitation, but with a steady attention that feels less like discovery and more like alignment with something that has already structured itself before your awareness fully engaged with it.</p>

<p>At first, the content appears like fragmented documentation of a familiar phenomenon: references to a sound that cannot be consistently located, descriptions of attention gradually shifting toward it, and a slow restructuring of perception around something that cannot be separated from the space it occurs in.</p>

<p>But as you continue, what begins to surface is not familiarity in content, but familiarity in structure.</p>

<p>Each entry follows the same progression. A subject enters Unit 4B, initially treating the experience as something explainable or dismissible, until the sound begins to persist in a way that forces attention to reorganize itself around it. From there, perception shifts into observation, observation becomes fixation, and fixation becomes a state where the subject can no longer clearly distinguish between the sound and their own awareness of the room.</p>

<p>You continue reading at a steady pace, not adjusting speed because there is no longer a clear reason to rush or slow down, as the structure of what you are reading no longer behaves like information that needs to be processed linearly.</p>

<p>Then the pattern stops feeling like description and begins to feel like repetition itself, not in wording, but in outcome.</p>

<p>Different subjects.</p>

<p>Same sequence.</p>

<p>Same room.</p>

<p>Same progression that never clearly resolves into an ending, only transitions into the next entry as if completion is not part of how the system organizes what it records.</p>

<p>And then you see it.</p>

<p>Your name.</p>

<p>Not emphasized.</p>

<p>Not introduced.</p>

<p>Simply placed within the same structure as every other entry, as if individuality was never a category this system was designed to preserve.</p>

<p><strong>“Subject: Lucas Gray — observation ongoing.”</strong></p>

<p>You pause, not because the meaning is unclear, but because it no longer feels like something you have just learned, and instead feels like something that has been gradually confirming itself through every step that led you here without requiring your awareness to fully register it until now.</p>

<p><i>Thump.</i></p>

<p>The sound continues, but it no longer feels separate from what you are reading.</p>

<p>It feels integrated into the structure of it, as if both the documentation and the sound are expressions of the same process unfolding through different forms of perception.</p>

<p>And standing there, holding the pages, the room no longer feels like a place you are moving through.</p>

<p>It feels like a system that allowed you to arrive exactly at the point where recognition becomes unavoidable.</p>

<p>Not as discovery.</p>

<p>But as confirmation.</p>
    `,
    choices: [
      { text: "Next Page",           next: "ending_a"    }
    ]
  },

  part6b_b: {
    part: "Part VI — The File",
    title: "Subject: Lucas Gray",
    progress: 90,
    body: `
<p>At some point, the effort of deciding where to move stops feeling like something your thoughts are actively involved in. It doesn’t happen abruptly, but in a way that is hard to trace, as if intention itself begins arriving slightly too late to fully influence what your body has already started doing on its own.</p>

<p>You are still inside the room, but the sense of choosing direction starts to dissolve gradually, replaced by movement that feels increasingly self-contained. You take a step forward without fully registering that you decided to, and then another follows without interruption, until the idea of “deciding” feels less like a process and more like something happening behind your awareness rather than through it.</p>

<p>Thump.</p>

<p>The sound is still there, but it no longer feels like something to follow or resist in a deliberate way. Your body reacts to it in a quieter, less conscious manner, adjusting direction without hesitation, as if it is responding to a pattern it recognizes even if your mind does not have access to it yet.</p>

<p>The room does not feel like it is guiding you directly, but it also does not resist you anymore. Instead, it allows your movement to continue in a way that feels increasingly familiar, as if the paths you are taking are not being created in real time, but are being remembered by something inside you that you cannot fully reach.</p>

<p>Thump.</p>

<p>You turn again, and this time there is a brief moment of discomfort—not emotional, but physical—like your body registers familiarity before your thoughts can explain why. The movement feels too precise to be accidental, yet too unowned to feel deliberate.</p>

<p>Without realizing when the transition happened, your hand is already at the drawer.</p>

<p>You do not stop.</p>

<p>You open it.</p>

<p>Inside are papers.</p>

<p>Even that motion feels strangely correct, like your body anticipated the weight, the position, the timing of the action before you consciously acknowledged any of it.</p>

<p>You pause for a second.</p>

<p>Not because you are thinking.</p>

<p>But because something about your physical state feels slightly unstable, like your control over small movements is no longer fully consistent. A subtle tremor begins in your hand as you reach inside, not strong enough to stop you, but enough to make the action feel less anchored than it should be.</p>

<p>You take the papers out.</p>

<p>Your grip is not fully steady anymore.</p>

<p>And your eyes do not settle on the page immediately, as if focus itself is struggling to align with what you are seeing.</p>

<p>Then you begin reading.</p>

<p>At first, it feels like information, but the experience of processing it is fragmented, as if comprehension is arriving in uneven pieces instead of forming a continuous understanding. The structure of the documents is consistent enough to recognize: references to sound, repetition, shifting attention, and behavioral progression that moves through every subject described in the same sequence, regardless of their identity.</p>

<p>You try to follow it properly, but your attention keeps slipping in small, unintentional ways, as if your perception is no longer stabilizing at a fixed point long enough to fully absorb what you are reading.</p>

<p>Then your name appears.</p>

<p>It interrupts you more than it informs you.</p>

<p>Your eyes hesitate for a fraction longer than necessary, not because you are surprised in a clear emotional sense, but because something in your body reacts before your interpretation does, tightening slightly as if recognition arrives physically before it becomes cognitive.</p>

<p><strong>“Subject: Lucas Gray — observation ongoing.”</strong></p>

<p>You read it again, but not cleanly. The sentence does not register as a conclusion or discovery in the usual sense. It feels more like a disruption in continuity, something that interrupts the idea of separation between observer and observed rather than explaining it.</p>

<p>You turn pages faster now, but not with control or urgency that feels fully intentional. It is closer to compulsion, as if your attention is trying to complete a pattern it does not fully understand but cannot stop following.</p>

<p>Different names.</p>

<p>Same structure.</p>

<p>Same progression.</p>

<p>Each entry describing the same sequence of entry, observation, fixation, and disappearance, repeated across subjects in a way that feels too consistent to interpret as coincidence, yet too unstable to treat as simple fact.</p>

<p>Thump.</p>

<p>It is still there, but now it does not feel external in the way it did before. It feels slightly out of sync with your awareness, as if your perception is trying to catch up to something your body has already begun processing without your full permission.</p>

<p>And standing there, the papers still trembling slightly in your hands, there is a growing uncertainty that is no longer about the room itself, but about where exactly your awareness ends and the system described in these pages begins.</p>

<p>Somehow, the distinction stops feeling reliable enough to trust.</p>

    `,
    choices: [
      { text: "Next Page",           next: "ending_b"    },
    ]
  },

  part6c_a: {
    part: "Part VI — The File",
    title: "Subject: Lucas Gray",
    progress: 90,
    body: `
<p>At first, you move back toward the door almost immediately, not as a thought-out decision, but as a reaction that feels more urgent than anything else in the room. Your hand finds the handle again, and when it does not give way, something in you shifts from testing to desperation. You pull harder, then again, as if repetition might eventually convince the boundary to behave differently.</p>

<p>Thump.</p>

<p>The sound is still there, but it no longer matters in the same way it did before. Your focus narrows entirely to the door as you begin hitting it with your fist, not carefully, not rhythmically, but repeatedly, the impact growing harsher each time as frustration turns into panic that you are no longer trying to suppress.</p>

<p>“Help—!” you call out at first, then louder, sharper, your voice breaking slightly as you repeat it again and again, as if volume alone could force acknowledgment from something outside the room. Your palm begins to sting, your knuckles reddening against the surface, but you do not stop, because stopping feels closer to acceptance than effort.</p>

<p>“Someone—get me out of here!”</p>

<p>Your voice starts to fade gradually, not because you decide to lower it, but because your throat begins to give out under the repetition. You pause only long enough to breathe, and even that feels heavy, uneven, like the room is not allowing your body to recover as quickly as it should.</p>

<p>And then—</p>

<p>something changes.</p>

<p>Not in the door.</p>

<p>But in what you hear.</p>

<p>At first, it is faint, almost indistinct, as if it is not fully entering the room but leaking through it from somewhere else. You stop moving immediately, your hand still pressed against the door, because the possibility of response feels too sudden to trust at first.</p>

<p>Then it becomes clearer.</p>

<p>Voices.</p>

<p>Outside.</p>

<p>Not one.</p>

<p>Possibly two.</p>

<p>You step closer instinctively, pressing your ear against the door without thinking about it, because suddenly everything else becomes secondary to the possibility that someone is actually there.</p>

<p>You hear fragments first—unsteady conversation, casual in tone, as if they are speaking about something unrelated to urgency. Then, slowly, your attention locks onto a phrase that interrupts everything else.</p>

<p>“Unit 4B…”</p>

<p>Your breath catches slightly, and you press harder against the door, trying to isolate the sound more clearly.</p>

<p>One of them responds.</p>

<p>Something about the apartment.</p>

<p>About it being unused.</p>

<p>Long abandoned.</p>

<p>Not properly inhabited for a long time.</p>

<p>And then—</p>

<p>another line.</p>

<p>“…people who stayed there started acting strange. Some of them—ended up losing it.”</p>

<p>You freeze.</p>

<p>Not fully understanding the implication at first, because your mind refuses to immediately align the idea of “losing it” with anything that could include you. Instead, there is a brief resistance, a rejection of interpretation, as if the sentence is about someone else entirely.</p>

<p>“Losing it?” you whisper under your breath, barely audible even to yourself. “What do they mean… losing it?”</p>

<p>Your grip on the door loosens slightly, not out of calmness, but because your attention is no longer fully anchored to it anymore.</p>

<p>You step back.</p>

<p>And for the first time, you begin looking at the room differently—not as something you are trapped inside, but as something that might already contain evidence you have been ignoring.</p>

<p>Your eyes drift.</p>

<p>Not searching randomly anymore.</p>

<p>But locking onto something that feels slightly misaligned with everything else.</p>

<p>The drawer.</p>

<p>You do not remember walking toward it.</p>

<p>But you are already there when you realize it exists in your line of sight.</p>

<p>Your hand opens it quickly, almost abruptly, without hesitation or care for how forcefully you are moving now. The papers inside shift slightly as you pull them out, and your fingers tremble—not dramatically, but enough to make the edges of the pages feel less stable than they should.</p>

<p>You begin reading immediately.</p>

<p>Faster than before.</p>

<p>Not calmly.</p>

<p>Not analytically.</p>

<p>But as if something in you is trying to disprove what you just heard outside by finding inconsistency inside the room itself.</p>

<p>But there is none.</p>

<p>The structure is the same.</p>

<p>The entries are consistent in progression, even if the wording varies slightly: a subject enters Unit 4B, initially perceives it as ordinary, then the sound begins, subtle at first, then persistent, then unavoidable. Attention shifts. Behavior adapts. Fixation forms. And eventually, continuity breaks—not in explanation, but in outcome.</p>

<p>Entry after entry follows the same structure.</p>

<p>Different names.</p>

<p>Same sequence.</p>

<p>Same progression.</p>

<p>Until—</p>

<p>your name appears.</p>

<p>It is not emphasized.</p>

<p>It is not separated.</p>

<p>It sits inside the same pattern as everything else, as if it was never meant to stand outside of the system being described.</p>

<p><strong>“Subject: Lucas Gray — observation ongoing.”</strong></p>

<p>You stop reading for a moment, not because you do not understand it, but because it does not feel like something you have just learned. It feels like something that has been slowly aligning itself with every moment leading up to this one, even while you were still resisting the idea that it could apply to you.</p>

<p>From outside the door, the voices continue faintly, still unaware of your presence, still discussing Unit 4B as if it is a place that exists separate from you.</p>

<p>But now, standing inside the room with the papers in your hands, that separation no longer feels reliable enough to trust.</p>
    `,
    choices: [
      { text: "Next Page",           next: "ending_a"    },
    ]
  },

  part6c_b: {
    part: "Part VI — The File",
    title: "Subject: Lucas Gray",
    progress: 90,
    body: `
<p>At some point, your movements begin to lose coordination not because you stop trying, but because your body is starting to reach a point where effort no longer translates cleanly into result. Your shoulder hurts from repeated impact against the door, your hands feel heavier than they should, and every attempt to force an exit begins to blur into something closer to instinct than intention.</p>

<p>Thump.</p>

<p>The sound continues behind everything you are doing, unchanged and unbothered, as if your attempts to break the room are not interfering with anything it considers important.</p>

<p>You don’t stop.</p>

<p>You grab whatever you can reach and throw it toward the door, not carefully, not strategically, but in a way that feels increasingly detached from problem-solving. Chair first, then smaller objects, then anything that can be lifted without thought, until the room begins to lose its original structure under the weight of your movement.</p>

<p>Nothing responds.</p>

<p>The door remains exactly as it was.</p>

<p>And that is when your strength begins to give way—not suddenly, but in a gradual reduction of force that you only notice when your body stops matching the intensity of your intention.</p>

<p>You pause, breathing uneven, your vision slightly unfocused from exhaustion rather than panic, and for the first time since you started forcing everything outward, there is a moment of silence that feels too sharp compared to everything you just created.</p>

<p>Thump.</p>

<p>Still there.</p>

<p>Still unchanged.</p>

<p>In that silence, something near your feet shifts slightly—papers that had fallen earlier, scattered from the drawer you threw during your attempt to break the door. You don’t remember them being clear before, but now they feel impossible to ignore, as if your attention is finally capable of noticing what it was too consumed to register earlier.</p>

<p>You bend down slowly, not because you decide to, but because your body no longer has a stronger direction to follow.</p>

<p>You pick one up.</p>

<p>Then another.</p>

<p>At first, you read without expecting anything different from what you have already seen in fragments, but as your eyes move across the text, the structure begins to feel less like information and more like repetition of something that should not be repeating in the way it does.</p>

<p>A subject enters Unit 4B.</p>

<p>A sound begins.</p>

<p>Attention shifts.</p>

<p>Behavior adjusts.</p>

<p>Fixation develops.</p>

<p>And then—</p>

<p>a failure of continuity.</p>

<p>Different names appear across the pages, each one following the same progression, the same structure, the same unavoidable sequence that does not deviate in outcome, only in identity.</p>

<p>You turn another page, slower now, as something in you begins to resist how familiar the pattern feels.</p>

<p>And then you see it.</p>

<p>Your name.</p>

<p>Not buried.</p>

<p>Not implied.</p>

<p>Not something you have to interpret.</p>

<p>It is written clearly in the same format as every other entry, placed within the system as if it was never meant to stand outside of it.</p>

<p><strong>“Subject: Lucas Gray — observation ongoing.”</strong></p>

<p>You stop reading for a moment, not because you do not understand the sentence, but because your mind struggles to reconcile it with the version of events you still want to treat as your own.</p>

<p>It does not feel like discovery.</p>

<p>It feels like correction.</p>

<p>As if something is rewriting your understanding of what has been happening the entire time without asking for permission.</p>

<p>Your grip on the paper tightens slightly, not in control, but in resistance to the implications forming too quickly to fully contain.</p>

<p>Thump.</p>

<p>It continues.</p>

<p>But now it no longer feels like something outside the room.</p>

<p>It feels like something embedded in the same structure that produced what you are holding in your hands.</p>

<p>And standing there, surrounded by the aftermath of your attempt to force an exit, the idea of leaving stops behaving like a physical possibility.</p>

<p>It starts behaving like a misunderstanding you have only now been corrected about.</p>
    `,
    choices: [
      { text: "Next Page",           next: "ending_b"    },
    ]
  },

  // ── ENDINGS ─────────────────────────────────────────────────

  ending_a: {
    part: "Denial",
    title: "I Am Not Mad",
    progress: 100,
    body: `
<p>You are still standing inside Unit 4B.</p>

<p>The room feels quieter now, but it is not the kind of quiet that brings relief. It is the kind that makes you more aware of yourself than the space you are standing in, as if silence has shifted attention inward instead of outward, forcing everything you were trying not to think about to surface at once.</p>

<p>The papers are still in your hands, though your grip has started to feel less intentional than it was before. You keep returning to the same lines without fully realizing you are doing it, as if reading has become less of a choice and more of something your attention continues to fall back into even when you try to step away from it.</p>

<p>Subject files.</p>

<p>Repeating entries.</p>

<p>Names structured in the same pattern, over and over again, without variation that feels meaningful enough to hold onto as coincidence.</p>

<p>Including yours.</p>

<p>That part does not land immediately in a dramatic way. It sits there first, quietly, before your mind starts trying to reorganize it into something more manageable. Something explainable. Something that still fits inside the version of reality you were holding onto just moments ago.</p>

<p>You try to steady it.</p>

<p>Maybe patterns repeat when you focus too much.</p>

<p>Maybe it is stress.</p>

<p>Maybe it is your mind connecting things that were never meant to align.</p>

<p>You hold onto those thoughts for a moment longer than they feel convincing, because letting them go feels more difficult than questioning them.</p>

<p>But even as you think it, your body does not fully agree. Your breathing is slightly uneven now, not enough to be panic, but enough that you notice it does not settle the way you expect it to.</p>

<p>You lower the papers, then raise them again, as if the act itself might change what they are saying.</p>

<p>It doesn’t.</p>

<p>The room does not react.</p>

<p>Nothing corrects itself.</p>

<p>Nothing confirms you are wrong.</p>

<p>And that absence of correction begins to feel heavier than any explanation you could construct.</p>

<p>Because if nothing is responding, then nothing is contradicting you either.</p>

<p>And that thought does not help.</p>

<p>It only leaves more space for uncertainty to sit where certainty used to be.</p>

<p>You stand there longer than you mean to, trying to hold everything together through repetition of thought, through naming possibilities, through insisting internally that there must still be a stable explanation waiting just beyond your current understanding.</p>

<p>But nothing arrives to replace it.</p>

<p>Only the same room.</p>

<p>The same silence.</p>

<p>The same structure that does not shift to meet you halfway.</p>

<p>And eventually, there is nothing left in the sequence of thoughts you can rely on to extend further than this moment.</p>

<p>No further explanation that feels stronger than what you have already considered.</p>

<p>No correction that feels more real than what you are standing inside.</p>

<p>Only the attempt to hold yourself in place through language, even as language stops feeling fully sufficient to contain what you are experiencing.</p>

<p>And then, quietly—without ceremony, without resistance, without anything left to balance against it—</p>

<p><strong>“I am not mad.”</strong></p>
    `,
    ending: {
      type: "denial",
      quote: '"I am not mad."',
      desc: "Lucas refuses the pattern. He stands inside Unit 4B, holding his own name as the last stable thing in a room that refuses to stay consistent. The door opens for him because he has decided it will."
    }
  },

  ending_b: {
    part: "Ending II — Ambiguity",
    title: "Am I Mad?",
    progress: 100,
    body: `
<p>You no longer trust what you are perceiving, but there is nothing inside you that feels strong enough to replace it with something else.</p>

<p>The room stays unchanged, but it no longer feels like something you are standing inside of in a normal sense. It feels distant in a way that is hard to describe, as if there is a thin separation between you and everything you are looking at, even though nothing in front of you has physically moved.</p>

<p>The documents are still in your hands.</p>

<p>But the act of holding them feels less intentional now.</p>

<p>Like your grip is continuing without your permission.</p>

<p>You look at your name again.</p>

<p>And again.</p>

<p>And again.</p>

<p>Each time, it does not become clearer.</p>

<p>It becomes heavier.</p>

<p>Not because the meaning changes, but because your ability to separate meaning from yourself is starting to fail in a way you cannot stop or reverse in the moment.</p>

<p>You try to speak.</p>

<p>Nothing comes out at first.</p>

<p>Not silence in a clean way, but something more unstable, like your voice does not fully arrive when you attempt to use it.</p>

<p>When words finally form, they feel wrong in your mouth, like they belong slightly outside of you.</p>

<p>You stop trying to explain anything after that.</p>

<p>Because explanation no longer feels like something you are capable of holding consistently.</p>

<p>The sound is still there.</p>

<p>Not louder.</p>

<p>Not closer.</p>

<p>Just… unavoidable.</p>

<p>As if it has stopped needing direction entirely.</p>

<p>And in that continuity, something in you begins to slip—not dramatically, not suddenly, but in a way that feels like losing your grip on a thought you didn’t realize you were still holding onto.</p>

<p>Your fingers tremble slightly against the paper.</p>

<p>Not enough to drop it.</p>

<p>But enough to notice that your body is no longer fully coordinated with what you are trying to do.</p>

<p>And that realization does not settle properly.</p>

<p>It keeps breaking apart before it becomes something you can understand cleanly.</p>

<p>The thought of “this must mean something” appears.</p>

<p>Then disappears before it can stabilize.</p>

<p>Then appears again, weaker.</p>

<p>And finally stops forming properly at all.</p>

<p>There is a long pause where nothing feels fully connected anymore, neither your thoughts, nor your body, nor the space you are standing in.</p>

<p>And in that gap, without warning, without structure, without anything left to support it—</p>

<p><strong>“…am I mad?”</strong></p>
    `,
    ending: {
      type: "ambiguous",
      quote: '"Am I mad?"',
      desc: "The question has no answer. Lucas sits in Unit 4B, inside a pattern that continues with or without his understanding of it. The sound doesn't stop. He stops counting."
    }
  },

};