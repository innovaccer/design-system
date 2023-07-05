#!/bin/bash

declare -a categoryList=("Date and Time/TimePicker" "Navigation" "Inputs" "Navigation" "Deprecated" "Overlays" "Overlays" "Inputs" "Navigation" "Layout" "Inputs" "Deprecated" "Overlays" "Components" "Inputs" "Layout" "File Inputs" "Overlays" "File Inputs" "Loaders" "Inputs" "Overlays" "Inputs" "Indicators" "Loaders" "Deprecated" "Indicators" "Inputs" "Typography" "Inputs" "Loaders" "Selection" "Selection" "Typography" "Layout" "Layout" "Overlays" "Typography" "Inputs" "Typography" "Indicators" "Selection" "Selection" "Typography" "Selection" "Indicators" "Loaders" "Loaders" "Selection" "Loaders" "Others" "Inputs" "Actions" "Navigation" "Indicators" "Navigation" "Actions" "Layout" "Indicators" "Indicators" "Selection" "Indicators" "Typography" "Icon" "Navigation" "Selection" "Indicators" "Date and Time/Timepicker" "Deprecated"  "Date and Time"  "Date and Time"  "Date and Time"  "Date and Time" "Indicators" "Navigation" "Layout" "Layout" "Navigation" "Layout" "Layout")
declare -a componentList=("TimePickerWithSearch" "Tabs" "InputMask" "Pagination" "Navigation" "Tooltip" "FullscreenModal" "EditableChipInput" "Stepper" "PageHeader" "EditableDropdown" "Dialog" "Popover" "ChatMessage" "EditableInput" "EmptyState" "Dropzone" "Sidesheet" "FileList" "Placeholder" "VerificationCodeInput" "Modal" "ChipInput" "AvatarGroup" "PlaceholderImage" "Caption" "Legend" "Dropdown" "HelpText" "MetricInput" "PlaceholderParagraph" "ChoiceList" "Radio" "Subheading" "Card" "CardSubdued" "Backdrop" "Paragraph" "Input" "Heading" "Toast" "Chip" "Checkbox" "Label" "Slider" "Message" "Spinner" "ProgressBar" "RangeSlider" "ProgressRing" "OutsideClick" "Textarea" "Button" "Link" "MetaList" "Collapsible" "LinkButton" "Divider" "Pills" "Avatar" "Switch" "StatusHint" "Text" "Icon" "Breadcrumbs" "ChipGroup" "Badge" "TimePickerWithInput" "FileUploader" "TimePicker" "Calendar" "DatePicker" "DateRangePicker" "InlineMessage" "HorizontalNav" "Table" "List" "VerticalNav" "Grid" "GridCell")

function find_index {
  value=$1

  for i in "${!componentList[@]}"; do
    if [[ "${componentList[$i]}" = "${value}" ]]; then
      echo "${i}";
    fi
  done
}

function find_index_lowercase {
  value=$1

  for i in "${!componentList[@]}"; do
    searchStr=$(echo "${componentList[$i]}" | awk '{print tolower($0)}')
    if [[ "${searchStr}" = "${value}" ]]; then
      echo "${i}";
    fi
  done
}

# Step 1: update story url based on category in storybook 

fileList=$(find . -iname "*.story.jsx")

for FILE in ${fileList}; do 

  # read component name from file
  result=$(awk '$1=="component:"{print $2}' $FILE)

  # remove , last character from component name
  componentName=$(echo ${result} | sed 's/.$//')

  # find corresponding category name from list
  categoryIndex=$(find_index ${componentName})

  # replace component path with new category
  searchString="Components/${componentName}/"
  replaceString="${categoryList[${categoryIndex}]}/${componentName}/"
  sed -i '' -e "s@${searchString}@${replaceString}@g" $FILE; 

  echo ${searchString} " replaced with " ${replaceString} " in " "${FILE}"
done

# -----------------
echo -e "\n===========Start Migrating Markdown Files===========\n"

# Step 2: update story url in docs markdown file

markdownList=$(find . -iname "*.mdx")

for MDXFILE in ${markdownList}; do

  # Get list of all the lines containing <Preview in MDX file
  previewList=$(grep --color=auto -n "<Preview name=" $MDXFILE | cut -d "=" -f2)

  for preview in ${previewList}; do
    targetComponent=$(echo ${preview} | cut -d "-" -f2)

    if [[ "${targetComponent}" != "/>" ]]; then
      componentIndex=$(find_index_lowercase ${targetComponent})
      categoryName=$(echo "${categoryList[${componentIndex}]}" | awk '{print tolower($0)}' | tr " " "-" | tr "/" "-")

      searchValue="components-${targetComponent}-"
      replaceValue="${categoryName}-${targetComponent}-"

      sed -i '' -e "s@${searchValue}@${replaceValue}@g" $MDXFILE; 
      echo ${searchValue} " replaced with " ${replaceValue} " in " "$MDXFILE"
    fi
  done
done
echo "=====Migration Completed====="
