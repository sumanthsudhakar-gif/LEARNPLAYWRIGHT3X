# Windows Commands — CMD & PowerShell

## Command Prompt (CMD)

### File & Directory Operations

| Command | Description | Example |
|---------|-------------|---------|
| `dir` | List files and directories | `dir` |
| `cd` | Change directory | `cd C:\Users` |
| `cd ..` | Go up one directory | `cd ..` |
| `cd \` | Go to root | `cd \` |
| `mkdir` (or `md`) | Create directory | `mkdir myfolder` |
| `rmdir` (or `rd`) | Remove directory | `rd /s myfolder` |
| `del` | Delete file(s) | `del file.txt` |
| `copy` | Copy file | `copy a.txt b.txt` |
| `xcopy` | Copy directory tree | `xcopy /E src dst` |
| `move` | Move / rename file | `move old.txt new.txt` |
| `ren` | Rename file | `ren old.txt new.txt` |
| `type` | Display file contents | `type file.txt` |
| `more` | View file page by page | `more file.txt` |
| `echo` | Print text / create file | `echo hello > file.txt` |
| `tree` | Show directory tree | `tree` |

### Disk & System

| Command | Description | Example |
|---------|-------------|---------|
| `cls` | Clear screen | `cls` |
| `ver` | Show Windows version | `ver` |
| `systeminfo` | Detailed system info | `systeminfo` |
| `chkdsk` | Check disk for errors | `chkdsk C:` |
| `diskpart` | Disk partition manager | `diskpart` (opens tool) |
| `vol` | Show volume label/serial | `vol C:` |
| `label` | Change volume label | `label C: MYDRIVE` |

### Network

| Command | Description | Example |
|---------|-------------|---------|
| `ipconfig` | Show IP configuration | `ipconfig` |
| `ipconfig /all` | Detailed IP info | `ipconfig /all` |
| `ping` | Test network connectivity | `ping google.com` |
| `tracert` | Trace route to host | `tracert google.com` |
| `nslookup` | DNS lookup | `nslookup google.com` |
| `netstat` | Show active connections | `netstat -an` |
| `nbtstat` | NetBIOS stats | `nbtstat -n` |
| `route` | Display / modify route table | `route print` |

### Process & Task

| Command | Description | Example |
|---------|-------------|---------|
| `tasklist` | List running processes | `tasklist` |
| `taskkill` | Terminate a process | `taskkill /F /IM notepad.exe` |
| `start` | Launch a program | `start notepad.exe` |
| `exit` | Close CMD window | `exit` |

### File Permissions & Info

| Command | Description | Example |
|---------|-------------|---------|
| `attrib` | View / change file attributes | `attrib +r file.txt` |
| `cipher` | Encrypt / decrypt files | `cipher /E folder` |
| `fc` | Compare two files | `fc a.txt b.txt` |
| `find` | Search for string in file | `find "error" log.txt` |
| `sort` | Sort file contents | `sort file.txt` |

### Environment & Date

| Command | Description | Example |
|---------|-------------|---------|
| `set` | Show / set environment vars | `set PATH` |
| `date` | Show / set date | `date` |
| `time` | Show / set time | `time` |
| `prompt` | Change command prompt text | `prompt $P$G` |
| `path` | Display / set PATH variable | `path` |

### Other Utilities

| Command | Description | Example |
|---------|-------------|---------|
| `help` | Show help for a command | `help dir` |
| `shutdown` | Shutdown / restart system | `shutdown /s /t 0` |
| `assoc` | Show file associations | `assoc .txt` |
| `ftype` | Show file type associations | `ftype txtfile` |
| `where` | Locate a program in PATH | `where node` |
| `powershell` | Launch PowerShell from CMD | `powershell` |

---

## Windows PowerShell

### Basic Navigation

| Cmdlet / Command | Alias | Description | Example |
|------------------|-------|-------------|---------|
| `Get-Location` | `pwd` `gl` | Show current path | `pwd` |
| `Set-Location` | `cd` `sl` | Change directory | `cd C:\Users` |
| `Get-ChildItem` | `ls` `dir` `gci` | List files & folders | `ls` |
| `New-Item` | `ni` | Create file or folder | `ni file.txt` |
| `Remove-Item` | `rm` `del` `ri` | Delete file or folder | `rm file.txt` |
| `Copy-Item` | `cp` `copy` `ci` | Copy file or folder | `cp a.txt b.txt` |
| `Move-Item` | `mv` `move` `mi` | Move or rename | `mv old.txt new.txt` |
| `Rename-Item` | `ren` `rni` | Rename item | `ren old.txt new.txt` |
| `Get-Content` | `cat` `type` `gc` | Read file contents | `cat file.txt` |
| `Set-Content` | `sc` | Write to file | `sc file.txt "hello"` |
| `Add-Content` | `ac` | Append to file | `ac file.txt "more"` |
| `Clear-Host` | `cls` `clear` | Clear screen | `cls` |

### File System Utilities

| Cmdlet | Alias | Description | Example |
|--------|-------|-------------|---------|
| `New-Item -ItemType Directory` | `mkdir` `md` | Create folder | `mkdir myfolder` |
| `Get-ChildItem -Recurse` | `ls -r` | List recursively | `ls -r *.js` |
| `Get-ChildItem -Filter` | `ls *.js` | Filter by extension | `ls *.js` |
| `Select-String` | `sls` | Search text in files | `sls "TODO" *.js` |
| `Compare-Object` | `diff` `compare` | Compare two files/objects | `diff (cat a) (cat b)` |

### Process & Service

| Cmdlet | Alias | Description | Example |
|--------|-------|-------------|---------|
| `Get-Process` | `ps` `gps` | List running processes | `ps` |
| `Stop-Process` | `kill` `spps` | Kill a process | `kill -Name notepad` |
| `Start-Process` | `start` `saps` | Start a program | `start notepad` |
| `Get-Service` | `gsv` | List services | `Get-Service` |
| `Start-Service` | `sasv` | Start a service | `Start-Service Spooler` |
| `Stop-Service` | `spsv` | Stop a service | `Stop-Service Spooler` |

### Network

| Cmdlet / Command | Description | Example |
|------------------|-------------|---------|
| `Test-Connection` | Ping a host | `Test-Connection google.com` |
| `Test-NetConnection` | Advanced network test | `Test-NetConnection google.com -Port 80` |
| `Resolve-DnsName` | DNS lookup | `Resolve-DnsName google.com` |
| `Get-NetIPAddress` | Show IP configuration | `Get-NetIPAddress` |
| `Get-NetAdapter` | Show network adapters | `Get-NetAdapter` |

### System Info

| Cmdlet | Description | Example |
|--------|-------------|---------|
| `Get-ComputerInfo` | Full system info | `Get-ComputerInfo` |
| `Get-OS` | OS details | `Get-ComputerInfo \| Select OsName` |
| `Get-Date` | Current date/time | `Get-Date` |
| `Get-LocalUser` | List local users | `Get-LocalUser` |

### Object & Pipeline (PowerShell Unique)

| Concept | Description | Example |
|---------|-------------|---------|
| Pipeline `|` | Pass objects (not text) | `ls \| where Length -gt 1kb` |
| `Where-Object` (`?`) | Filter pipeline | `ps \| ? ProcessName -like "node*"` |
| `Select-Object` (`select`) | Pick properties | `ls \| select Name,Length` |
| `Sort-Object` (`sort`) | Sort results | `ls \| sort Length -Descending` |
| `Group-Object` (`group`) | Group results | `ls \| group Extension` |
| `ForEach-Object` (`%`) | Loop over items | `1..5 \| % { $_ * 2 }` |
| `Export-Csv` | Export to CSV | `ps \| Export-Csv processes.csv` |
| `ConvertTo-Json` | Convert to JSON | `ls \| ConvertTo-Json` |
| `Out-File` (`>`) | Redirect to file | `ls > output.txt` |

### Variable & Execution

| Concept | Description | Example |
|---------|-------------|---------|
| `$variable` | Variables start with `$` | `$name = "John"` |
| `$_` | Current pipeline object | `ls \| % { $_.Name }` |
| `&` | Call operator (run script/command) | `& ".\myscript.ps1"` |
| `@()` | Array subexpression | `@(1,2,3)` |
| `@{}` | Hash table | `@{Name="John"; Age=30}` |

---

## Common CMD ↔ PowerShell Mapping

| Task | CMD | PowerShell |
|------|-----|-----------|
| List files | `dir` | `ls` or `dir` or `Get-ChildItem` |
| Change dir | `cd path` | `cd path` or `Set-Location path` |
| Clear screen | `cls` | `cls` or `Clear-Host` |
| Delete file | `del file.txt` | `del file.txt` or `Remove-Item file.txt` |
| Read file | `type file.txt` | `cat file.txt` or `Get-Content file.txt` |
| Find in file | `find "text" file` | `sls "text" file` or `Select-String` |
| Ping | `ping host` | `Test-Connection host` |
| Kill process | `taskkill /F /IM name` | `kill -Name name` or `Stop-Process` |
| Environment var | `set PATH` | `$env:PATH` |
| Date | `date /t` | `Get-Date` |
| Help | `help command` | `Get-Help command` or `help command` |

---

## Quick Reference — Most Used (Windows)

```
CMD:
  dir          → List files
  cd path      → Change directory
  cls          → Clear screen
  ipconfig     → Network info
  type file    → Read file
  mkdir        → Create folder
  del file     → Delete file

PowerShell:
  ls           → List files (with color)
  cat file     → Read file
  ps           → List processes
  sls "text"   → Search text in files
  | where ...  → Filter results
  $var = ...   → Create variable
```
