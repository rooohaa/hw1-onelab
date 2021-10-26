import React, { useState } from 'react'
import { SelectOption, SelectOptions, SelectWrap } from './style'

const AppSelect = ({ label, options, onSelect, iconPath }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const activeClass = isOpen ? 'active' : ''

  return (
    <SelectWrap>
      <div className="select-value" onClick={() => setIsOpen(!isOpen)}>
        {iconPath && <img className="select-icon" src={iconPath} alt="Icon" />}
        <div className="select-label">
          {selectedValue ? selectedValue : label}
        </div>
        {!iconPath && (
          <img
            className={activeClass}
            src="/icons/arrow-down.svg"
            alt="Arrow down"
          />
        )}
      </div>
      <SelectOptions className={activeClass}>
        {options.map(({ id, value, meta }) => (
          <SelectOption
            key={id}
            className={selectedValue === value ? 'active' : ''}
            onClick={() => {
              setSelectedValue(value)
              setIsOpen(false)
              onSelect(meta)
            }}
          >
            {value}
          </SelectOption>
        ))}
      </SelectOptions>
    </SelectWrap>
  )
}

export { AppSelect }
