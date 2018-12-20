# powershell

## parameter blocks

```powershell
param(
    [string]$fullDBName,
    [string]$newDBName,
    [string]$source,
    [string]$destination,
    [System.Object]$config,
    [string]$customerID,
    [parameter(Mandatory=$true)][bool]$json
)
```

## variables

```powershell
$config = Get-Content -Path $path
```

## progress bars

```powershell
Write-Progress -Activity $activityMessage -Status $status -PercentComplete 0
```

## http requests

### post

```powershell
$method = "POST"
$json = [pscustomobject]@{TenantId = "$GUID"}
$body = $json | ConvertTo-Json
Invoke-RestMethod -Uri $delEnvURL -Method $method -Body $body
```

### Get

```powershell
$connectionTimeout = 90
$connectionString = "Data Source={0};Initial Catalog={1};User ID={2};Password={3};Connection Timeout={4};" -f $serverName, $databaseName, $serverAdmin, $serverPassword, $connectionTimeout
Write-Host "Connection String $connectionString"
$connection = New-Object -TypeName System.Data.SqlClient.SqlConnection($connectionString)
$command = New-Object -TypeName System.Data.SqlClient.SqlCommand($query, $connection)
if ($connection.State -eq 'Closed'){
    $connection.Open()
}
if($read){
    $reader = $command.ExecuteReader()
    if($multiple){
        $response = @()
    }
    while($reader.Read()){
        if($multiple){
            $response += $reader[0]
        } else {
            $response = $reader[0]
        }
    }
    return $response
} else {
    $command.ExecuteNonQuery() | Out-Null
    $connection.Close()
    return 0;
}
```

## string formatting

```powershell
$connectionString = "Data Source={0};Initial Catalog={1};User ID={2};Password={3};Connection Timeout={4};" -f $serverName, $databaseName, $serverAdmin, $serverPassword, $connectionTimeout
```

## hash tables

```powershell
$hash = @{}
Foreach ($key in $hash.Keys) {
    $new = $base.Replace($key, $hash.$key)
}

```

### Convert json to hashtable

```powershell
function Convert-JsonToHash {
    param(
        [string]$jsonString
    )
     $hash = @{}
     # Set JSON pairs as HashTable Key,Values
     (ConvertFrom-Json $jsonString).psobject.properties | ForEach-Object { $hash[$_.Name] = $_.Value }
     return $hash
}
```

## Passwords

### password with complexity

```powershell
function Get-RandomPassword {
    param(
        [int] $length = 10,
        [int] $alphanum = 5
    )
    # SQL Requires 3 of 4: An uppercase letter A-Z, a lowercase letter a-z, a digit 0-9, and a symbol (!,$,#,%, etc.)
    $meetsComplexity = $false
    $numMatches = 0
    while (!$meetsComplexity) {
        $pass = [system.web.security.membership]::GeneratePassword($length,$alphanum)
        # Check for Uppercase letter
        if($pass -match '[A-Z]+'){
            $numMatches += 1
        }
        # Check for lowercase letter
        if($pass -match '[a-z]+'){
            $numMatches += 1
        }
        # Check for digit
        if($pass -match '[0-9]+'){
            $numMatches += 1
        }
        # Check for symbol
        if($pass -match '[@#$%&*()!]+'){
            $numMatches += 1
        }
        if($numMatches -ge 3){
            $meetsComplexity = $true
        }
    }
    return $pass
}
```

## Get AzureDevOps Git Repo File Contents

```powershell
function Get-RepoFIle() {
    param(
        [string]$filePath,
        [string]$fileName,
        [switch]$json
    )
    # $organization = "Fastpath"
    $repoName = ""
    $repoID = ""
    # $uri = ('https://dev.azure.com/{0}/{1}/_apis/git/repositories/{2}/{3}{4}&api-version=4.1&download=false&includeContent=true&$format=json' -f $organization, $repoName, $repoID, $filePath, $fileName)
    $uri = ('https://{company}.visualstudio.com/{0}/_apis/git/repositories/{1}/{2}{3}&api-version=4.1&download=false&includeContent=true' -f $repoName, $repoID, $filePath, $fileName)
    if($json){
        $uri = $uri + '&$format=json'
    }
    $personalAccessToken = Get-KeyVaultSecret -vaultName "" -name ""
    $data = Invoke-RestMethod -Uri $uri -Method "GET" -Headers @{Authorization = 'Basic ' + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$($personalAccessToken)")) }
    
    if($json){
        $data = $data.content
        $data = $data | ConvertFrom-Json
    }
    return $data
}
```

## Json Objects
If all else fails, try this:

```powershell
foreach ($key in $devAccounts.PSObject.Properties.Name){
    $devAccounts.Key
}
```

## PSCustomObjects

[Information Here](https://kevinmarquette.github.io/2016-10-28-powershell-everything-you-wanted-to-know-about-pscustomobject/)