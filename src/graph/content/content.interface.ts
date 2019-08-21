import Series from "./content_types/series";

export interface IContent {
    title: string
    contentType: string
    category: string
    tags: string[]
    description: string
    slug: string
    interaction_count: number
    id: string
    references: IContentReferences
    getReferences(): Promise<IContentReferences>;
}

export interface IContentReferences {
    imageUrl: string
    qualifiedUrl: string
}

export interface IContentConnector {
    getReferencedContent(content: IContent): Promise<IContentReferences>
    getSeriesDataForMessages(item): Promise<Series>
}
