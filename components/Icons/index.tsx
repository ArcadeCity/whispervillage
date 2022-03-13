import Svg, { ClipPath, G, Path, Defs } from 'react-native-svg'

const IS_WEB = true
// import { IS_WEB } from 'lib/constants'

export const IosIcon = ({ w = 24, h = 24, color = '#111' }) => {
  return (
    <svg
      className='ios-icon'
      width={w}
      height={h}
      color={color}
      fill={color}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 20 20'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.5640259,13.8623047
  c-0.4133301,0.9155273-0.6115723,1.3251343-1.1437988,2.1346436c-0.7424927,1.1303711-1.7894897,2.5380249-3.086853,2.5500488
  c-1.1524048,0.0109253-1.4483032-0.749939-3.0129395-0.741333c-1.5640259,0.008606-1.8909302,0.755127-3.0438843,0.7442017
  c-1.296814-0.0120239-2.2891235-1.2833252-3.0321655-2.4136963c-2.0770874-3.1607666-2.2941895-6.8709106-1.0131836-8.8428955
  c0.9106445-1.4013062,2.3466187-2.2217407,3.6970215-2.2217407c1.375,0,2.239502,0.7539673,3.3761597,0.7539673
  c1.1028442,0,1.7749023-0.755127,3.3641357-0.755127c1.201416,0,2.4744263,0.6542969,3.3816528,1.7846069
  C14.0778809,8.4837646,14.5608521,12.7279663,17.5640259,13.8623047z M12.4625244,3.8076782
  c0.5775146-0.741333,1.0163574-1.7880859,0.8571167-2.857666c-0.9436035,0.0653076-2.0470581,0.6651611-2.6912842,1.4477539
  C10.0437012,3.107605,9.56073,4.1605835,9.7486572,5.1849365C10.7787476,5.2164917,11.8443604,4.6011963,12.4625244,3.8076782z'
      ></path>
    </svg>
  )
}

export const AndroidIcon = ({ w = 24, h = 24, color = '#111' }) => {
  return (
    <svg
      className='android-icon'
      width={w}
      height={h}
      color={color}
      fill={color}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 20 20'
    >
      <path
        d='M4.942627,18.0508423l7.6660156-4.3273926l-1.6452026-1.8234253L4.942627,18.0508423z M2.1422119,2.1231079
              C2.0543823,2.281311,2,2.4631958,2,2.664917v15.1259766c0,0.2799683,0.1046143,0.5202026,0.2631226,0.710144l7.6265259-7.7912598
              L2.1422119,2.1231079z M17.4795532,9.4819336l-2.6724854-1.508606l-2.72229,2.7811279l1.9516602,2.1630249l3.4431152-1.9436035
              C17.7927856,10.8155518,17.9656372,10.5287476,18,10.2279053C17.9656372,9.927063,17.7927856,9.6402588,17.4795532,9.4819336z
               M13.3649292,7.1592407L4.1452026,1.954834l6.8656616,7.609314L13.3649292,7.1592407z'
      ></path>
    </svg>
  )
}

