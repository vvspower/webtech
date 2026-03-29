LECTURE 4 GUIDE: (MONGO DB)

1. The Downloads
MongoDB Community Server (The Engine): Download the Windows MSI or Zip (Version 7.0 or 8.0+). This provides mongod.exe and mongosh.exe.

https://www.mongodb.com/try/download/community

MongoDB Database Tools (The Importer): Download the Windows Zip. This contains mongoimport.exe, which is not included in the server download.

https://www.mongodb.com/try/download/database-tools

Node.js (The Runner): Download the "Current" version (e.g., v23 or v24). You need this specific version to run TypeScript files directly without a heavy compiler.

https://nodejs.org/en/download/current

  
2. The Folder Setup (The "Dragging")
    Extract the Server: Unzip the MongoDB Server and go into the bin folder.
    Move the Tools: Open the Database Tools zip, copy mongoimport.exe, and paste it directly into that same bin folder.
    Create the Data Folder: Inside your main MongoDB folder, create a new folder named data and another inside it named db. Your path should look like .../bin/data/db.

3. The Commands

Open your terminal (CMD or PowerShell) inside the bin folder.
Step A: Start the Database Server
Run this and keep the window open:

mongod.exe --dbpath=data

Step B: Import your JSON Files
Open a second terminal in the bin folder. This command loops through your JSON folder and creates collections automatically:

for %f in (..\JSON\recapsheet\*.json) do mongoimport.exe --jsonArray --file="%f" -d recapsheet -c %~nf

Step C: Enable TypeScript Support
In your project terminal (where your REPL.ts is), run this once to tell Node to ignore TypeScript errors:
PowerShell

$env:NODE_OPTIONS = "--experimental-strip-types"

Step D: Run your Script
Finally, run your file directly:
PowerShell

node REPL.ts

4. The Project Files
    package.json: Ensure you have "type": "module" added to the top level.
    models/index.ts: Use mongodb://127.0.0.1:27017/recapsheet as your connection string.

