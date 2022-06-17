import { Avatar, Grid, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { grey } from '@mui/material/colors';



export function CountrySelect() {
  const { t, i18n } = useTranslation()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleCountrySelectChange = (language: string) => {
    i18n.changeLanguage(language)
  }

  const renderEmoji = () => {
    const country = countries.find(({ language }) => language === i18n.language)!
    return String.fromCodePoint(...country.emojiHexcode)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Grid sx={{ position: 'fixed', top: '0', width: 'inherit', padding: 'inherit', margin: 'inherit', display: 'flex', justifyContent: 'flex-end' }}>
      <Tooltip title={t('CHOOSE_A_LANGUAGE') as string}>
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar variant="rounded" sx={{ width: 32, height: 32, bgcolor: grey[200] }}>{renderEmoji()}</Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          countries.map((country, index) => (
            <MenuItem key={`country-${index}`} onClick={() => handleCountrySelectChange(country.language)}>
              <Avatar variant="rounded" sx={{ bgcolor: grey[200] }}>{String.fromCodePoint(...country.emojiHexcode)}</Avatar> {t(country.language)}
            </MenuItem>

          ))
        }
      </Menu>
    </Grid>
  )
}

interface CountryType {
  language: string
  code?: string
  emojiHexcode: number[]
  label: string
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
// Emoji list https://unicode.org/emoji/charts/full-emoji-list.html
const countries: readonly CountryType[] = [
  { language: 'pt-BR', emojiHexcode: [0x1f1e7, 0x1f1f7], label: 'Brazil' },
  { language: 'en-US', emojiHexcode: [0x1f1fa, 0x1f1f8], label: 'United States' },
]