export const CommentsAltIcon = ({ w = 28, h = 25, color = '#fff' }) => {
  if (IS_WEB) {
    return (
      <svg width={w} height={h} viewBox='0 0 28 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_285_426)'>
          <path
            d='M24.8919 7.80909H20.2247V3.12158C20.2238 2.29337 19.8956 1.4994 19.3121 0.914087C18.7287 0.328776 17.9378 -4.95698e-07 17.1132 0H3.11147C2.28684 -4.95698e-07 1.49594 0.328776 0.912525 0.914087C0.329105 1.4994 0.00090222 2.29337 0 3.12158V10.9341C0.000901084 11.7626 0.328995 12.5569 0.912317 13.1428C1.49564 13.7287 2.28653 14.0582 3.11147 14.0591H4.66722V16.5994C4.66722 16.7545 4.72855 16.9032 4.83772 17.0128C4.94689 17.1225 5.09497 17.1841 5.24936 17.1841C5.37237 17.1833 5.49182 17.1425 5.58978 17.0678L9.33446 14.9446V18.7466C9.33536 19.5751 9.66348 20.3694 10.2468 20.9553C10.8301 21.5411 11.621 21.8707 12.446 21.8716H17.1132L22.3966 24.8803C22.4831 24.9449 22.5858 24.9841 22.6932 24.9935C22.8006 25.0029 22.9086 24.9822 23.0049 24.9336C23.1013 24.8851 23.1823 24.8106 23.239 24.7184C23.2957 24.6263 23.3258 24.5202 23.3259 24.4119V21.8716H24.8817C25.7066 21.8707 26.4975 21.5411 27.0808 20.9553C27.6642 20.3694 27.9923 19.5751 27.9932 18.7466V10.9341C27.9923 10.1073 27.6656 9.31454 27.0845 8.72898C26.5033 8.14342 25.7151 7.8127 24.8919 7.80909V7.80909ZM4.66722 11.717H3.11147C2.90531 11.7161 2.7079 11.6333 2.56244 11.4865C2.41697 11.3398 2.33531 11.1411 2.33531 10.9341V3.12158C2.33621 2.91511 2.41828 2.71735 2.56364 2.57135C2.70901 2.42535 2.9059 2.34295 3.11147 2.34205H17.1132C17.3188 2.34295 17.5157 2.42535 17.661 2.57135C17.8064 2.71735 17.8885 2.91511 17.8894 3.12158V10.9341C17.8894 11.1411 17.8077 11.3398 17.6622 11.4865C17.5168 11.6333 17.3193 11.7161 17.1132 11.717H10.2774L9.74298 12.0179L6.99915 13.577V11.717H4.66722ZM25.6681 18.7466C25.6681 18.9536 25.5864 19.1523 25.441 19.299C25.2955 19.4457 25.0981 19.5286 24.8919 19.5295H21.0009V21.3895L18.2774 19.8304L17.743 19.5295H12.446C12.2395 19.5286 12.0417 19.4459 11.8957 19.2992C11.7497 19.1526 11.6673 18.954 11.6664 18.7466V14.0591H17.1132C17.9381 14.0582 18.729 13.7287 19.3123 13.1428C19.8957 12.5569 20.2238 11.7626 20.2247 10.9341V10.1545H24.8919C25.0975 10.1554 25.2944 10.2379 25.4397 10.3839C25.5851 10.5299 25.6672 10.7276 25.6681 10.9341V18.7466Z'
            fill={color}
          />
        </g>
        <defs>
          <clipPath id='clip0_285_426'>
            <rect width={w} height={h} fill={color} />
          </clipPath>
        </defs>
      </svg>
    )
  }

  return (
    <Svg width={w} height={h} fill={color}>
      <G clipPath='url(#a)'>
        <Path
          d='M24.892 7.81h-4.667V3.121c-.001-.829-.33-1.623-.913-2.208A3.105 3.105 0 0 0 17.113 0H3.111C2.287 0 1.496.329.913.914A3.132 3.132 0 0 0 0 3.122v7.812c0 .829.329 1.623.912 2.209a3.108 3.108 0 0 0 2.2.916h1.555v2.54a.586.586 0 0 0 .582.585.567.567 0 0 0 .34-.116l3.745-2.123v3.802c.001.828.33 1.622.913 2.208a3.108 3.108 0 0 0 2.199.917h4.667l5.284 3.008a.58.58 0 0 0 .929-.468v-2.54h1.556c.825-.001 1.615-.33 2.199-.917.583-.586.911-1.38.912-2.208v-7.813c0-.827-.327-1.62-.909-2.205a3.108 3.108 0 0 0-2.192-.92ZM4.667 11.716H3.111a.778.778 0 0 1-.776-.783V3.122a.785.785 0 0 1 .776-.78h14.002a.778.778 0 0 1 .776.78v7.812a.785.785 0 0 1-.776.783h-6.836l-.534.3-2.744 1.56v-1.86H4.667Zm21.001 7.03a.785.785 0 0 1-.776.782H21v1.86l-2.724-1.559-.534-.3h-5.297a.781.781 0 0 1-.78-.783v-4.688h5.447c.825 0 1.616-.33 2.2-.916.583-.586.91-1.38.912-2.209v-.78h4.667a.778.778 0 0 1 .776.78v7.813Z'
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill={color} d='M0 0h28v25H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const CommentIcon = ({ w = 30, h = 24, color = '#fff' }) => {
  return (
    <Svg width={w} height={h} fill={color}>
      <G clipPath='url(#a)'>
        <Path
          d='M21.878 0H3.128A3.128 3.128 0 0 0 0 3.122v14.067a3.128 3.128 0 0 0 3.128 3.122h4.71v4.105a.59.59 0 0 0 .937.473l6.1-4.591h7.03a3.122 3.122 0 0 0 3.121-3.122V3.122A3.12 3.12 0 0 0 21.878 0Zm-7.817 12.887a.387.387 0 0 1-.387.393h-7.03a.393.393 0 0 1-.394-.393v-.78a.393.393 0 0 1 .394-.387h7.03a.388.388 0 0 1 .387.386v.78Zm4.689-4.683a.394.394 0 0 1-.387.387H6.643a.393.393 0 0 1-.393-.387v-.76a.394.394 0 0 1 .394-.394h11.72a.394.394 0 0 1 .386.394v.76Z'
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h25v25H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const PlusCircleIcon = ({ w = 27, h = 27, color = '#fff' }) => {
  return (
    <Svg width={w} height={h} fill={color}>
      <G clipPath='url(#a)'>
        <Path
          d='M20.467 12.627v1.743a.655.655 0 0 1-.655.652h-4.79v4.79a.655.655 0 0 1-.652.655h-1.743a.655.655 0 0 1-.652-.655v-4.79h-4.79a.655.655 0 0 1-.655-.652v-1.743a.655.655 0 0 1 .655-.652h4.79v-4.79a.655.655 0 0 1 .652-.655h1.743a.655.655 0 0 1 .652.655v4.79h4.79a.655.655 0 0 1 .655.652Zm6.53.87a13.5 13.5 0 1 1-27 .006 13.5 13.5 0 0 1 27-.006Zm-2.613 0a10.887 10.887 0 1 0-21.774 0 10.887 10.887 0 0 0 21.774 0Z'
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill={color} d='M0 0h27v27H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const DiscoverIcon = ({ w = 25, h = 25, color = '#fff' }) => {
  return (
    <Svg width={w} height={h} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          d='M17.539 6.14 10.24 9.466c-.353.159-.635.441-.794.794L6.118 17.56a.996.996 0 0 0 1.323 1.318l7.298-3.323a1.64 1.64 0 0 0 .795-.795l3.323-7.298a.996.996 0 0 0-1.318-1.323Zm-3.903 7.496a1.61 1.61 0 1 1-2.28-2.277 1.61 1.61 0 0 1 2.28 2.277ZM12.498 0a12.502 12.502 0 1 0 0 25.004 12.502 12.502 0 0 0 0-25.004Zm0 22.579A10.08 10.08 0 1 1 22.58 12.498a10.09 10.09 0 0 1-10.08 10.098v-.017Z'
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill={color} d='M0 0h25v25H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const CloseIcon = ({ w = 25, h = 25, color = '#fff' }) => {
  if (IS_WEB) {
    return (
      <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.10526 7L14 12.8947L12.8947 14L7 8.10526L1.10526 14L0 12.8947L5.89474 7L0 1.10526L1.10526 0L7 5.89474L12.8947 0L14 1.10526L8.10526 7Z'
          fill='black'
        />
      </svg>
    )
  }
  return (
    <Svg width={w} height={h} fill={color}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.105 7 14 12.895 12.895 14 7 8.105 1.105 14 0 12.895 5.895 7 0 1.105 1.105 0 7 5.895 12.895 0 14 1.105 8.105 7Z'
        fill={color}
      />
    </Svg>
  )
}

export const PhotoIcon = ({ w = 20, h = 14, color = '#fff' }) => {
  return (
    <Svg width={w} height={h} fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.857 0H2.143C.959 0 0 .94 0 2.1v9.8C0 13.06.96 14 2.143 14h15.714C19.041 14 20 13.06 20 11.9V2.1C20 .94 19.04 0 17.857 0Zm.714 8.11-4.495-4.405a.725.725 0 0 0-1.01 0L7.143 9.51 4.79 7.205a.725.725 0 0 0-1.01 0L1.429 9.51V2.1c0-.387.32-.7.714-.7h15.714c.395 0 .714.313.714.7v6.01ZM6.43 7C7.612 7 8.57 6.06 8.57 4.9c0-1.16-.959-2.1-2.142-2.1-1.184 0-2.143.94-2.143 2.1 0 1.16.96 2.1 2.143 2.1Z'
        fill={color}
      />
    </Svg>
  )
}

export const VideoIcon = ({ w = 20, h = 12, color = '#fff' }) => {
  return (
    <Svg width={w} height={h} fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.313 0H2.188C.985 0 0 1.006 0 2.235v7.53C0 10.995.985 12 2.188 12h9.125c1.203 0 2.188-1.006 2.188-2.235v-7.53C13.501.983 12.516 0 11.313 0Zm7.068 1.229c-.131.022-.263.09-.372.156l-3.414 2.012V8.58l3.436 2.011c.634.38 1.422.157 1.794-.491.11-.202.175-.425.175-.67V2.524c0-.827-.766-1.497-1.62-1.296Z'
        fill={color}
      />
    </Svg>
  )
}
