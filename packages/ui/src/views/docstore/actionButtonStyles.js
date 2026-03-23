export const getDocStoreActionButtonSx = (theme) => ({
    p: 0.5,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        borderColor: theme.palette.text.secondary
    }
})
