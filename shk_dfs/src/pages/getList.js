import { Dropdown } from "flowbite-react";
import React, {useEffect, useState, useContext} from "react";
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Table } from 'flowbite-react';
import { fetchAll, fetchsubSection } from '../http/ListAPI'


const getList = observer(() => {

    const {paths} = useContext(Context)

    const [selectedLabelSpk, setSelectedLabelSpk] = useState("Выберите подразделение");

    useEffect(() => {
        fetchsubSection().then(data => paths.setSubSection(data))
    }, [])


    return (
    <div className= 'flex justify-center mt-10'>
        <div className='flex flex-col items-center'>
        <p className='mb-4'>Перечень сетевых файловых ресурсов, владельцем которых является:</p>
            <div className='mb-4'>
                <Dropdown label={selectedLabelSpk} dismissOnClick={false}>
                    {paths.subSection.map(data => (
                        <Dropdown.Item onClick={()=> {
                            paths.setSelectedSubSection(data)
                            setSelectedLabelSpk(data.name)
                            fetchAll(paths.selectedSubSection.id).then(data => paths.setPath(data))
                        }} key={data.id}>
                            {data.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Путь до ресурса</Table.HeadCell>
                        <Table.HeadCell>ФИО Владельца (основной)</Table.HeadCell>
                        <Table.HeadCell>ФИО Владельца (резервной)</Table.HeadCell>
                        <Table.HeadCell>Основание</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        { 
                            paths.path ?
                            paths.path.map(data => ( 
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{data.folder.path}</Table.Cell>
                                    <Table.Cell>{data.folder.manager.first_manager}</Table.Cell>
                                    <Table.Cell>{data.folder.manager.second_manager}</Table.Cell>
                                    <Table.Cell>Дата: {data.folder.manager.order_date} №{data.folder.manager.order_num}</Table.Cell>
                                </Table.Row>  
                            )) 
                            :
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    </div>
    );
});

export default getList;