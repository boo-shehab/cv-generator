import * as React from "react"
const SvgComponent = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={46}
    fill="none"
    {...props}
  >
    <path
      stroke={color === 3 ? "#1C4752" : "#F8FBFC"} 
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C20.816 21.248 22.045 22 23.59 22h8.818c1.546 0 2.775-.752 3.878-1.803 2.26-2.153-1.45-3.873-2.865-4.715a10.663 10.663 0 0 0-10.844 0Z"
    />
    <path
      stroke={color === 3 ? "#1C4752" : "#F8FBFC"} 
      strokeWidth={1.5}
      d="M32.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
    <path
      fill={color === 3 ? "#1C4752" : "#F8FBFC"} 
      d="M16.175 35.144c0 .424-.1.824-.3 1.2-.2.376-.52.684-.96.924-.44.232-1.004.348-1.692.348h-1.512V41h-1.368v-8.34h2.88c.64 0 1.18.112 1.62.336.448.216.78.512.996.888.224.376.336.796.336 1.26ZM13.223 36.5c.52 0 .908-.116 1.164-.348.256-.24.384-.576.384-1.008 0-.912-.516-1.368-1.548-1.368h-1.512V36.5h1.512Zm5.625-1.152c.2-.336.464-.596.792-.78.336-.192.732-.288 1.188-.288v1.416h-.348c-.536 0-.944.136-1.224.408-.272.272-.408.744-.408 1.416V41H17.48v-6.612h1.368v.96Zm6.105 5.76c-.623 0-1.188-.14-1.691-.42a3.113 3.113 0 0 1-1.189-1.2c-.288-.52-.431-1.12-.431-1.8 0-.672.148-1.268.444-1.788.296-.52.7-.92 1.212-1.2a3.517 3.517 0 0 1 1.716-.42c.631 0 1.204.14 1.716.42.511.28.915.68 1.212 1.2.296.52.444 1.116.444 1.788 0 .672-.152 1.268-.456 1.788-.305.52-.72.924-1.248 1.212-.52.28-1.096.42-1.729.42Zm0-1.188c.352 0 .68-.084.985-.252.312-.168.564-.42.756-.756.192-.336.288-.744.288-1.224s-.092-.884-.276-1.212a1.855 1.855 0 0 0-.732-.756 2.002 2.002 0 0 0-.985-.252c-.352 0-.68.084-.983.252-.297.168-.532.42-.709.756-.175.328-.264.732-.264 1.212 0 .712.18 1.264.54 1.656.369.384.828.576 1.38.576Zm7.557-4.416h-1.224V41h-1.38v-5.496h-.78v-1.116h.78v-.468c0-.76.2-1.312.6-1.656.408-.352 1.044-.528 1.908-.528v1.14c-.416 0-.708.08-.876.24-.168.152-.252.42-.252.804v.468h1.224v1.116Zm1.908-1.992a.847.847 0 0 1-.624-.252.847.847 0 0 1-.252-.624c0-.248.084-.456.252-.624a.847.847 0 0 1 .624-.252c.24 0 .444.084.612.252a.847.847 0 0 1 .252.624.847.847 0 0 1-.252.624.833.833 0 0 1-.612.252Zm.672.876V41h-1.368v-6.612h1.368Zm3.164-2.268V41h-1.368v-8.88h1.368Zm7.856 5.412c0 .248-.016.472-.048.672H41.01c.04.528.236.952.588 1.272.352.32.784.48 1.296.48.736 0 1.256-.308 1.56-.924h1.476a2.998 2.998 0 0 1-1.092 1.5c-.52.384-1.168.576-1.944.576-.632 0-1.2-.14-1.704-.42a3.139 3.139 0 0 1-1.176-1.2c-.28-.52-.42-1.12-.42-1.8 0-.68.136-1.276.408-1.788.28-.52.668-.92 1.164-1.2.504-.28 1.08-.42 1.728-.42.624 0 1.18.136 1.668.408.488.272.868.656 1.14 1.152.272.488.408 1.052.408 1.692Zm-1.428-.432c-.008-.504-.188-.908-.54-1.212-.352-.304-.788-.456-1.308-.456-.472 0-.876.152-1.212.456-.336.296-.536.7-.6 1.212h3.66Z"
    />
  </svg>
)
export default SvgComponent