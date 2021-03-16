# Creating a web app with Azure command-line interface (CLI) 

## generate a unique name and store as a shell variable

```bash
webappname=mywebapp$RANDOM
```
# create a resource group

```bash
az group create --location westeurope --name myResourceGroup
```

# create an App Service plan

```bash
az appservice plan create --name $webappname --resource-group myResourceGroup --sku FREE
```

# create a Web App

```bash
az webapp create --name $webappname --resource-group myResourceGroup --plan $webappname
```

# Deploying a web app with Azure CLI

## store a repository url as a shell variable

```bash
gitrepo=https://github.com/Azure-Samples/php-docs-hello-world
```
## deploy code from a Git repository

```bash
az webapp deployment source config --name $webappname --resource-group myResourceGroup --repo-url $gitrepo --branch master --manual-integration
```

## print out the FQDN for the Web App

```bash
echo http://$webappname.azurewebsites.net
```
