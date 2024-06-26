import { windows } from '../../../../../../../../shared/src/engine/data/windows.mjs'
import { buckets } from '../../../../buckets.mjs'
import { effect } from '../../../../effect.mjs'
import { particle } from '../../../../particle.mjs'
import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { SlideEndNote } from './SlideEndNote.mjs'

export class CriticalSlideEndNote extends SlideEndNote {
    sprites = {
        left: skin.sprites.criticalNoteLeft,
        middle: skin.sprites.criticalNoteMiddle,
        right: skin.sprites.criticalNoteRight,
        fallback: skin.sprites.criticalNoteEndFallback,
    }

    clips = {
        perfect: effect.clips.criticalTap,
        fallback: effect.clips.normalPerfect,
    }

    effects = {
        circular: particle.effects.criticalSlideNoteCircular,
        circularFallback: particle.effects.criticalNoteCircular,
        linear: particle.effects.criticalSlideNoteLinear,
        linearFallback: particle.effects.criticalNoteLinear,
    }

    laneEffects = {
        lane: particle.effects.criticalTapLane,
        laneFallback: particle.effects.lane,
    }

    windows = windows.slideEndNote.critical

    bucket = buckets.criticalSlideEndNote

    get slotEffect() {
        return archetypes.CriticalSlotEffect
    }

    get slotGlowEffect() {
        return archetypes.CriticalSlotGlowEffect
    }

    get laneEffect() {
        return particle.effects.criticalTapLane ?? particle.effects.lane
    }
}
