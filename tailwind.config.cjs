const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/fontSize')
// const defaultTheme = require('tailwindcss/lineHeight')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      satoshi: ['Satoshi', 'sans-serif'],
      serif: ['serif', 'sans-serif'],
      freight: ['"Freight Sans Pro W03"', 'sans-serif'],
    },
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      // 'mobile': ['320px','375px','425px'],
      'mobile': { 'max': '425px' }, // For targeting up to 425px
      'tablet': { 'max': '768px' }, // For targeting up to 425px
      320: '320px',
      375: '375px',
      425: '425px',
      768: '768px',
      1024: '1024px',
      1440: '1440px',
      // 'mobile': ,
      'tab': '768px',
      'xlg': '1440px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#1C2434',
        'black-2': '#010101',
        body: '#64748B',
        bodydark: '#AEB7C0',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',
        primary: '#3C50E0',
        secondary: '#80CAEE',
        stroke: '#E2E8F0',
        gray: '#EFF4FB',
        graydark: '#333A48',
        'gray-2': '#F7F9FC',
        'gray-3': '#FAFAFA',
        whiten: '#F1F5F9',
        whiter: '#F5F7FD',
        boxdark: '#24303F',
        'boxdark-2': '#1A222C',
        strokedark: '#2E3A47',
        'form-strokedark': '#3d4d60',
        'form-input': '#1d2a39',
        'meta-1': '#DC3545',
        'meta-2': '#EFF2F7',
        'meta-3': '#10B981',
        'meta-4': '#313D4A',
        'meta-5': '#259AE6',
        'meta-6': '#FFBA00',
        'meta-7': '#FF6766',
        'meta-8': '#F0950C',
        'meta-9': '#E5E7EB',
        success: '#219653',
        danger: '#D34053',
        warning: '#FFA70B',
        ...defaultColor.colors,
      },
      fontSize: {
        'title-xxl': ['44px', '55px'],
        'title-xl': ['36px', '45px'],
        'title-xl2': ['33px', '45px'],
        'title-lg': ['28px', '35px'],
        'title-md': ['24px', '30px'],
        'title-md2': ['26px', '30px'],
        'title-sm': ['20px', '26px'],
        'title-xsm': ['18px', '24px'],
       
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        11: '2.75rem',
        11.5: '2.875rem',
        12.5: '3.125rem',
        13: '3.25rem',
        13.5: '3.375rem',
        14: '3.5rem',
        14.5: '3.625rem',
        15: '3.75rem',
        15.5: '3.875rem',
        16: '4rem',
        16.5: '4.125rem',
        17: '4.25rem',
        17.5: '4.375rem',
        18: '4.5rem',
        18.5: '4.625rem',
        19: '4.75rem',
        19.5: '4.875rem',
        21: '5.25rem',
        21.5: '5.375rem',
        22: '5.5rem',
        22.5: '5.625rem',
        24.5: '6.125rem',
        25: '6.25rem',
        25.5: '6.375rem',
        26: '6.5rem',
        27: '6.75rem',
        27.5: '6.875rem',
        29: '7.25rem',
        29.5: '7.375rem',
        30: '7.5rem',
        31: '7.75rem',
        32.5: '8.125rem',
        34: '8.5rem',
        34.5: '8.625rem',
        35: '8.75rem',
        36.5: '9.125rem',
        37.5: '9.375rem',
        39: '9.75rem',
        39.5: '9.875rem',
        40: '10rem',
        42.5: '10.625rem',
        44: '11rem',
        45: '11.25rem',
        46: '11.5rem',
        47.5: '11.875rem',
        49: '12.25rem',
        50: '12.5rem',
        52: '13rem',
        52.5: '13.125rem',
        54: '13.5rem',
        54.5: '13.625rem',
        55: '13.75rem',
        55.5: '13.875rem',
        59: '14.75rem',
        60: '15rem',
        62.5: '15.625rem',
        65: '16.25rem',
        67: '16.75rem',
        67.5: '16.875rem',
        70: '17.5rem',
        72.5: '18.125rem',
        73: '18.25rem',
        75: '18.75rem',
        90: '22.5rem',
        94: '23.5rem',
        95: '23.75rem',
        100: '25rem',
        115: '28.75rem',
        125: '31.25rem',
        132.5: '33.125rem',
        150: '37.5rem',
        171.5: '42.875rem',
        180: '45rem',
        187.5: '46.875rem',
        203: '50.75rem',
        230: '57.5rem',
        242.5: '60.625rem',
      },
      maxWidth: {
        2.5: '0.625rem',
        3: '0.75rem',
        4: '1rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        22.5: '5.625rem',
        25: '6.25rem',
        30: '7.5rem',
        34: '8.5rem',
        35: '8.75rem',
        40: '10rem',
        42.5: '10.625rem',
        44: '11rem',
        45: '11.25rem',
        70: '17.5rem',
        90: '22.5rem',
        94: '23.5rem',
        125: '31.25rem',
        132.5: '33.125rem',
        142.5: '35.625rem',
        150: '37.5rem',
        180: '45rem',
        203: '50.75rem',
        230: '57.5rem',
        242.5: '60.625rem',
        270: '67.5rem',
        280: '70rem',
        292.5: '73.125rem',
      },
      maxHeight: {
        35: '8.75rem',
        70: '17.5rem',
        90: '22.5rem',
        550: '34.375rem',
        300: '18.75rem',
      },
      minWidth: {
        22.5: '5.625rem',
        42.5: '10.625rem',
        47.5: '11.875rem',
        75: '18.75rem',
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        99: '99',
        9: '9',
        1: '1',
      },
      opacity: {
        65: '.65',
      },
      backgroundImage: {
        video: "url('../images/video/video.png')",
      },
      content: {
        'icon-copy': 'url("../images/icon/icon-copy-alt.svg")',
      },
      transitionProperty: { width: 'width', stroke: 'stroke' },
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
        card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        switcher:
          '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
        4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
        5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
        6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
        7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
        8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
      },
      dropShadow: {
        1: '0px 1px 0px #E2E8F0',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      },
      keyframes: {
        rotating: {
          '0%, 100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
        rotating: 'rotating 30s linear infinite',
        'spin-1.5': 'spin 1.5s linear infinite',
        'spin-2': 'spin 2s linear infinite',
        'spin-3': 'spin 3s linear infinite',
      },
    },
    select: {
      defaultProps: {
        variant: "outlined",
        color: "blue",
        size: "md",
        label: "",
        error: false,
        success: false,
        arrow: undefined,
        value: undefined,
        onChange: undefined,
        selected: undefined,
        offset: 5,
        dismiss: {},
        animate: {
          unmount: {},
          mount: {},
        },
        autoHeight: false,
        lockScroll: false,
        labelProps: {},
        menuProps: {},
        className: "",
        disabled: false,
        containerProps: undefined,
      },
      valid: {
        variants: ["standard", "outlined", "static"],
        sizes: ["md", "lg"],
        colors: [
          "blue-gray",
          "gray",
          "brown",
          "deep-orange",
          "orange",
          "amber",
          "yellow",
          "lime",
          "light-green",
          "green",
          "teal",
          "cyan",
          "light-blue",
          "blue",
          "indigo",
          "deep-purple",
          "purple",
          "pink",
          "red",
        ],
      },
      styles: {
        base: {
          container: {
            position: "relative",
            width: "w-full",
            minWidth: "min-w-[200px]",
          },
          select: {
            peer: "peer",
            width: "w-full",
            height: "h-full",
            bg: "bg-transparent",
            color: "text-blue-gray-700",
            fontFamily: "font-sans",
            fontWeight: "font-normal",
            textAlign: "text-left",
            outline: "outline outline-0 focus:outline-0",
            disabled: "disabled:bg-blue-gray-50 disabled:border-0",
            transition: "transition-all",
          },
          arrow: {
            initial: {
              display: "grid",
              placeItems: "place-items-center",
              position: "absolute",
              top: "top-2/4",
              right: "right-2",
              pt: "pt-px",
              width: "w-5",
              height: "h-5",
              color: "text-blue-gray-400",
              transform: "rotate-0 -translate-y-2/4",
              transition: "transition-all",
            },
            active: {
              transform: "rotate-180",
              mt: "mt-px",
            },
          },
          label: {
            display: "flex",
            width: "w-full",
            height: "h-full",
            userSelect: "select-none",
            pointerEvents: "pointer-events-none",
            position: "absolute",
            left: "left-0",
            fontWeight: "font-normal",
            transition: "transition-all",
          },
          menu: {
            width: "w-full",
            maxHeight: "max-h-96",
            bg: "bg-white",
            p: "p-3",
            border: "border border-blue-gray-50",
            borderRadius: "rounded-md",
            boxShadow: "shadow-lg shadow-blue-gray-500/10",
            fontFamily: "font-sans",
            fontSize: "text-sm",
            fontWeight: "font-normal",
            color: "text-blue-gray-500",
            overflow: "overflow-auto",
            outline: "focus:outline-none",
          },
          option: {
            initial: {
              pt: "pt-[9px]",
              pb: "pb-2",
              px: "px-3",
              borderRadius: "rounded-md",
              lightHeight: "leading-tight",
              cursor: "cursor-pointer",
              userSelect: "select-none",
              background: "hover:bg-blue-gray-50 focus:bg-blue-gray-50",
              opacity: "hover:bg-opacity-80 focus:bg-opacity-80",
              color: "hover:text-blue-gray-900 focus:text-blue-gray-900",
              outline: "outline outline-0",
              transition: "transition-all",
            },
            active: {
              bg: "bg-blue-gray-50 bg-opacity-80",
              color: "text-blue-gray-900",
            },
            disabled: {
              opacity: "opacity-50",
              cursor: "cursor-not-allowed",
              userSelect: "select-none",
              pointerEvents: "pointer-events-none",
            },
          },
        },
        variants: {
          outlined: {
            base: {
              select: {},
              label: {
                position: "-top-1.5",
                before: {
                  content: "before:content[' ']",
                  display: "before:block",
                  boxSizing: "before:box-border",
                  width: "before:w-2.5",
                  height: "before:h-1.5",
                  mt: "before:mt-[6.5px]",
                  mr: "before:mr-1",
                  borderRadius: "before:rounded-tl-md",
                  pointerEvents: "before:pointer-events-none",
                  transition: "before:transition-all",
                  disabled: "peer-disabled:before:border-transparent",
                },
                after: {
                  content: "after:content[' ']",
                  display: "after:block",
                  flexGrow: "after:flex-grow",
                  boxSizing: "after:box-border",
                  width: "after:w-2.5",
                  height: "after:h-1.5",
                  mt: "after:mt-[6.5px]",
                  ml: "after:ml-1",
                  borderRadius: "after:rounded-tr-md",
                  pointerEvents: "after:pointer-events-none",
                  transition: "after:transition-all",
                  disabled: "peer-disabled:after:border-transparent",
                },
              },
            },
            sizes: {
              md: {
                container: {
                  height: "h-10",
                },
                select: {
                  fontSize: "text-sm",
                  px: "px-3",
                  py: "py-2.5",
                  borderRadius: "rounded-[7px]",
                },
                label: {
                  initial: {},
                  states: {
                    close: {
                      lineHeight: "leading-[3.75]",
                    },
                    open: {
                      lineHeight: "leading-tight",
                    },
                    withValue: {
                      lineHeight: "leading-tight",
                    },
                  },
                },
              },
              lg: {
                container: {
                  height: "h-11",
                },
                select: {
                  fontSize: "text-sm",
                  px: "px-3",
                  py: "py-3",
                  borderRadius: "rounded-[7px]",
                },
                label: {
                  initial: {},
                  states: {
                    close: {
                      lineHeight: "leading-[4.1]",
                    },
                    open: {
                      lineHeight: "leading-tight",
                    },
                    withValue: {
                      lineHeight: "leading-tight",
                    },
                  },
                },
              },
            },
            colors: {
              select: {
                "blue-gray": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-blue-gray-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                gray: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-gray-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                brown: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-brown-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                "deep-orange": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-deep-orange-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                orange: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-orange-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                amber: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-amber-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                yellow: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-yellow-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                lime: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-lime-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                "light-green": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-light-green-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                green: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-green-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                teal: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-teal-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                cyan: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-cyan-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                "light-blue": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-light-blue-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                blue: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-blue-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                indigo: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-indigo-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                "deep-purple": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-deep-purple-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                purple: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-purple-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                pink: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-pink-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
                red: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-red-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
              },
              label: {
                "blue-gray": {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-blue-gray-500",
                    before: "before:border-blue-gray-500",
                    after: "after:border-blue-gray-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                gray: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-gray-500",
                    before: "before:border-gray-500",
                    after: "after:border-gray-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                brown: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-brown-500",
                    before: "before:border-brown-500",
                    after: "after:border-brown-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                "deep-orange": {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-deep-orange-500",
                    before: "before:border-deep-orange-500",
                    after: "after:border-deep-orange-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                orange: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-orange-500",
                    before: "before:border-orange-500",
                    after: "after:border-orange-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                amber: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-amber-500",
                    before: "before:border-amber-500",
                    after: "after:border-amber-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                yellow: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-yellow-500",
                    before: "before:border-yellow-500",
                    after: "after:border-yellow-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                lime: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-lime-500",
                    before: "before:border-lime-500",
                    after: "after:border-lime-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                "light-green": {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-light-green-500",
                    before: "before:border-light-green-500",
                    after: "after:border-light-green-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                green: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-green-500",
                    before: "before:border-green-500",
                    after: "after:border-green-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                teal: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-teal-500",
                    before: "before:border-teal-500",
                    after: "after:border-teal-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                cyan: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-cyan-500",
                    before: "before:border-cyan-500",
                    after: "after:border-cyan-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                "light-blue": {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-light-blue-500",
                    before: "before:border-light-blue-500",
                    after: "after:border-light-blue-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                blue: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-blue-500",
                    before: "before:border-blue-500",
                    after: "after:border-blue-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                indigo: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-indigo-500",
                    before: "before:border-indigo-500",
                    after: "after:border-indigo-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                "deep-purple": {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-deep-purple-500",
                    before: "before:border-deep-purple-500",
                    after: "after:border-deep-purple-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                purple: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-purple-500",
                    before: "before:border-purple-500",
                    after: "after:border-purple-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                pink: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-pink-500",
                    before: "before:border-pink-500",
                    after: "after:border-pink-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
                red: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-red-500",
                    before: "before:border-red-500",
                    after: "after:border-red-500",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
              },
            },
            states: {
              close: {
                select: {
                  borderWidth: "border",
                },
                label: {
                  fontSize: "text-sm",
                  disabled: "peer-disabled:text-blue-gray-400",
                  before: {
                    bt: "before:border-t-transparent",
                    bl: "before:border-l-transparent",
                  },
                  after: {
                    bt: "after:border-t-transparent",
                    br: "after:border-r-transparent",
                  },
                },
              },
              open: {
                select: {
                  borderWidth: "border-2",
                  borderColor: "border-t-transparent",
                },
                label: {
                  fontSize: "text-[11px]",
                  disabled: "peer-disabled:text-transparent",
                  before: {
                    bt: "before:border-t-2",
                    bl: "before:border-l-2",
                  },
                  after: {
                    bt: "after:border-t-2",
                    br: "after:border-r-2",
                  },
                },
              },
              withValue: {
                select: {
                  borderWidth: "border",
                  borderColor: "border-t-transparent",
                },
                label: {
                  fontSize: "text-[11px]",
                  disabled: "peer-disabled:text-transparent",
                  before: {
                    bt: "before:border-t",
                    bl: "before:border-l",
                  },
                  after: {
                    bt: "after:border-t",
                    br: "after:border-r",
                  },
                },
              },
            },
            error: {
              select: {
                initial: {},
                states: {
                  close: {
                    borderColor: "border-red-500",
                  },
                  open: {
                    borderColor: "border-red-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-red-500",
                    borderTopColor: "border-t-transparent",
                  },
                },
              },
              label: {
                initial: {},
                states: {
                  close: {
                    color: "text-red-500",
                    before: "before:border-red-500",
                    after: "after:border-red-500",
                  },
                  open: {
                    color: "text-red-500",
                    before: "before:border-red-500",
                    after: "after:border-red-500",
                  },
                  withValue: {
                    color: "text-red-500",
                    before: "before:border-red-500",
                    after: "after:border-red-500",
                  },
                },
              },
            },
            success: {
              select: {
                initial: {},
                states: {
                  close: {
                    borderColor: "border-green-500",
                  },
                  open: {
                    borderColor: "border-green-500",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-green-500",
                    borderTopColor: "border-t-transparent",
                  },
                },
              },
              label: {
                initial: {},
                states: {
                  close: {
                    color: "text-green-500",
                    before: "before:border-green-500",
                    after: "after:border-green-500",
                  },
                  open: {
                    color: "text-green-500",
                    before: "before:border-green-500",
                    after: "after:border-green-500",
                  },
                  withValue: {
                    color: "text-green-500",
                    before: "before:border-green-500",
                    after: "after:border-green-500",
                  },
                },
              },
            },
          },
          standard: {
            base: {
              select: {},
              label: {
                position: "-top-1.5",
                after: {
                  content: "after:content[' ']",
                  display: "after:block",
                  width: "after:w-full",
                  position: "after:absolute",
                  bottom: "after:-bottom-1.5",
                  left: "left-0",
                  borderWidth: "after:border-b-2",
                  transition: "after:transition-transform after:duration-300",
                },
              },
            },
            sizes: {
              md: {
                container: {
                  height: "h-11",
                },
                select: {
                  fontSize: "text-sm",
                  pt: "pt-4",
                  pb: "pb-1.5",
                },
                label: {
                  initial: {},
                  states: {
                    close: {
                      lineHeight: "leading-[4.25]",
                    },
                    open: {
                      lineHeight: "leading-tight",
                    },
                    withValue: {
                      lineHeight: "leading-tight",
                    },
                  },
                },
              },
              lg: {
                container: {
                  height: "h-12",
                },
                select: {
                  fontSize: "text-sm",
                  px: "px-px",
                  pt: "pt-5",
                  pb: "pb-2",
                },
                label: {
                  initial: {},
                  states: {
                    close: {
                      lineHeight: "leading-[4.875]",
                    },
                    open: {
                      lineHeight: "leading-tight",
                    },
                    withValue: {
                      lineHeight: "leading-tight",
                    },
                  },
                },
              },
            },
            colors: {
              select: {
                "blue-gray": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-blue-gray-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                gray: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-gray-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                brown: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-brown-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                "deep-orange": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-deep-orange-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                orange: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-orange-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                amber: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-amber-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                yellow: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-yellow-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                lime: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-lime-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                "light-green": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-light-green-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                green: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-green-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                teal: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-teal-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                cyan: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-cyan-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                "light-blue": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-light-blue-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                blue: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-blue-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                indigo: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-indigo-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                "deep-purple": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-deep-purple-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                purple: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-purple-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                pink: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-pink-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                red: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-red-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
              },
              label: {
                "blue-gray": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-gray-500",
                  },
                  open: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-gray-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-gray-50",
                  },
                },
                gray: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-gray-500",
                  },
                  open: {
                    color: "text-gray-500",
                    after: "after:border-gray-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-gray-500",
                  },
                },
                brown: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-brown-500",
                  },
                  open: {
                    color: "text-brown-500",
                    after: "after:border-brown-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-brown-500",
                  },
                },
                "deep-orange": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-deep-orange-500",
                  },
                  open: {
                    color: "text-deep-orange-500",
                    after: "after:border-deep-orange-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-deep-orange-500",
                  },
                },
                orange: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-orange-500",
                  },
                  open: {
                    color: "text-orange-500",
                    after: "after:border-orange-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-orange-500",
                  },
                },
                amber: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-amber-500",
                  },
                  open: {
                    color: "text-amber-500",
                    after: "after:border-amber-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-amber-500",
                  },
                },
                yellow: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-yellow-500",
                  },
                  open: {
                    color: "text-yellow-500",
                    after: "after:border-yellow-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-yellow-500",
                  },
                },
                lime: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-lime-500",
                  },
                  open: {
                    color: "text-lime-500",
                    after: "after:border-lime-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-lime-500",
                  },
                },
                "light-green": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-light-green-500",
                  },
                  open: {
                    color: "text-light-green-500",
                    after: "after:border-light-green-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-light-green-500",
                  },
                },
                green: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-green-500",
                  },
                  open: {
                    color: "text-green-500",
                    after: "after:border-green-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-green-500",
                  },
                },
                teal: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-teal-500",
                  },
                  open: {
                    color: "text-teal-500",
                    after: "after:border-teal-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-teal-500",
                  },
                },
                cyan: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-cyan-500",
                  },
                  open: {
                    color: "text-cyan-500",
                    after: "after:border-cyan-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-cyan-500",
                  },
                },
                "light-blue": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-light-blue-500",
                  },
                  open: {
                    color: "text-light-blue-500",
                    after: "after:border-light-blue-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-light-blue-500",
                  },
                },
                blue: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-500",
                  },
                  open: {
                    color: "text-blue-500",
                    after: "after:border-blue-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-500",
                  },
                },
                indigo: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-indigo-500",
                  },
                  open: {
                    color: "text-indigo-500",
                    after: "after:border-indigo-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-indigo-500",
                  },
                },
                "deep-purple": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-deep-purple-500",
                  },
                  open: {
                    color: "text-deep-purple-500",
                    after: "after:border-deep-purple-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-deep-purple-500",
                  },
                },
                purple: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-purple-500",
                  },
                  open: {
                    color: "text-purple-500",
                    after: "after:border-purple-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-purple-500",
                  },
                },
                pink: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-pink-500",
                  },
                  open: {
                    color: "text-pink-500",
                    after: "after:border-pink-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-pink-500",
                  },
                },
                red: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-red-500",
                  },
                  open: {
                    color: "text-red-500",
                    after: "after:border-red-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-red-500",
                  },
                },
              },
            },
            states: {
              close: {
                select: {
                  borderWidth: "border-b",
                },
                label: {
                  fontSize: "text-sm",
                  disabled: "peer-disabled:text-blue-gray-400",
                  after: {
                    transform: "after:scale-x-0",
                  },
                },
              },
              open: {
                select: {
                  borderWidth: "border-b",
                },
                label: {
                  fontSize: "text-[11px]",
                  disabled: "peer-disabled:text-transparent",
                  after: {
                    transform: "after:scale-x-100",
                  },
                },
              },
              withValue: {
                select: {
                  borderWidth: "border-b",
                },
                label: {
                  fontSize: "text-[11px]",
                  disabled: "peer-disabled:text-transparent",
                  after: {
                    transform: "after:scale-x-0",
                  },
                },
              },
            },
            error: {
              select: {
                initial: {},
                states: {
                  close: {
                    borderColor: "border-red-500",
                  },
                  open: {
                    borderColor: "border-red-500",
                  },
                  withValue: {
                    borderColor: "border-red-500",
                  },
                },
              },
              label: {
                initial: {},
                states: {
                  close: {
                    color: "text-red-500",
                    after: "after:border-red-500",
                  },
                  open: {
                    color: "text-red-500",
                    after: "after:border-red-500",
                  },
                  withValue: {
                    color: "text-red-500",
                    after: "after:border-red-500",
                  },
                },
              },
            },
            success: {
              select: {
                initial: {},
                states: {
                  close: {
                    borderColor: "border-green-500",
                  },
                  open: {
                    borderColor: "border-green-500",
                  },
                  withValue: {
                    borderColor: "border-green-500",
                  },
                },
              },
              label: {
                initial: {},
                states: {
                  close: {
                    color: "text-green-500",
                    after: "after:border-green-500",
                  },
                  open: {
                    color: "text-green-500",
                    after: "after:border-green-500",
                  },
                  withValue: {
                    color: "text-green-500",
                    after: "after:border-green-500",
                  },
                },
              },
            },
          },
          static: {
            base: {
              select: {},
              label: {
                position: "-top-2.5",
                after: {
                  content: "after:content[' ']",
                  display: "after:block",
                  width: "after:w-full",
                  position: "after:absolute",
                  bottom: "after:-bottom-2.5",
                  left: "left-0",
                  borderWidth: "after:border-b-2",
                  transition: "after:transition-transform after:duration-300",
                },
              },
            },
            sizes: {
              md: {
                container: {
                  height: "h-11",
                },
                select: {
                  fontSize: "text-sm",
                  pt: "pt-4",
                  pb: "pb-1.5",
                },
                label: {
                  initial: {},
                  states: {
                    close: {
                      lineHeight: "leading-tight",
                    },
                    open: {
                      lineHeight: "leading-tight",
                    },
                    withValue: {
                      lineHeight: "leading-tight",
                    },
                  },
                },
              },
              lg: {
                container: {
                  height: "h-12",
                },
                select: {
                  fontSize: "text-sm",
                  px: "px-px",
                  pt: "pt-5",
                  pb: "pb-2",
                },
                label: {
                  initial: {},
                  states: {
                    close: {
                      lineHeight: "leading-tight",
                    },
                    open: {
                      lineHeight: "leading-tight",
                    },
                    withValue: {
                      lineHeight: "leading-tight",
                    },
                  },
                },
              },
            },
            colors: {
              select: {
                "blue-gray": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-blue-gray-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                gray: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-gray-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                brown: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-brown-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                "deep-orange": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-deep-orange-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                orange: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-orange-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                amber: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-amber-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                yellow: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-yellow-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                lime: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-lime-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                "light-green": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-light-green-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                green: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-green-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                teal: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-teal-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                cyan: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-cyan-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                "light-blue": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-light-blue-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                blue: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-blue-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                indigo: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-indigo-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                "deep-purple": {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-deep-purple-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                purple: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-purple-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                pink: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-pink-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
                red: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-red-500",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                  },
                },
              },
              label: {
                "blue-gray": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-gray-500",
                  },
                  open: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-gray-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-gray-50",
                  },
                },
                gray: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-gray-500",
                  },
                  open: {
                    color: "text-gray-500",
                    after: "after:border-gray-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-gray-500",
                  },
                },
                brown: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-brown-500",
                  },
                  open: {
                    color: "text-brown-500",
                    after: "after:border-brown-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-brown-500",
                  },
                },
                "deep-orange": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-deep-orange-500",
                  },
                  open: {
                    color: "text-deep-orange-500",
                    after: "after:border-deep-orange-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-deep-orange-500",
                  },
                },
                orange: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-orange-500",
                  },
                  open: {
                    color: "text-orange-500",
                    after: "after:border-orange-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-orange-500",
                  },
                },
                amber: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-amber-500",
                  },
                  open: {
                    color: "text-amber-500",
                    after: "after:border-amber-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-amber-500",
                  },
                },
                yellow: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-yellow-500",
                  },
                  open: {
                    color: "text-yellow-500",
                    after: "after:border-yellow-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-yellow-500",
                  },
                },
                lime: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-lime-500",
                  },
                  open: {
                    color: "text-lime-500",
                    after: "after:border-lime-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-lime-500",
                  },
                },
                "light-green": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-light-green-500",
                  },
                  open: {
                    color: "text-light-green-500",
                    after: "after:border-light-green-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-light-green-500",
                  },
                },
                green: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-green-500",
                  },
                  open: {
                    color: "text-green-500",
                    after: "after:border-green-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-green-500",
                  },
                },
                teal: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-teal-500",
                  },
                  open: {
                    color: "text-teal-500",
                    after: "after:border-teal-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-teal-500",
                  },
                },
                cyan: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-cyan-500",
                  },
                  open: {
                    color: "text-cyan-500",
                    after: "after:border-cyan-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-cyan-500",
                  },
                },
                "light-blue": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-light-blue-500",
                  },
                  open: {
                    color: "text-light-blue-500",
                    after: "after:border-light-blue-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-light-blue-500",
                  },
                },
                blue: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-500",
                  },
                  open: {
                    color: "text-blue-500",
                    after: "after:border-blue-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-blue-500",
                  },
                },
                indigo: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-indigo-500",
                  },
                  open: {
                    color: "text-indigo-500",
                    after: "after:border-indigo-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-indigo-500",
                  },
                },
                "deep-purple": {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-deep-purple-500",
                  },
                  open: {
                    color: "text-deep-purple-500",
                    after: "after:border-deep-purple-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-deep-purple-500",
                  },
                },
                purple: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-purple-500",
                  },
                  open: {
                    color: "text-purple-500",
                    after: "after:border-purple-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-purple-500",
                  },
                },
                pink: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-pink-500",
                  },
                  open: {
                    color: "text-pink-500",
                    after: "after:border-pink-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-pink-500",
                  },
                },
                red: {
                  close: {
                    color: "text-blue-gray-500",
                    after: "after:border-red-500",
                  },
                  open: {
                    color: "text-red-500",
                    after: "after:border-red-500",
                  },
                  withValue: {
                    color: "text-blue-gray-500",
                    after: "after:border-red-500",
                  },
                },
              },
            },
            states: {
              close: {
                select: {
                  borderWidth: "border-b",
                },
                label: {
                  fontSize: "text-sm",
                  disabled: "peer-disabled:text-blue-gray-400",
                  after: {
                    transform: "after:scale-x-0",
                  },
                },
              },
              open: {
                select: {
                  borderWidth: "border-b",
                },
                label: {
                  fontSize: "text-sm",
                  disabled: "peer-disabled:text-transparent",
                  after: {
                    transform: "after:scale-x-100",
                  },
                },
              },
              withValue: {
                select: {
                  borderWidth: "border-b",
                },
                label: {
                  fontSize: "text-sm",
                  disabled: "peer-disabled:text-transparent",
                  after: {
                    transform: "after:scale-x-0",
                  },
                },
              },
            },
            error: {
              select: {
                initial: {},
                states: {
                  close: {
                    borderColor: "border-red-500",
                  },
                  open: {
                    borderColor: "border-red-500",
                  },
                  withValue: {
                    borderColor: "border-red-500",
                  },
                },
              },
              label: {
                initial: {},
                states: {
                  close: {
                    color: "text-red-500",
                    after: "after:border-red-500",
                  },
                  open: {
                    color: "text-red-500",
                    after: "after:border-red-500",
                  },
                  withValue: {
                    color: "text-red-500",
                    after: "after:border-red-500",
                  },
                },
              },
            },
            success: {
              select: {
                initial: {},
                states: {
                  close: {
                    borderColor: "border-green-500",
                  },
                  open: {
                    borderColor: "border-green-500",
                  },
                  withValue: {
                    borderColor: "border-green-500",
                  },
                },
              },
              label: {
                initial: {},
                states: {
                  close: {
                    color: "text-green-500",
                    after: "after:border-green-500",
                  },
                  open: {
                    color: "text-green-500",
                    after: "after:border-green-500",
                  },
                  withValue: {
                    color: "text-green-500",
                    after: "after:border-green-500",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Ensure `active` is available for background color
    },
  },
  plugins: [],
}
