# How to Update Major Projects Data

## Quick Guide

To add, edit, or remove projects from the Major Projects page, edit the file:
`src/app/major-projects/data/projectsData.ts`

## Data Structure

```typescript
{
  Client: "Client Name",
  Projects: [
    {
      "Project / Location": "Location details",
      "Work Description": "Description of work done",
      TPI: "Third Party Inspector name"
    }
  ]
}
```

## Adding a New Client

1. Open `projectsData.ts`
2. Add a new object to the `majorProjectsData` array:

```typescript
{
  Client: "M/s New Client Name",
  Projects: [
    {
      "Project / Location": "City, State/Country",
      "Work Description": "Equipment or service provided",
      TPI: "Inspector name"
    }
  ]
}
```

## Adding Projects to Existing Client

Find the client in the array and add to their `Projects` array:

```typescript
{
  Client: "M/s Existing Client",
  Projects: [
    // ... existing projects ...
    {
      "Project / Location": "New Location",
      "Work Description": "New work description",
      TPI: "Inspector name"
    }
  ]
}
```

## Editing Existing Projects

1. Find the client and project you want to edit
2. Update the relevant fields
3. Save the file

## Removing Projects

1. Find the project in the array
2. Delete the entire project object
3. If it's the last project for a client, consider removing the entire client entry

## Best Practices

### Client Names
- Use full official names: "M/s Company Name Pvt. Ltd."
- Be consistent with naming conventions
- Include company type (Pvt. Ltd., Ltd., etc.)

### Project Locations
- Format: "Facility Name, City, State/Country"
- Be specific but concise
- Use "—" for projects without specific location

### Work Descriptions
- Be clear and technical
- Include quantities when relevant (e.g., "– 2 Nos.")
- Use standard industry terminology
- Keep descriptions concise but informative

### TPI (Third Party Inspector)
- Use official inspector names
- Can be company name or abbreviation
- Be consistent across similar projects

## Example: Complete Client Entry

```typescript
{
  Client: "M/s Sneha Farms Private Limited",
  Projects: [
    {
      "Project / Location": "Hyderabad",
      "Work Description": "Thermic Fluid Coil replacement",
      TPI: "Sneha Farms"
    },
    {
      "Project / Location": "Hyderabad",
      "Work Description": "Replacement of Thermic Fluid Coil Bundle along with Header for Deodoriser",
      TPI: "Sneha Farms"
    },
    {
      "Project / Location": "Hyderabad",
      "Work Description": "Replacement of Clamping Coil Bundle along with Supports for Deodoriser",
      TPI: "Sneha Farms"
    }
  ]
}
```

## After Making Changes

1. **Save the file**
2. **Check for TypeScript errors**: Run `npm run type-check`
3. **Test locally**: Run `npm run dev` and visit `/major-projects`
4. **Verify search works**: Try searching for your new entries
5. **Check responsiveness**: Test on different screen sizes

## Common Mistakes to Avoid

❌ **Don't forget commas** between objects
❌ **Don't use single quotes** - use double quotes for JSON-like structure
❌ **Don't forget to close brackets** - each `{` needs a `}`
❌ **Don't leave trailing commas** after the last item in an array

✅ **Do use consistent formatting**
✅ **Do test after changes**
✅ **Do keep backups** before major edits
✅ **Do follow the existing pattern**

## Validation Checklist

Before committing changes:

- [ ] All client names are properly formatted
- [ ] All projects have all three required fields
- [ ] No TypeScript errors
- [ ] Search functionality works with new data
- [ ] Page loads without errors
- [ ] Data displays correctly on all screen sizes

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Run `npm run type-check` to find TypeScript issues
3. Compare your changes with existing entries
4. Ensure all brackets and quotes are properly closed

## Statistics Update

After adding/removing clients or projects, update the hero section statistics in:
`src/app/major-projects/components/MajorProjectsHero.tsx`

Look for:
```typescript
<div className="font-brand-headline text-3xl text-primary">24+</div>
<div className="font-technical text-sm text-muted-foreground mt-1">Clients</div>
```

Update the numbers to reflect the current totals.
