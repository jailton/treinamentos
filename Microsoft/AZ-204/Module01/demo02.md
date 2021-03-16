# Prerequisites

1. Access https://shell.azure.com
1. Change shell type to Powershel

# Creating an App Service plan with Azure PowerShell

## Create variables for the repository URL, Web App name and location

```
$gitrepo="https://github.com/Azure-Samples/app-service-web-dotnet-get-started.git"
```

```
$webappname="mywebapp$(Get-Random)"
```

```
$location="West Europe"
```

## Create new resource group

```
New-AzResourceGroup -Name myResourceGroup -Location $location
```

# Create new App Service plan

```
New-AzAppServicePlan -Name $webappname -Location $location -ResourceGroupName myResourceGroup -Tier Free
```

# Creating a Web App with Azure PowerShell

## Create new Web App

```
New-AzWebApp -Name $webappname -Location $location -AppServicePlan $webappname -ResourceGroupName myResourceGroup
```

## Create deployment resource manually using ARM

```
$PropertiesObject = @{
    repoUrl = "$gitrepo";
    branch = "master";
    isManualIntegration = "true";
}
```

```
Set-AzResource -PropertyObject $PropertiesObject -ResourceGroupName myResourceGroup -ResourceType Microsoft.Web/sites/sourcecontrols -ResourceName $webappname/web -ApiVersion 2015-08-01 -Force
```
