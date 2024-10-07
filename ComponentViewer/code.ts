figma.showUI(__html__, { width: 240, height: 100 });

let componentsVisible = false;

figma.ui.onmessage = (msg) => {
    if (msg.type === 'activate') {
        componentsVisible = true;
        const nodes = figma.currentPage.findAll(node => node.type === 'COMPONENT' || node.type === 'INSTANCE');
        for (const node of nodes) {
            node.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
        }
    } else if (msg.type === 'deactivate') {
        componentsVisible = false;
        const nodes = figma.currentPage.findAll(node => node.type === 'COMPONENT' || node.type === 'INSTANCE');
        for (const node of nodes) {
            node.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // Reset to white
        }
    }
};