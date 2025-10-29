# UI Component Library

A comprehensive, reusable component library for AladdinNow B2B Marketplace.

## Installation

Import components from the UI library:

```tsx
import { Button, Input, Card, Dialog, Badge } from '@/components/ui';
```

## Components

### Button

Versatile button component with variants and sizes.

```tsx
// Size variations (1 = small, 2 = medium, 3 = large)
<Button size={1}>Small Button</Button>
<Button size={2}>Medium Button</Button>
<Button size={3}>Large Button</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// With loading state
<Button loading={true}>Submitting...</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 1 | 2 | 3 (1=small, 2=medium, 3=large)
- `loading`: boolean
- `fullWidth`: boolean
- All standard button HTML attributes

---

### Input

Form input with label, error, and hint support.

```tsx
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  error="Invalid email format"
  hint="We'll never share your email"
  required
/>

// With icons
<Input
  leftIcon={<SearchIcon />}
  placeholder="Search products..."
/>

<Input
  rightIcon={<EyeIcon />}
  type="password"
/>
```

**Props:**
- `label`: string
- `error`: string
- `hint`: string
- `leftIcon`: React.ReactNode
- `rightIcon`: React.ReactNode
- `fullWidth`: boolean
- All standard input HTML attributes

---

### Dialog (Modal)

Accessible modal dialog component.

```tsx
const [open, setOpen] = useState(false);

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  description="Are you sure you want to proceed?"
  size={2}
>
  <div className="cluster gap-3">
    <Button onClick={() => setOpen(false)} variant="outline">Cancel</Button>
    <Button onClick={handleConfirm}>Confirm</Button>
  </div>
</Dialog>

// Size variations
<Dialog size={1}>Small Dialog (400px)</Dialog>
<Dialog size={2}>Medium Dialog (600px)</Dialog>
<Dialog size={3}>Large Dialog (800px)</Dialog>
```

**Props:**
- `open`: boolean (required)
- `onClose`: () => void (required)
- `title`: string
- `description`: string
- `size`: 1 | 2 | 3
- `showCloseButton`: boolean

---

### Card

Flexible card container with header, body, and footer sections.

```tsx
<Card variant="default" padding={2} hoverable>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here</p>
  </CardBody>
  <CardFooter>
    <Button size={1}>Action</Button>
  </CardFooter>
</Card>

// Variants
<Card variant="default">Default Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="elevated">Elevated Card</Card>

// Padding sizes
<Card padding={1}>Small Padding</Card>
<Card padding={2}>Medium Padding</Card>
<Card padding={3}>Large Padding</Card>
```

**Props:**
- `variant`: 'default' | 'outlined' | 'elevated'
- `padding`: 1 | 2 | 3
- `hoverable`: boolean

---

### Badge

Status and label indicators.

```tsx
// Size variations
<Badge size={1}>Small</Badge>
<Badge size={2}>Medium</Badge>
<Badge size={3}>Large</Badge>

// Variants
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="neutral">Neutral</Badge>
```

**Props:**
- `variant`: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
- `size`: 1 | 2 | 3

---

### Select

Dropdown select component.

```tsx
<Select
  label="Select Country"
  placeholder="Choose a country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada', disabled: true },
  ]}
  error="Please select a country"
  required
/>
```

**Props:**
- `label`: string
- `error`: string
- `hint`: string
- `options`: SelectOption[]
- `placeholder`: string
- `fullWidth`: boolean

---

### Checkbox

Checkbox input with label.

```tsx
<Checkbox
  label="I agree to the terms and conditions"
  error="You must accept the terms"
  hint="Read our privacy policy"
/>
```

**Props:**
- `label`: string
- `error`: string
- `hint`: string

---

### Textarea

Multi-line text input.

```tsx
<Textarea
  label="Description"
  placeholder="Enter description"
  rows={4}
  resize="vertical"
  error="Description is required"
  maxLength={500}
/>
```

**Props:**
- `label`: string
- `error`: string
- `hint`: string
- `resize`: 'none' | 'vertical' | 'horizontal' | 'both'
- `fullWidth`: boolean

---

### Alert

Notification and alert messages.

```tsx
<Alert variant="success" title="Success!">
  Your changes have been saved.
</Alert>

<Alert variant="warning" dismissible onDismiss={() => console.log('dismissed')}>
  Please verify your email address.
</Alert>

// Variants
<Alert variant="info">Information message</Alert>
<Alert variant="success">Success message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="danger">Error message</Alert>
```

**Props:**
- `variant`: 'info' | 'success' | 'warning' | 'danger'
- `title`: string
- `dismissible`: boolean
- `onDismiss`: () => void

---

### Spinner

Loading spinner component.

```tsx
// Size variations
<Spinner size={1} /> // Small (16px)
<Spinner size={2} /> // Medium (24px)
<Spinner size={3} /> // Large (40px)

// Custom color
<Spinner color="#02c4cb" size={2} />
```

**Props:**
- `size`: 1 | 2 | 3
- `color`: string

---

## Design System

All components use the CSS variables defined in `globals.css`:

- **Colors**: `--color-primary`, `--color-accent`, etc.
- **Spacing**: `--space-1` through `--space-16`
- **Typography**: `--font-sans`, `--font-mono`
- **Borders**: `--radius-sm`, `--radius-md`, `--radius-lg`

## Accessibility

All components follow WAI-ARIA guidelines:
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management

## TypeScript Support

Full TypeScript support with exported type definitions:

```tsx
import type { ButtonProps, InputProps, CardProps } from '@/components/ui';
```
