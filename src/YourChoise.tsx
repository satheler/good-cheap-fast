import { FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function YourChoise() {
  const { t } = useTranslation()

  const initialState = {
    good: false,
    cheap: false,
    fast: false,
  }

  const [choice, setChoice] = useState(initialState)
  const [theLastChoice, setTheLastChoice] = useState<keyof typeof initialState | undefined>(undefined)

  const handleChoice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setChoice(choice => ({ ...choice, [name]: checked }))

    const choicesToUncheck = Object.keys(choice).filter(key => ![name, theLastChoice].includes(key))

    if (choicesToUncheck.length === 1) {
      const [choiceToUncheck] = choicesToUncheck
      setChoice(choice => ({ ...choice, [choiceToUncheck]: false }))
    }

    if (checked) {
      setTheLastChoice(name as keyof typeof initialState)
    }
  }

  return (
    <FormControl component='fieldset' variant='standard' sx={{ zoom: '200%', alignItems: 'center', justifyContent: 'center' }}>
      <FormLabel component='legend'>{t('TITLE')}</FormLabel>
      <FormGroup sx={{ alignContent: 'center' }}>
        <FormControlLabel
          control={
            <Switch color='success' checked={choice.good} onChange={handleChoice} name='good' />
          }
          label={t('GOOD') as string}
        />
        <FormControlLabel
          control={
            <Switch color='info' checked={choice.cheap} onChange={handleChoice} name='cheap' />
          }
          label={t('CHEAP') as string}
        />
        <FormControlLabel
          control={
            <Switch color='error' checked={choice.fast} onChange={handleChoice} name='fast' />
          }
          label={t('FAST') as string}
        />
      </FormGroup>
    </FormControl>
  )
}