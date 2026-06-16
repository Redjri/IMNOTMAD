// ── STORY DATA ────────────────────────────────────────────────
// Each node: { part, title, body (HTML string), choices[], progress, ending? }
// ending: { type, quote, desc }

const nodes = {

  prologue: {
    part: "Prologue",
    title: "",
    progress: 8,
    body: `
      <p>You don't usually say that out loud, but that's how you think of yourself when you're trying
      to make sense of things. Like separating your name from the rest of your life makes everything
      feel a little more organized.</p>

      <p>You're a writer — at least that's what you tell people. Not the kind that publishes books with
      your name on the cover. More like the kind that edits things late at night, rewrites other
      people's words, fixes sentences that already exist. Freelance work. Remote work. Quiet work
      that doesn't really end — it just stops for a while.</p>

      <p>Your apartment reflects that life. Minimal. A little messy, but not in a chaotic way, more like
      someone who lives alone and has slowly stopped paying attention to details that don't feel
      urgent. You've been living here for almost two years now. Long enough that it doesn't feel
      temporary anymore, even if you still call it that in your head.</p>

      <p>The building itself is old. Not abandoned, just… tired. <em>Block 4 Apartments.</em> Cheap rent,
      close enough to everything that matters, far enough that nobody really comes to visit unless
      they have to. You've never been close with your neighbors.</p>

      <p>Lately, your routine has started to blur. You wake up, work at your desk, forget to eat properly,
      fall asleep at odd hours. Some nights you write for hours and delete everything the next morning
      because it feels unfamiliar — like someone else wrote it. You've told yourself it's just fatigue.
      Probably nothing more than that.</p>

      <p>This morning is no different. Your laptop is still open. The cursor blinking on a half-finished
      paragraph you don't fully remember writing. You stare at it for a few seconds, then close the
      laptop without reading it.</p>

      <p><em>Not today.</em></p>
    `,
    choices: [
      { text: "Open a new document and start working properly", next: "part1_a" },
      { text: "Reopen the document and read more carefully",    next: "part1_b" },
      { text: "Close everything and just sit for a while",      next: "part1_c" }
    ]
  },

  // ── PART I ──────────────────────────────────────────────────

  part1_a: {
    part: "Chapter I",
    title: "An Ordinary Morning",
    progress: 22,
    body: `
      <p>You open a fresh file and begin writing again, forcing yourself back into structure and routine.
      At first, it works. Your mind settles into the rhythm of work, and the earlier uncertainty gets
      pushed to the background where it's easier to ignore.</p>

      <p>But even while you write, there's a faint sense that your focus isn't as clean as it usually is —
      like part of your attention is still anchored to something you chose not to examine further.</p>

      <p>Time passes in the usual fragmented way it does when you're focused on writing. Then, at some
      point, you notice something you don't remember hearing before.</p>

      <p>A sound. Not loud. Not dramatic. Just… consistent. A soft thump, faint enough that you almost
      convince yourself it's part of the building settling. But the problem is not how loud it is —
      it's how <em>steady</em> it feels. Like it has a rhythm that doesn't belong to anything you can
      easily explain.</p>

      <p>You stop typing.</p>
      <span class="thump-line">Thump.</span>
      <p>It comes again. Your attention returns to the wall — the wall shared with Unit 4B.</p>
    `,
    choices: [
      { text: "Rationalize it — it's just the building", next: "part2_denial" },
      { text: "Stop working and try to locate the sound",  next: "part2_investigate" }
    ]
  },

  part1_b: {
    part: "Chapter I",
    title: "An Ordinary Morning",
    progress: 22,
    body: `
      <p>You reopen the document and read it again, this time slower, paying attention not just to what
      is written but how it fits into your memory of writing it.</p>

      <p>The strange part is not that the text is wrong, but that your memory of creating it feels
      incomplete — as if there is a gap between the act of writing and the result you're looking at now.</p>

      <p>It doesn't feel like someone else wrote it. It feels like <em>you</em> wrote it, just without the
      memory of doing so. That thought sits with you for a moment longer than you're comfortable with.</p>

      <p>You scroll up slowly, just to check if there's anything you missed. But there isn't. Everything
      flows into itself too smoothly, too cleanly, like the document has always existed in this exact form.</p>

      <p>You close the laptop. Not because you've understood it — but because continuing to sit with it
      feels unnecessary in a way you can't fully justify. You decide not to think about it too long.</p>

      <p>And then, in the quiet that follows —</p>
      <span class="thump-line">Thump.</span>
      <p>From behind the wall. Steady. Waiting.</p>
    `,
    choices: [
      { text: "Rationalize it — it's just the building", next: "part2_denial" },
      { text: "Stop working and try to locate the sound",  next: "part2_investigate" }
    ]
  },

  part1_c: {
    part: "Chapter I",
    title: "An Ordinary Morning",
    progress: 22,
    body: `
      <p>You don't engage with anything for the moment. No document, no work, no checking anything again.
      You just sit there, letting the quiet of the apartment become noticeable in a way it wasn't before.</p>

      <p>It doesn't feel louder or different — just more present. Like you're suddenly aware of details
      that were always there but never observed closely enough to matter. Even the smallest background
      sounds feel slightly more defined than they should.</p>

      <p>Your coffee has gone cold. You don't move to fix it.</p>

      <p>And then — in the space between one heartbeat and the next — something else enters the room.</p>
      <span class="thump-line">Thump.</span>
      <p>Not random. Not the building. A rhythm that doesn't belong to anything you can easily explain,
      coming from somewhere fixed. Somewhere next to you. Somewhere behind the wall.</p>

      <p>The wall shared with Unit 4B.</p>
    `,
    choices: [
      { text: "Rationalize it — it's just the building", next: "part2_denial" },
      { text: "Stop working and try to locate the sound",  next: "part2_investigate" }
    ]
  },

  // ── PART II ─────────────────────────────────────────────────

  part2_denial: {
    part: "Chapter II",
    title: "The Wall of Unit 4B",
    progress: 38,
    body: `
      <p>You exhale through your nose, almost like you're dismissing the entire thought process itself
      rather than the sound. It's easier that way. You've done this before with things that don't make
      immediate sense — push them aside, label them as background noise, let work fill the space instead.</p>

      <p>You turn back toward your laptop. The document is still open. You force your attention back into
      it, placing your hands on the keyboard like the act alone is enough to reset your focus.</p>

      <p>For a while, it works. You start typing again, slowly at first, then more normally as your mind
      adjusts back into structure. Deadlines. Sentences. Edits. Things that feel real.</p>

      <span class="thump-line">Thump.</span>
      <p>Three times in the same hour. Each one timed — uncomfortably, improbably — with something close
      to your own heartbeat. You tell yourself it's the pipes. You've always been too sensitive to sound.</p>

      <p>But by the third time, you realize you've stopped actually reading the document. You've only been
      waiting for the sound. And that distinction — between reading and waiting — begins to feel like
      something worth examining.</p>
    `,
    choices: [
      { text: "Ask a neighbor if they've heard anything from Unit 4B", next: "part3_neighbor" },
      { text: "Go into the hallway and listen from outside",            next: "part3_hallway"  }
    ]
  },

  part2_investigate: {
    part: "Chapter II",
    title: "The Wall of Unit 4B",
    progress: 38,
    body: `
      <p>You stop typing completely. This time, you don't try to explain it away or reduce it into
      something harmless. You just listen. Properly. Without distraction.</p>

      <p>And after a few seconds, it comes again.</p>
      <span class="thump-line">Thump.</span>
      <p>You realize it's not random. There's a rhythm to it. Not musical, not mechanical in an obvious
      way — but consistent enough that your mind starts trying to map it instinctively.</p>

      <p>You stand up without fully deciding to. You take a few steps toward the wall. The apartment
      suddenly feels smaller than it did before — not physically, just in terms of attention. Like
      everything outside this moment has faded slightly so that this one direction becomes clearer.</p>

      <p>The wall in front of you is plain. Familiar. Shared.</p>

      <p><em>Unit 4B is on the other side.</em></p>

      <p>You don't remember when you started thinking about that unit so often. But now you are.</p>
    `,
    choices: [
      { text: "Press your hand against the wall",      next: "part3_wall"     },
      { text: "Start writing down the pattern",         next: "part3_notes"    },
      { text: "Step into the hallway",                  next: "part3_hallway"  }
    ]
  },

  // ── PART III ────────────────────────────────────────────────

  part3_neighbor: {
    part: "Chapter III",
    title: "The Rhythm in the Wall",
    progress: 52,
    body: `
      <p>You knock on the door across the hall. It takes a moment. Then it opens — someone you recognize
      from the corridor, someone you've never spoken to beyond brief nods.</p>

      <p>When you mention Unit 4B, there is a slight pause in their expression. As if the name itself
      carries a familiarity you didn't realize was shared.</p>

      <p>"Unit 4B? That one's been empty for a long time."</p>

      <p>You nod once, but not because you are agreeing. You explain the sound carefully — the timing,
      the repetition, the way it appears consistent enough for you to have started recording it.</p>

      <p>The neighbor listens. Their tone carries something quieter than disbelief. Something closer to
      <em>disalignment</em>.</p>

      <p>"I've never heard anything from that unit. Nobody really goes near it anymore."</p>

      <span class="thump-line">Thump.</span>
      <p>You pause. Not outwardly — but internally, in a way that interrupts your confidence more than
      you expected. Your notes feel too structured to be imagination. Their certainty feels too stable
      to be dismissed immediately.</p>

      <p>Both versions of reality begin to exist at the same time. Without resolving into a single
      explanation. Without resolving at all.</p>
    `,
    choices: [
      { text: "Believe the neighbor — go back inside",    next: "part4_doubt" },
      { text: "Investigate Unit 4B directly",             next: "part4_enter" }
    ]
  },

  part3_wall: {
    part: "Chapter III",
    title: "The Rhythm in the Wall",
    progress: 52,
    body: `
      <p>You step closer to the wall. It looks the same as it always has — paint slightly uneven in
      places, faint marks from time. But now you're close enough that the idea of it being "just a
      wall" doesn't feel as complete as it did before.</p>

      <p>You place your hand against it.</p>

      <p>Cold. Normal. Solid. At first, nothing happens. You almost feel relieved by that.</p>

      <p>But then you notice yourself <em>waiting</em>. Not for something dramatic. Not for a reaction.
      Just for something that confirms or denies what you've started to suspect.</p>

      <span class="thump-line">Thump.</span>
      <p>It comes again. And this time, your hand doesn't move away immediately. Because you're not sure
      if you imagined the timing, or if you <em>felt</em> it slightly through the surface.</p>

      <p>That uncertainty is what makes you keep your hand there longer than you intended. That
      uncertainty is what makes you take the next step.</p>
    `,
    choices: [
      { text: "Go to Unit 4B directly",        next: "part4_enter"   },
      { text: "Talk to a neighbor first",       next: "part3_neighbor"}
    ]
  },

  part3_notes: {
    part: "Chapter III",
    title: "The Rhythm in the Wall",
    progress: 52,
    body: `
      <p>You sit back down and reach for whatever is closest — your notes, your drafts — anything that
      lets you externalize what you're experiencing instead of keeping it inside your head.</p>

      <p>You begin to write. Not creatively. Not formally. Just observation. Time. Pattern. Repetition.
      Frequency. You try to treat it like data, like something that becomes less confusing when you
      give it structure.</p>

      <span class="thump-line">Thump.</span>
      <p>You write it down. Once. Then again when it returns. At first, it feels like control — like
      you're reducing uncertainty into something manageable.</p>

      <p>But the longer you do it, the more you realize something uncomfortable: the pattern doesn't
      become clearer. You just become more aware of how often you are <em>waiting</em> for it.
      And how rarely it actually changes.</p>

      <p>After an hour, you have three pages of notes and a growing certainty that this is not going
      away on its own. Waiting hasn't helped. Documentation hasn't helped. There is only one place
      left to look.</p>
    `,
    choices: [
      { text: "Go to Unit 4B and investigate directly", next: "part4_enter"    },
      { text: "Talk to a neighbor about Unit 4B",        next: "part3_neighbor" }
    ]
  },

  part3_hallway: {
    part: "Chapter III",
    title: "The Rhythm in the Wall",
    progress: 52,
    body: `
      <p>You grab your keys without fully thinking through why you're doing it. You step out into the
      hallway. The air outside your apartment feels slightly different — not because it actually is,
      but because your attention is now distributed across a larger space.</p>

      <p>The corridor is quiet in the way that feels normal for a building like this. People living their
      own lives behind closed doors. Nothing unusual about that.</p>

      <p>You start walking. Halfway down the corridor, you slow down without meaning to.</p>

      <span class="thump-line">Thump.</span>
      <p>It comes again. And this time, you stop walking completely. Because it didn't feel like it came
      from behind you. Or inside your apartment. It felt like it came from the <em>building itself</em>.</p>

      <p>Like the place you're standing in is not separate from it anymore.</p>

      <p>You look at the door across the corridor. <em>Unit 4B.</em> The number plate is slightly
      crooked. You have never noticed that before.</p>
    `,
    choices: [
      { text: "Knock on the door of Unit 4B",     next: "part4_enter"    },
      { text: "Ask a neighbor about Unit 4B first", next: "part3_neighbor" }
    ]
  },

  // ── PART IV ─────────────────────────────────────────────────

  part4_doubt: {
    part: "Part IV",
    title: "The Return",
    progress: 64,
    body: `
      <p>You go back inside. You close the door behind you and stand in your own apartment, which should
      feel like a relief. It doesn't.</p>

      <p>The quiet here is no longer neutral — it has texture now. The specific texture of something you
      are choosing not to think about.</p>

      <span class="thump-line">Thump.</span>
      <p>It comes again, steady, unchanged, as if confirming that your decision to step away didn't
      change anything about its existence.</p>

      <p>You realize something slowly: you are not inside a stable room. You are inside a version of
      a room that depends on how long you stay in it.</p>

      <p>You cannot stop now. You've already crossed the threshold of noticing. And once you've noticed
      something like this, going back to not noticing it is not something you know how to do.</p>

      <p>The door of Unit 4B is still out there. And you are still here, unable to look away from the
      wall between you and it.</p>
    `,
    choices: [
      { text: "Go to Unit 4B", next: "part4_enter" }
    ]
  },

  part4_enter: {
    part: "Part IV",
    title: "Unit 4B",
    progress: 66,
    body: `
      <p>You open the door. The door gives way without resistance, and for a moment, nothing about that
      feels strange enough to stop you.</p>

      <p>You step inside.</p>

      <p>The room doesn't greet you with anything immediate. No dramatic shift. No obvious change.
      No confirmation that you are somewhere you are not supposed to be. Instead, what you notice
      first is how unstable <em>certainty</em> feels inside the space.</p>

      <p>The room is there. But how it is there doesn't fully hold still.</p>

      <p>At one moment, it feels empty in a clean, abandoned way — dust settled, air unmoving, the
      sense of something unused for a long time. Then, without you clearly noticing when it changes,
      that same space feels slightly altered. Not messy. Not disturbed. Just… <em>different</em> in a
      way your mind keeps trying to correct but cannot fully stabilize.</p>

      <span class="thump-line">Thump.</span>
      <p>The sound comes again. But now it doesn't feel like it belongs behind a wall anymore. It feels
      like the sound exists in relation to your attention. Not the space.</p>

      <p>You are not inside a stable room. You are inside a version of a room that depends on how long
      you stay in it. And for the first time, you don't feel like you entered a place. You feel like
      you entered a <em>condition</em>.</p>
    `,
    choices: [
      { text: "Move deeper — press your hand against the inner wall", next: "part5_physical"   },
      { text: "Try to stabilize yourself. Stay calm.",                 next: "part5_stabilize"  },
      { text: "Try to force the exit immediately",                     next: "part5_exit"       }
    ]
  },

  // ── PART V ──────────────────────────────────────────────────

  part5_physical: {
    part: "Part V",
    title: "The Pattern",
    progress: 78,
    body: `
      <p>You move deeper into Unit 4B. At some point, standing still feels less like observation and
      more like surrendering control over something that is already shifting without your permission.</p>

      <p>The room is not stable. Not in the way dust shifts or light changes throughout the day. But in
      a deeper way. A way that makes you question whether what you are seeing is being held together
      consistently at all.</p>

      <p>A corner of the room looks slightly farther than it did a moment ago. Then closer when you
      return your attention to it again. A wall feels solid when you touch it — but less certain when
      you stop touching it, like its stability depends on contact rather than existence.</p>

      <span class="thump-line">Thump.</span>
      <p>It comes again. And now it feels <em>synchronized</em> with your movement. Not responding to
      it. Not causing it. But aligned with it, as if your presence inside the room is part of the
      condition that allows it to continue.</p>

      <p>You stop walking. For the first time since entering, you realize something you don't
      immediately want to name: the room is not consistent enough to trust. And neither is your
      perception of it anymore.</p>

      <p>Your breathing slows without you instructing it to. And then the realization comes — not as
      a conclusion, but as something that slips into place without permission.</p>

      <p><em>You might be wrong about everything you've experienced so far. Or the room might be
      wrong. Or neither of those categories might apply anymore.</em></p>

      <p>In the corner — a drawer, partially open. Papers visible through the gap. You don't remember
      it being there when you entered.</p>
    `,
    choices: [
      { text: "Open the drawer", next: "part6_file" }
    ]
  },

  part5_stabilize: {
    part: "Part V",
    title: "Something is Wrong with Me",
    progress: 78,
    body: `
      <p>You stand in the middle of Unit 4B and try to make sense of what you are experiencing. But
      the attempt doesn't organize anything. It only makes the pressure inside your head feel sharper,
      more concentrated, harder to distribute evenly across thought.</p>

      <span class="thump-line">Thump.</span>
      <p>You exhale, but it doesn't release anything. Your hand lifts slightly — not toward the wall
      this time, but toward yourself. As if you are suddenly more uncertain about your own stability
      than the room's.</p>

      <p>You take a step back, then forward again without meaning to, caught in a loop of trying to
      reset something that refuses to reset properly.</p>

      <p>"What's wrong with me…"</p>

      <p>The words come out under your breath before you fully decide to say them. And then something
      breaks in the rhythm. You are no longer just observing Unit 4B. You are <em>reacting</em> to
      it in ways you don't fully control anymore.</p>

      <p>But there — in the corner — a drawer that wasn't fully closed. Papers, visible through the
      gap. You are not sure when you started looking at it, but now you cannot look away.</p>
    `,
    choices: [
      { text: "Open the drawer", next: "part6_file" }
    ]
  },

  part5_exit: {
    part: "Part V",
    title: "The Door",
    progress: 78,
    body: `
      <p>You turn toward the door immediately — not as escape, but as a direct attempt to test whether
      boundaries still function in the way they are supposed to. You reach for the handle without
      hesitation, gripping it firmly.</p>

      <span class="thump-line">Thump.</span>
      <p>You pull. It doesn't open. You try again, harder. Still nothing.</p>

      <p>Your breathing shifts slightly. Not into panic yet — but into something more concentrated, like
      your body is starting to register that repetition is not producing different outcomes anymore.</p>

      <p>You step back and try once more — slower, more deliberate, adjusting your grip, your stance,
      your force. The result stays the same.</p>

      <p>Locked. Not mechanically resisting you in a way you can fix. But refusing the concept of
      exit entirely.</p>

      <p>And for a moment, you realize something that doesn't fully settle into language yet: it is
      not that you are inside a room that is hard to leave. It is that <em>leaving is not being
      recognized as a valid action inside this space.</em></p>

      <p>You turn back to face the room. There is a drawer in the corner, partially open. You don't
      remember it being there before.</p>
    `,
    choices: [
      { text: "Open the drawer", next: "part6_file" }
    ]
  },

  // ── PART VI ─────────────────────────────────────────────────

  part6_file: {
    part: "Part VI — The File",
    title: "Subject: Lucas Gray",
    progress: 90,
    body: `
      <p>The papers inside are not random. They are organized in a way that suggests documentation
      rather than storage — as if someone, multiple someones, have been systematically recording
      experiences inside this exact space over a long period of time. The structure of the notes is
      inconsistent in handwriting and tone, but <em>consistent in content</em>.</p>

      <p>At first, the descriptions feel familiar in a vague way: references to a sound, repetition,
      a growing awareness of something that cannot be fully located. But as you continue reading,
      the familiarity sharpens into something more uncomfortable — because the progression described
      in the documents mirrors your own experience with increasing precision.</p>

      <p>Entry after entry follows the same sequence. A subject enters Unit 4B. The environment is
      described as normal. Then a sound begins to appear — first dismissed, then noticed, then tracked.
      After that, the subject begins to adjust their behavior around it, gradually reorganizing their
      attention until the sound becomes something they can no longer separate from their own awareness.</p>

      <p>These are not just past observations of a strange room. These are records of multiple subjects
      undergoing a structured progression inside Unit 4B — as if the room itself is not just a
      location where events happen, but a controlled environment designed around <em>repeated
      human responses</em>.</p>

      <p>And then you see it. Your name. Written in the same format as the other entries. Part of a
      system of documentation that treats you not as an exception, but as a continuation.</p>

      <span class="thump-line">"Subject: Lucas Gray, observation ongoing."</span>

      <p>You look back through earlier pages. Each subject follows a similar trajectory: entry,
      confusion, increasing sensitivity to the sound, behavioral adjustment, obsession, and
      eventually — disappearance from active documentation.</p>

      <p>There is no variation in the core pattern. Only in how long each subject takes to reach the
      same endpoint. And standing there, inside a room that no longer feels like a neutral space but
      a repeating condition of observation, you begin to understand that Unit 4B is not defined by
      what happens inside it — but by the way it consistently produces the same kind of awareness
      in anyone who enters it.</p>

      <p><em>Including you.</em></p>
    `,
    choices: [
      { text: "\"I am not mad.\" — The denial ending",           next: "ending_denial"    },
      { text: "\"Am I mad?\" — The ambiguous ending",            next: "ending_ambiguous" },
      { text: "Step outside — the loop ending",                  next: "ending_loop"      }
    ]
  },

  // ── ENDINGS ─────────────────────────────────────────────────

  ending_denial: {
    part: "Ending I — Denial",
    title: "I Am Not Mad",
    progress: 100,
    body: `
      <p>You lower the papers slowly. You understand the pattern. You understand that you are inside it.
      And yet — the understanding itself doesn't carry the weight it should.</p>

      <p>Because you are still here. Still thinking. Still separating your name from the rest of what
      is happening. And as long as you can do that — as long as you can hold yourself apart from the
      system that has already included you — then you are not lost.</p>

      <span class="thump-line">Thump.</span>
      <p>The sound continues. Steady. Unchanged. But you've decided something about it now. You've
      decided that it is not the room that defines you. It is not the pattern. It is not the document
      with your name on it written in a stranger's hand.</p>

      <p>You are Lucas Gray. You are a writer who edits things late at night. You live alone and you
      are too sensitive to small sounds. And you have been here, in this room, fully present and
      fully aware of what is happening to you.</p>

      <p>That awareness is not madness. That is the thing that separates you from every name in that
      drawer.</p>

      <p>You set the papers down. You straighten your back. You look at the door.</p>

      <p>It opens.</p>
    `,
    ending: {
      type: "denial",
      quote: '"I am not mad."',
      desc: "Lucas refuses the pattern. He stands inside Unit 4B, holding his own name as the last stable thing in a room that refuses to stay consistent. The door opens for him because he has decided it will."
    }
  },

  ending_ambiguous: {
    part: "Ending II — Ambiguity",
    title: "Am I Mad?",
    progress: 100,
    body: `
      <p>You lower the papers slowly. The room is still unstable in the same quiet way it has been
      since you first noticed it — never fully committing to a single version of itself, never fully
      allowing you to treat it as something fixed or complete.</p>

      <p>And now that you understand the pattern, that instability no longer feels like a mystery
      waiting to be solved. It feels like structure. A structure that does not require your agreement
      to continue.</p>

      <span class="thump-line">Thump.</span>
      <p>It comes again, steady, unchanged, as if confirming that whatever interpretation you attempt
      to place on it no longer alters its existence in any way.</p>

      <p>You don't know if you are the cause or the subject. You don't know if the room is observing
      you or reflecting you. You don't know if your awareness is the last thing you have or the first
      thing you lost.</p>

      <p>The question forms slowly, the way all honest questions form — reluctantly, and only when
      there is nowhere else to go.</p>

      <p>You sit down on the floor of Unit 4B. The papers in your lap. The sound still coming. Still
      steady. Still there.</p>

      <p><em>Still yours.</em></p>
    `,
    ending: {
      type: "ambiguous",
      quote: '"Am I mad?"',
      desc: "The question has no answer. Lucas sits in Unit 4B, inside a pattern that continues with or without his understanding of it. The sound doesn't stop. He stops counting."
    }
  },

  ending_loop: {
    part: "Ending III — Hidden",
    title: "The Loop",
    progress: 100,
    body: `
      <p>You stand up. You place the papers back in the drawer — not carefully, just back, just away
      from you. You turn toward the door. This time, the handle moves.</p>

      <p>The door opens.</p>

      <p>The hallway outside is exactly the same as you remember it. Quiet. Familiar. The same
      lighting, the same doors in the same order. Your apartment is right where it always was.
      You step inside. You close the door.</p>

      <p>You sit down at your desk. Your laptop is still open, the screen dimmed but not asleep yet.
      A document you left behind — half-finished, slightly imperfect, waiting for you to continue
      it like nothing unusual happened.</p>

      <p>You stare at it for a few seconds.</p>

      <p>There's a paragraph in the middle that catches your attention — not because it is wrong, but
      because you don't remember writing it at all. You read it once, then again, trying to place it
      somewhere in your memory of last night, but nothing really connects to it.</p>

      <p>You close the laptop. Not because you've understood it — but because continuing to sit with
      it feels unnecessary in a way you can't fully justify.</p>

      <p>For a moment, you just remain there in your chair, coffee slowly cooling beside you.</p>

      <p>Everything is still normal.</p>

      <p>At least, that's what you tell yourself.</p>

      <span class="thump-line">Thump.</span>
    `,
    ending: {
      type: "loop",
      quote: '"You realize you\'ve thought about that unit more times this morning than you usually do in an entire week."',
      desc: "Lucas returns to his apartment. Everything is exactly as he left it. The cursor blinks on a paragraph he doesn't remember writing. The story begins again — and he doesn't know it."
    }
  }

};