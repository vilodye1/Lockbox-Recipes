import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/lightdark.svg'
// styles 
import './ThemeSelector.css'

const themeColors = ['#95D15C', '#A98AE4', '#F5BE9A'];

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'light' ? 'dark' : 'light');
    }

  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <img 
             src={modeIcon}
             alt="light/dark selector" 
             onClick={toggleMode}
             style={{filter: mode === 'light' ? 'invert(20%)' : 'invert(100%)'}}
             />
        </div>
        <div className="theme-buttons">
            {themeColors.map(color => (
                <div 
                 key={color}
                 onClick={() => changeColor(color)}
                 style={{ background: color }}
                 />
            ))}
        </div>
    </div>
  )
}
