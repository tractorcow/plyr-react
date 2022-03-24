import React, {
  DetailedHTMLProps,
  MutableRefObject,
  VideoHTMLAttributes,
} from 'react'
import PlyrJS, { Options, SourceInfo } from 'plyr'
import PropTypes from 'prop-types'
import useAptor, { APIObject } from 'react-aptor'

export type PlyrInstance = PlyrJS
export type PlyrOptions = Options
export type PlyrSource = SourceInfo
type PlyrConfigurationProps = {
  source?: PlyrSource | null
  options?: PlyrOptions | null
}

type ReactVideoProps = DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>
export type PlyrProps = Omit<ReactVideoProps, 'ref'> & PlyrConfigurationProps

export interface APITypes {
  plyr: PlyrInstance
}

/* REACT-APTOR */
const instantiate = (_, { options, source }) => {
  // The node update of ref in react life cycle seems to have issue, used class selector instead
  const plyr = new PlyrJS('.plyr-react', options || {})
  plyr.source = source
  return plyr
}

const destroy = (plyr: PlyrJS | null) => {
  if (plyr) plyr.destroy()
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

const getAPI = (plyr: PlyrJS | null) => {
  if (!plyr)
    return () =>
      new Proxy({ plyr: { source: null } } as unknown as APITypes, {
        get: (target, prop) => {
          if (prop === 'plyr') {
            return target[prop]
          }
          return noop
        },
      })

  return () => ({
    /**
     * Plyr instance with all of its functionality
     */
    plyr,
  })
}

export function usePlyr(
  ref: React.Ref<APITypes> | undefined,
  { source, options }: PlyrConfigurationProps,
  deps: any = null
) {
  return useAptor<PlyrInstance, PlyrConfigurationProps>(
    // FIXE: Mismatch type for extended type with APITypes
    ref as React.Ref<APIObject>,
    {
      instantiate,
      getAPI,
      destroy,
      params: { options, source },
    },
    deps || [options, source]
  )
}
const Plyr = React.forwardRef<APITypes, PlyrProps>((props, ref) => {
  const { source, options = null, ...rest } = props
  const raptorRef = usePlyr(ref, {
    source,
    options,
  }) as MutableRefObject<HTMLVideoElement>
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />
})

if (process.env.NODE_ENV !== 'production') {
  Plyr.displayName = 'Plyr'

  Plyr.defaultProps = {
    options: {
      controls: [
        'rewind',
        'play',
        'fast-forward',
        'progress',
        'current-time',
        'duration',
        'mute',
        'volume',
        'settings',
        'fullscreen',
      ],
      i18n: {
        restart: 'Restart',
        rewind: 'Rewind {seektime}s',
        play: 'Play',
        pause: 'Pause',
        fastForward: 'Forward {seektime}s',
        seek: 'Seek',
        seekLabel: '{currentTime} of {duration}',
        played: 'Played',
        buffered: 'Buffered',
        currentTime: 'Current time',
        duration: 'Duration',
        volume: 'Volume',
        mute: 'Mute',
        unmute: 'Unmute',
        enableCaptions: 'Enable captions',
        disableCaptions: 'Disable captions',
        download: 'Download',
        enterFullscreen: 'Enter fullscreen',
        exitFullscreen: 'Exit fullscreen',
        frameTitle: 'Player for {title}',
        captions: 'Captions',
        settings: 'Settings',
        menuBack: 'Go back to previous menu',
        speed: 'Speed',
        normal: 'Normal',
        quality: 'Quality',
        loop: 'Loop',
      },
    },
    source: {
      type: 'video',
      sources: [
        {
          src: 'https://cdn.plyr.io/static/blank.mp4',
          type: 'video/mp4',
          size: 720,
        },
        {
          src: 'https://cdn.plyr.io/static/blank.mp4',
          type: 'video/mp4',
          size: 1080,
        },
      ],
    },
  }

  Plyr.propTypes = {
    options: PropTypes.object,
    source: PropTypes.any,
  }
}

export default Plyr
