import fs from 'fs';

export class PropertyReader{

     static readProperties(fileName) {
         //const filePath=path.join(__dirname,'./config',fileName);
        const data = fs.readFileSync(fileName, 'utf-8');
        const properties = {};
        data.split('\n').forEach(line => {
            line = line.trim();
            // Ignore empty lines and comments
            if (!line || line.startsWith('#')) {
                return;
            }
            const [key, ...value] = line.split('=');
            properties[key.trim()] = value.join('=').trim();
        });
        return properties;
    }
}