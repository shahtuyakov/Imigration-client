# Immigration News Client App - Design System

## Table of Contents
- [Foundation](#foundation)
  - [Color Palette](#color-palette)
  - [Typography](#typography)
  - [Spacing](#spacing)
  - [Border Radius](#border-radius)
  - [Elevation & Shadows](#elevation--shadows)
- [Components](#components)
  - [Buttons](#buttons)
  - [Input Fields](#input-fields)
  - [Cards](#cards)
  - [Lists](#lists)
  - [Navigation](#navigation)
  - [Status Indicators](#status-indicators)
  - [Dialogs & Modals](#dialogs--modals)
- [Screen Templates](#screen-templates)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Platform-Specific Considerations](#platform-specific-considerations)

## Foundation

### Color Palette

#### Primary Colors
- **Primary Blue**: `#2C6BED` - Main brand color for primary actions and key UI elements
- **Secondary Teal**: `#20B2AA` - For secondary actions and complementary UI elements

#### Neutrals
- **Dark**: `#1A2138` - For text and dark backgrounds
- **Mid Gray**: `#667085` - For secondary text and icons
- **Light Gray**: `#E4E7EC` - For backgrounds, dividers, and disabled states
- **White**: `#FFFFFF` - For cards and light mode backgrounds

#### Semantic Colors
- **Success**: `#22C55E` - For positive status indicators (approved cases)
- **Warning**: `#F59E0B` - For warnings and pending states
- **Error**: `#EF4444` - For errors and rejected states
- **Info**: `#3B82F6` - For informational elements

#### Dark Mode Variants
- **Dark Background**: `#121826`
- **Dark Surface**: `#1E293B`
- **Dark Accent**: `#3E4784`

#### Usage Guidelines
- Use Primary Blue for primary actions, key navigation elements, and brand identity
- Use semantic colors only for their intended purposes (status, information)
- In dark mode, ensure sufficient contrast by using appropriate color variants
- Maintain accessibility standards with adequate contrast ratios (minimum 4.5:1 for text)

### Typography

#### Font Family
- **iOS**: SF Pro
- **Android**: Roboto
- **Fallbacks**: System fonts for optimal platform integration

#### Type Scale
| Style | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| Heading 1 | 28px | 34px | Bold | Primary headlines, screen titles |
| Heading 2 | 24px | 30px | Bold | Section headers, modal titles |
| Heading 3 | 20px | 25px | SemiBold | Card titles, feature headings |
| Heading 4 | 18px | 24px | SemiBold | Sub-section headers |
| Body Large | 16px | 24px | Regular | Primary content text |
| Body Default | 14px | 21px | Regular | Standard content text |
| Body Small | 12px | 18px | Regular | Secondary information, captions |
| Caption | 11px | 16px | Medium | Metadata, timestamps |

#### Usage Guidelines
- Maintain type hierarchy consistently across all screens
- Allow for 30-40% text expansion for localization (especially for Russian)
- Use system dynamic type settings to support accessibility
- Avoid using more than 3 different text styles on a single screen

### Spacing

Based on 4px grid system:
- **xxs**: 4px - Minimum spacing, tight elements
- **xs**: 8px - Standard internal spacing
- **s**: 12px - Default spacing between related elements
- **m**: 16px - Default padding, comfortable spacing
- **l**: 24px - Separation between sections
- **xl**: 32px - Major section breaks
- **xxl**: 48px - Significant layout divisions
- **xxxl**: 64px - Maximum spacing value

#### Usage Guidelines
- Maintain consistent spacing within component types
- Use appropriate spacing to indicate hierarchical relationships
- Double spacing when transitioning between major content sections
- Ensure touch targets are minimum 44px × 44px with adequate spacing

### Border Radius

- **Small**: 4px - For small elements like chips and badges
- **Medium**: 8px - For cards, buttons, and input fields
- **Large**: 16px - For modal dialogs, bottom sheets
- **Pill**: 9999px - For tags, filter chips, and avatar elements

#### Usage Guidelines
- Use consistent radius values within component categories
- Smaller elements should use smaller radius values
- Reserve largest radius for containers and major UI elements

### Elevation & Shadows

#### Light Mode
| Level | Usage | Properties |
|-------|-------|------------|
| 1 | Subtle elevation (cards) | `0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)` |
| 2 | Buttons, active cards | `0px 4px 6px -1px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)` |
| 3 | Floating elements | `0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.05)` |
| 4 | Modals, dialogs | `0px 20px 25px -5px rgba(16, 24, 40, 0.1), 0px 8px 10px -6px rgba(16, 24, 40, 0.05)` |

#### Dark Mode
| Level | Usage | Properties |
|-------|-------|------------|
| 1 | Subtle elevation | `0px 1px 3px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.2)` |
| 2 | Buttons, active cards | `0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -2px rgba(0, 0, 0, 0.2)` |
| 3 | Floating elements | `0px 10px 15px -3px rgba(0, 0, 0, 0.3), 0px 4px 6px -4px rgba(0, 0, 0, 0.2)` |
| 4 | Modals, dialogs | `0px 20px 25px -5px rgba(0, 0, 0, 0.3), 0px 8px 10px -6px rgba(0, 0, 0, 0.2)` |

#### Usage Guidelines
- Use elevation to establish UI hierarchy
- Combine shadow with subtle background color change for better definition
- In dark mode, use softer shadows with less spread
- Avoid excessive shadows that create visual noise

## Components

### Buttons

#### Primary Button
- Background: Primary Blue (`#2C6BED`)
- Text: White, Body Default, Medium weight
- Height: 48px (standard), 44px (compact)
- Padding: 16px horizontal, vertically centered
- Border Radius: Medium (8px)
- States: Default, Hover, Pressed, Disabled, Loading

#### Secondary Button
- Border: 1.5px Primary Blue (`#2C6BED`)
- Background: Transparent
- Text: Primary Blue, Body Default, Medium weight
- Height: 48px (standard), 44px (compact)
- Padding: 16px horizontal, vertically centered
- Border Radius: Medium (8px)
- States: Default, Hover, Pressed, Disabled

#### Text Button
- Background: Transparent
- Text: Primary Blue, Body Default, Medium weight
- Height: 44px
- Padding: 12px horizontal, vertically centered
- States: Default, Hover, Pressed, Disabled

#### Icon Button
- Background: Transparent or Light Gray in 40px circular container
- Icon: 24px size in Primary Blue or Dark color
- Touch area: Minimum 44px × 44px
- States: Default, Hover, Pressed, Disabled

#### Social Authentication Buttons
- Height: 48px
- Background: Provider-specific or White with 1px border
- Border Radius: Medium (8px)
- Content: Provider logo + "Continue with [Provider]" text
- Padding: 16px horizontal, vertically centered

#### Usage Guidelines
- Use Primary Button for main actions
- Use Secondary Button for alternative actions
- Use Text Button for tertiary actions
- Maintain consistent button styles and sizes within each screen
- Ensure buttons have recognizable, consistent states
- Use loading state for async operations

### Input Fields

#### Text Input
- Height: 48px (standard)
- Background: Light Gray (`#F9FAFB`) or White with border
- Border: 1px Light Gray (`#E4E7EC`), 1.5px Primary Blue when focused
- Border Radius: Medium (8px)
- Text: Body Default
- Padding: 16px, with additional 40px when using left icons
- Label: Body Small, positioned above input
- Helper Text: Caption size, positioned below input
- Error State: Error Red border and error message
- Icons: 20px size, positioned 16px from left/right edge

#### Password Input
- Same specifications as Text Input
- Additional: Show/Hide password toggle icon on right side

#### Dropdown/Select
- Same height and styling as Text Input
- Additional: Dropdown icon on right side
- Expanded state shows options in a card with the same styling

#### Search Field
- Height: 44px
- Background: Light Gray (`#F9FAFB`)
- Border Radius: Medium (8px)
- Search icon: 20px size, positioned 12px from left
- Clear button appears when text is entered
- Padding: 12px left after icon, 12px right

#### Checkbox & Radio
- Size: 20px × 20px
- States: Unchecked, Checked, Indeterminate, Disabled
- Animation: Subtle transition when state changes
- Touch target: Minimum 44px × 44px

#### Usage Guidelines
- Maintain consistent input styling across all forms
- Use appropriate input types for different data
- Always include visible labels (floating or fixed)
- Provide clear error states and helpful error messages
- Support autofill functionality

### Cards

#### News Card
- Background: White
- Border Radius: Medium (8px)
- Elevation: Level 1
- Padding: 16px
- Image: Optional, positioned at top or side
- Title: Heading 4 or Body Large Bold
- Meta: Caption for source, category, timestamp
- States: Default, Pressed
- Actions: Bookmark, Share

#### Case Card
- Background: White
- Border Radius: Medium (8px)
- Elevation: Level 1
- Padding: 16px
- Status Indicator: Color-coded pill
- Case ID: Caption
- Title: Body Large Bold
- Timeline: Simplified progress indicator
- Actions: Context menu for options

#### Lawyer Card
- Background: White
- Border Radius: Medium (8px)
- Elevation: Level 1
- Padding: 16px
- Avatar: 48px circular
- Name: Body Large Bold
- Specialization: Body Small
- Rating: Star indicator with count
- Action: Primary Button for contacting/booking

#### Detail Card
- Background: White
- Border Radius: Medium (8px)
- Elevation: Level 1
- Padding: 16px
- Section Title: Body Default Medium
- Content: Variable based on content type
- Expandable: Optional disclosure indicator

#### Usage Guidelines
- Use consistent card layouts for similar content types
- Include clear touch/press states
- Ensure adequate spacing between cards (16px minimum)
- Use appropriate elevation to establish hierarchy
- Consider loading states (skeletons) for async content

### Lists

#### Standard List Item
- Height: Minimum 64px, flexible based on content
- Divider: 1px Light Gray between items
- Padding: 16px
- Leading: Optional icon, avatar, or image
- Title: Body Default
- Subtitle: Body Small
- Trailing: Optional meta information, chevron, or action
- States: Default, Pressed, Selected

#### Section Headers
- Height: 48px
- Text: Body Small Medium or Caption in Mid Gray
- Background: Transparent or Light Gray
- Padding: 16px horizontal, vertically centered
- Optional: Action button aligned to right

#### Empty States
- Centered layout
- Illustration: 120px-160px size
- Title: Heading 3
- Description: Body Default
- Action: Optional Primary Button
- Padding: 24px

#### Usage Guidelines
- Use consistent list items for similar content types
- Group related items with section headers
- Provide clear visual feedback for interactive items
- Include appropriate loading and empty states
- Ensure list items have adequate touch targets

### Navigation

#### Bottom Tab Bar
- Height: 56px with safe area inset
- Background: White with subtle top border
- Active Tab: Primary Blue icon and label
- Inactive Tab: Mid Gray icon and label
- Labels: Caption size text
- Icons: 24px size

#### Top Navigation Bar
- Height: 56px
- Background: White or Primary Blue (based on screen)
- Title: Heading 3 centered or left-aligned
- Back Button: Chevron icon + optional text
- Actions: Up to 2 icon buttons on right side
- Elevation: Level 1

#### Segmented Controls
- Height: 36px
- Background: Light Gray container
- Segments: White background for active, transparent for inactive
- Text: Body Small Medium
- Border Radius: Medium (8px) for container, Pill for active segment
- Animation: Smooth transition between segments

#### Filter Chips
- Height: 32px
- Border Radius: Pill
- Background: Light Gray (inactive), Primary Blue (active)
- Text: Body Small, Mid Gray (inactive), White (active)
- Padding: 8px horizontal, vertically centered
- Optional: Clear/remove icon
- Horizontal scrolling container when many filters are present

#### Usage Guidelines
- Use consistent navigation patterns across similar screens
- Highlight current section/tab clearly
- Ensure Back button behavior meets platform standards
- Consider accessibility of navigation elements
- Provide clear visual feedback for navigation actions

### Status Indicators

#### Status Pills
- Height: 24px
- Border Radius: Pill
- Background: 10% opacity of semantic color
- Text: Caption size, semantic color
- Padding: 8px horizontal, vertically centered
- Optional: Small icon (16px)

#### Badges
- Size: 16px-20px circular
- Background: Primary Blue, Error Red (notifications)
- Text: Small white number if applicable
- Position: Top-right of element being badged

#### Progress Indicators
- Linear Progress: 4px height, Primary Blue
- Circular Progress: 2px stroke width, 24px diameter
- Step Indicators: Connected dots or numbers
- Timeline: Vertical line with milestone points

#### Ratings
- Star icons: 16px size, filled with Warning color
- Scale: 5-star system with half-star increments
- Display: Stars + numeric value (e.g., 4.5)

#### Usage Guidelines
- Use semantic colors consistently for status meaning
- Ensure status indicators are accessible (not relying on color alone)
- Position indicators consistently in relation to their content
- Update status indicators dynamically when status changes

### Dialogs & Modals

#### Alert Dialog
- Width: 85% of screen (max 400px)
- Border Radius: Large (16px)
- Elevation: Level 4
- Title: Heading 3, centered
- Content: Body Default
- Actions: Appropriate buttons (usually Primary + Secondary)
- Padding: 24px
- Animation: Fade in and slight scale up

#### Bottom Sheet
- Width: 100% of screen
- Height: Variable based on content (25%, 50%, 75%, or full)
- Border Radius: 16px top corners only
- Handle: 4px × 32px light gray indicator centered at top
- Background: White
- Padding: 24px
- Max Height: 90% of screen
- Animation: Slide up

#### Toast Messages
- Width: 85% of screen (max 400px)
- Border Radius: Medium (8px)
- Background: Dark or semantic color based on message type
- Text: Body Small, White
- Icon: 20px size matching message type
- Duration: 3 seconds default
- Position: Bottom of screen with safe area inset
- Animation: Fade + slight slide

#### Usage Guidelines
- Use appropriate dialog type based on context and content
- Limit dialog content to maintain focus
- Provide clear actions with descriptive labels
- Consider keyboard interactions for form dialogs
- Ensure dialogs are dismissible by standard methods

## Screen Templates

### Authentication Templates

#### Login Screen
- Header: Brand logo, welcome text
- Form: Email/Phone, Password inputs
- Actions: Sign In button, Forgot Password link
- Alternatives: Social login options
- Navigation: Sign Up link

#### Sign Up Screen
- Header: Brand logo, welcome text
- Form: Name, Email, Password inputs
- Validation: Password strength indicators
- Terms: Checkbox for terms acceptance
- Actions: Create Account button
- Alternatives: Social signup options
- Navigation: Login link

#### Verification Screen
- Header: Instructional text
- Visual: Email/Phone illustration
- Input: Code entry field
- Actions: Verify button, Resend code link
- Countdown: Timer for resend option

### Feed Templates

#### News Feed
- Header: App logo, search, notification icons
- Filters: Horizontal scrolling category chips
- Featured: Large card with image
- Feed: Scrolling list of news cards
- Empty State: When no news available
- Navigation: Bottom tab bar

#### Case Dashboard
- Header: Title, filter/sort options
- Summary: Stats cards showing case counts by status
- List: Case cards with status indicators
- Empty State: When no cases available
- Actions: Add new case button (FAB)
- Navigation: Bottom tab bar

#### Lawyer Directory
- Header: Title, search bar
- Filters: Specialization, language, rating
- List: Lawyer cards with key information
- Actions: Contact, Book Appointment buttons
- Empty State: When no results match filters
- Navigation: Bottom tab bar

### Detail Templates

#### News Detail
- Header: Back button, share action
- Image: Featured image (optional)
- Meta: Source, date, category
- Content: Article body with appropriate typography
- Actions: Bookmark, share, related news
- Navigation: Previous/next article swipe

#### Case Detail
- Header: Back button, case ID, actions menu
- Status: Current status with history access
- Timeline: Visual representation of case progress
- Documents: List of associated files
- Notes: Text entries with timestamps
- Actions: Add document, add note, update status

#### Lawyer Profile
- Header: Back button, actions menu
- Hero: Avatar, name, specialization
- Rating: Star rating with review count
- Details: Bio, experience, languages, fees
- Availability: Calendar view for booking
- Actions: Book Appointment, Contact buttons

### Settings Templates

#### Profile View/Edit
- Header: Title, edit/save actions
- Avatar: User photo with edit option
- Form: Personal information fields
- Actions: Save, cancel buttons
- Sections: Personal info, preferences, etc.

#### Settings Screen
- Header: Title, back button
- Sections: Grouped settings with disclosure indicators
- Toggles: For binary settings
- Navigation: Deep links to sub-settings screens

## Accessibility Guidelines

### Visual Accessibility

#### Color & Contrast
- Maintain minimum 4.5:1 contrast ratio for all text
- Ensure UI is usable in high contrast mode
- Don't rely solely on color to convey information
- Provide visual alternatives for color-based indicators

#### Typography & Scaling
- Support OS text size adjustments
- Test layouts with 200% text size increase
- Use relative units for fonts and spacing
- Implement flexible containers that adapt to text size

#### Focus States
- Provide clear visual focus indicators
- Ensure focus order follows logical sequence
- Support keyboard navigation throughout the app
- Make all interactive elements focusable

### Touch & Motor

#### Touch Targets
- Minimum size: 44px × 44px
- Adequate spacing between interactive elements (minimum 8px)
- Forgiving touch areas that extend beyond visible boundaries
- Support for assistive touch features

#### Gestures
- Provide alternatives to complex gestures
- Ensure swipe actions have visible indicators
- Support system-level accessibility gestures
- Reduce motion when accessibility settings request it

### Screen Readers

#### Labeling
- Provide meaningful accessibility labels for all UI elements
- Include descriptive hints for complex interactions
- Use semantic grouping for related elements
- Ensure custom components have proper accessibility roles

#### Dynamic Content
- Announce dynamic content changes
- Provide progress updates for long operations
- Ensure modals and dialogs are properly announced
- Support screen reader navigation patterns

### Implementation Checklist

- [ ] Test with VoiceOver (iOS) and TalkBack (Android)
- [ ] Support dynamic type and text scaling
- [ ] Verify color contrast meets WCAG 2.1 AA standards
- [ ] Ensure keyboard/switch control navigation works
- [ ] Test with reduced motion settings
- [ ] Validate touch target sizes and spacing
- [ ] Provide meaningful error messages and recovery options
- [ ] Support screen orientation changes

## Platform-Specific Considerations

### iOS Implementation

#### Navigation Patterns
- Use standard iOS back navigation (swipe from left edge)
- Implement tab bar according to iOS Human Interface Guidelines
- Consider native iOS transition animations
- Support iOS 13+ appearance modes

#### Component Adaptations
- Use SF Pro font at specified weights
- Adjust form controls to match iOS native appearance
- Implement iOS-style pickers for selection inputs
- Consider iOS-specific haptic feedback patterns

#### Gestures & Interactions
- Support standard iOS gestures (pinch, long press)
- Implement pull-to-refresh for content updates
- Consider 3D Touch/Haptic Touch for quick actions
- Respect safe areas for all UI elements

### Android Implementation

#### Navigation Patterns
- Implement material back navigation
- Use bottom navigation according to Material Design guidelines
- Support Android system back button
- Consider Android-specific transition animations

#### Component Adaptations
- Use Roboto font at specified weights
- Adjust form controls to match Material Design appearance
- Implement Android-style pickers and dialogs
- Consider ripple effects for touch feedback

#### Gestures & Interactions
- Support standard Android gestures
- Implement swipe to refresh for content updates
- Consider long press for contextual actions
- Respect system insets and cutout areas

### Cross-Platform Harmony

- Maintain consistent information architecture across platforms
- Adapt interaction patterns to platform conventions
- Use platform-specific animations and transitions
- Support dark mode consistently on both platforms
- Ensure feature parity while respecting platform differences

---

*This design system document serves as the foundation for building consistent, usable, and accessible UI for the Immigration News Client App across iOS and Android platforms. All UI components should adhere to these guidelines while respecting platform-specific conventions.*